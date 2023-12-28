
import { Link } from 'react-router-dom';

export default function Navbar(props){ 
    return(
        <>
        <nav id="navColor" className={`navbar navbar-expand navbar-${props.mode}`} >
  <div className="container-fluid" >
    <Link className="navbar-brand tcolor h1 text-right"  to="/" >Textutils</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link tcolor"  aria-current="page" to="/" onClick={props.pageChange} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={props.pageChange} >About</Link>
        </li>
      </ul>
      <label className={`form-check-label textMode mx-1 text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">ColourModes:</label>
  <div className="modediv"><button id="blackbtn" className="modebtn" onClick={props.toggleMode} value="black"></button><button  id="whitebtn" className="modebtn" onClick={props.toggleMode} value="white"></button><button id="bluebtn" className="modebtn" onClick={props.toggleMode} value='blue'></button><button id="purplebtn" className="modebtn" onClick={props.toggleMode} value='purple'></button><button id="greenbtn" className="modebtn" onClick={props.toggleMode} value='green'></button></div>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
</nav>
        </>
    );
}

