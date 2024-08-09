import { useNavigate } from 'react-router-dom';


function LandingPage () {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/home');
    }
  
    return (
      <div>
        <h1>Star Wars</h1>
        <button onClick={handleEnter}>Descubrir</button>
      </div>
      
    )
  }
  
  export default LandingPage;