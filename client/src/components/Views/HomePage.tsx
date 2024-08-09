import NavBar from "../NavBar/NavBar";
import PlanetList from "../Card/CardPlanet";

function HomePage () {
  
    return (
      <div>
        <NavBar/>
        <h1>Explora la Api mas grande de Star Wars</h1>
        <PlanetList/>
        
      </div>
      
    )
  }
  
  export default HomePage;