
import axios from 'axios';
import { IPlanet } from '../components/Card/interfaceIPlanet';

const baseURL = 'http://localhost:3000/api/planets';

export const getPlanets = async (): Promise<IPlanet[]> => {
  try {
    const response = await axios.get<IPlanet[]>(baseURL);
    return response.data; // La respuesta debe ser un array de IPlanet
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error; // Propaga el error para que pueda ser manejado en el componente
  }
};
