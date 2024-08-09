import React, { useEffect, useState } from "react";
import { getPlanets } from '../../server-conect/getPlanets';
import { IPlanet } from "./interfaceIPlanet";
import PlanetCard from "../PlanetCard/PlanetCard";
import "./CardPlanet.css"

const PlanetsList: React.FC = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const planetsData = await getPlanets();
        if (Array.isArray(planetsData)) {
          setPlanets(planetsData);
        } else {
          console.error("Unexpected data format:", planetsData);
          setError("Unexpected data format from server");
        }
      } catch (err) {
        console.error("Error fetching planets:", err);
        setError("Failed to fetch planets");
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Planets</h1>
      <div className="container">
        {planets.length > 0 ? (
          planets.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))
        ) : (
          <p>No planets available</p>
        )}
      </div>
    </div>
  );
};

export default PlanetsList;
