import { type Request, type Response, type NextFunction } from "express";

const ErrorMW = (
  error: any,
  req: Request,
  res: Response,
  nxt: NextFunction
): any => {
  let statusCode: number = 500;

  const errorInfo: any = {
    message: `Internal Server Error: ${error.message}`,
    path: error.stack?.split("at ")[1].trim() || JSON.stringify(error),
  };

  if (error.name == "AxiosError") {
    statusCode = error.status;
    errorInfo[error.name] = error.response.data;
  }

  console.error(errorInfo);

  return res.status(statusCode).json({ error: errorInfo });
};

export default ErrorMW;