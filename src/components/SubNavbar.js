import React, { Component } from 'react';
import './SubNavbar.css';
import { Link } from 'react-router-dom'; //used to link <route> to nav bar



class SubNavbar extends React.Component {

    render() {
    return (
        <div className="subnav-container" id="container-1a">

            <li className="shop-dropdown"><strong>Shop</strong></li>
            <Link to="/equipment"><li>Equipment</li></Link>
            <Link to="/barbells"><li>Barbells</li></Link>
            <Link to="/plates"><li>Plates</li></Link>
            <Link to="/shoes"><li>Shoes</li></Link>
            <Link to="/apparel"><li>Apparel</li></Link>

        </div>
    )}

}

export default SubNavbar;