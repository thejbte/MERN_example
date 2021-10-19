import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <div className ="header">
      <span><Link to="../../public/index.html"> <img className="avatar" /> 
        LOGO</Link> </span>
      </div>

    <header>
        <nav className="menu">
            <ul>
                <li> <Link to="/src/pages/ingreso"> Inicio</Link></li>
            
                {/*item list en bloque*/}
                {/* unordered list */}
                        <li><Link to="/src/pages/user"> Usuarios </Link> </li>
                        <li><Link to="/src/pages/ventas"> Ventas </Link></li>
                        <li><Link to="/src/pages/productos"> productos </Link></li>
    
                <li><a href="#">contact</a></li>
                <li><a href="#">logout</a></li>
            </ul>
        </nav>
    </header>   
        </div>
    )
}

export default Header
