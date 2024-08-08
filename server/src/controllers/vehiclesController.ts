import { Request, Response } from "express";
import { getVehiclesService } from "../services/vehicleService";
import catchAsync from "../utils/CatchAsync";

export const getVehicles = catchAsync(async (req: Request, res: Response) => {
    const vehicles = await getVehiclesService();
    res.status(200).json(vehicles);
});