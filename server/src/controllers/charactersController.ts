import { Request, Response } from "express";
import { getCharactersService } from "../services/characterService";
import catchAsync from "../utils/CatchAsync";

export const getCharacters = catchAsync(async (req: Request, res: Response) => {
    const characters = await getCharactersService();
    res.status(200).json(characters);
});