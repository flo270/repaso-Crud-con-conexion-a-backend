import React from 'react'
import {Link} from 'react-router-dom'

function Header()  {
  return (
    <div className='conteiner-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">Navbar</Link>
        <button className="navbar-toggler btn-dark" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-warning"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to="/crear">crear</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
            </li>
            </ul>
        
        </div>
        </div>
        </nav>
    </div>
    
  )
}

export default Header