import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

export default function ProductCard(props) {

    return (
            <div className="products">
                <div className="product-card" key={props.id}>
                    <div className="image"><img src={props.image} width="250" height="160"/></div>
                    <div className="card-description">
                        <Link to={`/Products/${props.category}/${props.id}`}><strong>{props.name}</strong></Link>
                        <ul>{props.review} Stars</ul>
                        <ul>${props.price}</ul>
                        <button className="add">Add to Cart</button>
                    </div>
                </div>
            </div>

        
        
    )
}
