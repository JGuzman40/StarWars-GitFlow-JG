import { Router } from "express";

import { getPlanets } from "../controllers/planetsController";
import { getCharacters } from "../controllers/charactersController";
import { getFilms } from "../controllers/filmsController";
import { getSpecies } from "../controllers/speciesController";
import { getStarships } from "../controllers/starshipsController";
import { getVehicles } from "../controllers/vehiclesController";

const router = Router();

router.get("/planets", getPlanets);
router.get("/characters", getCharacters);
router.get("/films", getFilms);
router.get("/species", getSpecies);
router.get("/starships", getStarships);
router.get("/vehicles", getVehicles);

export default router;