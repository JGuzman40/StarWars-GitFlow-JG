import axios from "axios";
import { IFilm } from "../Interfaces/IFilm";

const API_URL = "https://swapi.dev/api";

export const getFilmsService = async (): Promise<IFilm[]> => {
    const response = await axios.get(`${API_URL}/films`);
    return response.data.results;
}