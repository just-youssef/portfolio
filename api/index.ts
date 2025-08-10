// express, and third party modules
import express, { urlencoded, json, text } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";
import next from "next";

// app router
import appRouter from "@/routers/app.router";

// error middleware
import ErrorMW from "@/middlewares/error.mw";

// http server
import http from "http";
import { connect } from "mongoose";
import ServerlessHttp from "serverless-http";

// initialize root path
const root = path.resolve();

// load environment variables
const NODE_ENV = process.env.NODE_ENV;

// initialize app
const app = express();

// include client build only in production
if (NODE_ENV == "production") {
  // prepare client routes (nextjs)
  const clientRoot = path.join(root, "..", "client");
  const nextApp = next({ dir: clientRoot });
  const nextHandler = nextApp.getRequestHandler();

  await nextApp.prepare();
  console.log("nextjs app is ready!");

  app.get(/.*/, (req, res, nxt) => {
    // exclude api routes
    if (req.url.startsWith("/api")) {
      return nxt();
    }

    // handle everything else with nextjs
    return nextHandler(req, res);
  });
}

// using app middlewares
const corsOptions: any = {
  origin: [process.env.NEXT_PUBLIC_CLIENT],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(text());
app.use(cookieParser());

// api routes
app.use("/api", appRouter);

// using error middleware at the end
app.use(ErrorMW);

// Catch uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  // Continue running without exiting
});

// Catch unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Continue running without exiting
});

// first connect to mongodb
await connect(process.env.MONGODB_URI!, { dbName: "portfolio" });

if (NODE_ENV == "development") {
  // init http server
  const server = http.createServer(app);

  // initialize port
  const port = process.env.PORT;

  server.listen(port, () => {
    console.log(`${NODE_ENV} server running on http://localhost:${port}`);
  });
}

export default ServerlessHttp(app);
