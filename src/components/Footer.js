import React from 'react';
import './Footer.css';
import Facebook from '../assets/facebook2.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';


const Footer = () => {
    return (
        <div className="footer" id="container-1a">

        <div className="three-columns">
            <div className="single-column">
                <h2>Follow Us On Social Media</h2>

                <div className="social-media">
                    <img src={Facebook}/>
                    <img src={Instagram}/>
                    <img src={Youtube}/>
                </div>

                <div className="shopLearn">
                    <li>Shop and Learn</li>
                    <li>Services</li>
                    <li>Account</li>
                </div>
            </div>

            <div className="single-column">
                <h2><strong>Contact Us</strong></h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>

            <div className="single-column">
                <h2><strong>Header 1</strong></h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>

        </div>
        



            




        </div>
    )

}

export default Footer;