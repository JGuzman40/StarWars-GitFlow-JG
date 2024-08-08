import axios from 'axios';
import { IVehicle } from '../Interfaces/IVehicle';

const API_URL = 'https://swapi.dev/api';

export const getVehiclesService = async (): Promise<IVehicle[]> => {
    const response = await axios.get(`${API_URL}/vehicles`);
    return response.data.results;
} 