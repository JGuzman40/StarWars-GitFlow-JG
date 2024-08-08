import axios from "axios"; 
import { IPlanet } from "../Interfaces/IPlanet";

const API_URL = 'https://swapi.dev/api/';

export const getPlanetsService = async (): Promise<IPlanet[]> => {
    const response = await axios.get(`${API_URL}/planets/`);
    return response.data.results;
}