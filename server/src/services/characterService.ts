import axios from "axios";
import { ICharacter } from "../Interfaces/ICharacter";

const API_URL = 'https://swapi.dev/api';

export const getCharactersService = async (): Promise<ICharacter[]> => {
    const response = await axios.get(`${API_URL}/people`);
    return response.data.results;
}