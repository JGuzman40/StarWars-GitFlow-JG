import axios from "axios";
import { ISpecies } from "../Interfaces/ISpecies";

const API_URL = "https://swapi.dev/api";

export const getSpeciesService = async (): Promise<ISpecies[]> => {
    const response = await axios.get(`${API_URL}/species`);
    return response.data.results;
}