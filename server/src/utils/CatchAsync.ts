import { Request, Response, NextFunction } from "express";

type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const catchAsync = (controller: ControllerFunction) => {
    return (req: Request, res: Response, next: NextFunction) => {
        controller(req, res, next).catch((err) => next(err));
    }
};

export default catchAsync;