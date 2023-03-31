import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css"
import {NavLink} from "react-router-dom"

function Nav({onSearch,logout}){
   return (
    <div className="nav">
    <NavLink to="/about">
    <button>About</button>
    </NavLink>
    <NavLink to="/">
    <button>Home</button>
    </NavLink>
    <SearchBar onSearch={onSearch}/>
    <button onClick={logout}>LogOut</button>
   
    </div>
   );


}

export default Nav;