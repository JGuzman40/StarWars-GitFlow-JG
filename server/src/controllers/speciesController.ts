import { Request, Response } from "express";
import { getSpeciesService } from "../services/speciesService";
import catchAsync from "../utils/CatchAsync";

export const getSpecies = catchAsync(async (req: Request, res: Response) => {
    const species = await getSpeciesService();
    res.status(200).json(species);
});