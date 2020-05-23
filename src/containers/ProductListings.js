import React from 'react';
import './ProductListings.css';
import Filter from '../components/Filter';


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
