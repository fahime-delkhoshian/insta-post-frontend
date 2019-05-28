import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
             <div className="container">
              <div className="Nav-menus">
                  <Link className="Nav-brand-logo" to="/">
                    Instagram
                  </Link>
                </div>
             </div>
           </nav>
       );
    }   
}
export default Header;