// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './styles/header.css'

const Header=()=>{
    return(
        <>
        <div>
            {/* <Link to={{
                pathname:"/courses", //EXTRA PARAMETERS WILL APPEAR IN THE URL 
                hash: "#1234",
                search:"?paid:true
                }}>Courses</Link> */}

            <NavLink activeClassName= "header-active-item"  to="/courses">Courses</NavLink>
        </div>

        <div>
        <NavLink activeClassName= "header-active-item" to="/about">About Us</NavLink>
        </div>
       
        </>
    );
}

export default Header;