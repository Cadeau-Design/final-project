import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <div className='navigation'>

            <div className='logo'>
                <a href=""><img src="/images/Finallogo.png"  alt="logo"></img></a>
            </div>

            <ul className="navigation_right">
            <li ClassName="link"><Link to="/Host">Become a host</Link></li>
            <li><Link exact to="/Login">Login</Link></li>

            </ul>
            
                
            
        </div>
    )
}

export default Navigation
