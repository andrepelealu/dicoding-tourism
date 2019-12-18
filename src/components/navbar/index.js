import React from 'react'
import './style.css'
function Nav(){
    return(
        <nav>
            
            <div className="nav-wrapper grey lighten-5">
            <a href="/" className="brand-logo center"><img className="logo" alt="logo" src="https://i.ibb.co/2qM7MCk/visit-indonesia-logo-vector-png-visit-indonesia-ye-16107e8c88a4dac8.png"/>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
      </nav>
        

      
    )
}

export default Nav