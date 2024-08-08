import { Request, Response } from "express";
import { getStarshipsService } from "../services/starshipService";
import catchAsync from "../utils/CatchAsync";

export const getStarships = catchAsync(async (req: Request, res: Response) => {
    const starships = await getStarshipsService();
    res.status(200).json(starships);
});