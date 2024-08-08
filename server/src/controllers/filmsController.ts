import { Request, Response } from "express";
import { getFilmsService } from "../services/filmService";
import catchAsync from "../utils/CatchAsync";

export const getFilms = catchAsync(async (req: Request, res: Response) => {
    const films = await getFilmsService();
    res.status(200).json(films);
});