import React, { useState} from 'react';
import './ProductListings.css';
import ArrowUp from '../assets/keyboard_arrow_up.svg';
import ArrowDown from '../assets/keyboard_arrow_down.svg';
import {Link} from 'react-router-dom';
import Filter from '../components/Filter';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import ProductCard from '../components/ProductCard';


export default function ProductListings(passedCards, props) {

    //console.log(passedCards)

    return(
        <div className="main-container">

                <div className="products-wrapper"  >
                    <div className="sidebar">
                        <Filter/>
                    </div>
                    <div className="products-listings">
                        {passedCards.equipmentCards}
                        {passedCards.barbellCards}
                        {passedCards.plateCards}
                        {passedCards.shoeCards}
                        {passedCards.apparelCards}
                    </div>
                </div>

    </div>


    )
}
