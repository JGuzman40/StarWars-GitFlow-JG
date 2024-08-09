import React from "react";
import { IPlanet } from "../Card/interfaceIPlanet"; 
import "./PlanetCard.css";


interface PlanetCardProps {
  planet: IPlanet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <div className="card">
      <h2 className="card-title">{planet.name}</h2>
      <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
      <p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
      <p><strong>Diameter:</strong> {planet.diameter}</p>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Surface Water:</strong> {planet.surface_water}</p>
      <p><strong>Population:</strong> {planet.population}</p>
    </div>
  );
};

export default PlanetCard;
