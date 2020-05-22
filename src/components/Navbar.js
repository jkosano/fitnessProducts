import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; //used to link <route> to nav bar
import { Spring, Transition, animated } from 'react-spring/renderprops';



class Navbar extends React.Component{

    openSlideMenu = () => {
        document.getElementById('side-menu').style.width = '250px';
        //document.getElementById('main').style.marginLeft = '250px';
        document.getElementById('container-1a').style.marginLeft = '250px';
      }
  
     closeSlideMenu = () => {
        document.getElementById('side-menu').style.width = '0';
        //document.getElementById('main').style.marginLeft = '0';
        document.getElementById('container-1a').style.marginLeft = '0';
      }
    render () {

        const style2={
            color: 'white',
            fontSize: 12
        
          }

        return (
        
        <div >  
            <nav>
            <span className="open-slide">
                    <a href="#" onClick={this.openSlideMenu}>
                        <svg width="30" height="30">
                            <path d="M0,5 30,5" stroke="#fff" strokeWidth="5"/>
                            <path d="M0,14 30,14" stroke="#fff" strokeWidth="5"/>
                            <path d="M0,23 30,23" stroke="#fff" strokeWidth="5"/>
                        </svg>
                    </a>
                </span>
                <div className="logo">
                <Link to="/">Stark Industries</Link>
                </div>

                    <ul className="nav-links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/products"><li>Products</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>         
            </nav>
            
            <div id="side-menu" className="side-nav">
                <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/about"><li>About</li></Link>
            </div>




        </div>  
        );
    }
    

}

export default Navbar;

/*

            <nav>
            <span className="open-slide">
                    <a href="#" onClick={this.openSlideMenu}>
                        <svg width="30" height="30">
                            <path d="M0,5 30,5" stroke="#fff" strokeWidth="5"/>
                            <path d="M0,14 30,14" stroke="#fff" strokeWidth="5"/>
                            <path d="M0,23 30,23" stroke="#fff" strokeWidth="5"/>
                        </svg>
                    </a>
                </span>
                <div className="logo">Stark Industries</div>
                

                    <ul className="nav-links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/products"><li>Products</li></Link>
                        <Link to="/loginpage"><li>Contact</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>         
            </nav>
            <div id="side-menu" className="side-nav">
                <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/loginpage"><li>Contact</li></Link>
                <Link to="/about"><li>About</li></Link>
            </div>


*/