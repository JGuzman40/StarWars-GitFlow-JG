import { Request, Response } from "express";
import { getPlanetsService } from "../services/planetService";
import catchAsync from "../utils/CatchAsync";

export const getPlanets = catchAsync (async (req: Request, res: Response) => {
    const planets = await getPlanetsService();
    res.status(200).json(planets);
});