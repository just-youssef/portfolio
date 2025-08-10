import { Router } from "express";
import projectRouter from "./project.router";

// root router
const appRouter = Router();

appRouter.use("/project", projectRouter);

export default appRouter;
