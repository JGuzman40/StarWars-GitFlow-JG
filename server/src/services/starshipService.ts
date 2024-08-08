import axios from 'axios';
import { IStarship } from '../Interfaces/IStarship';

const API_URL = 'https://swapi.dev/api';

export const getStarshipsService = async (): Promise<IStarship[]> => {
    const response = await axios.get(`${API_URL}/starships`);
    return response.data.results;
} 