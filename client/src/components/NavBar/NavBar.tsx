import { Link } from 'react-router-dom';


function NavBar () {
  
    return (
      <div>
        <ul>
            <li >
                <Link to="/home" >Home</Link>
            </li>
            <li >
                <Link to="/home/:id" >Detail</Link>
            </li>
            <li >
                <Link to="/" >Salir</Link>
             </li>
        </ul>
       
        
      </div>
      
    )
  }
  
  export default NavBar;