import React, { useState, setState } from 'react';
import './Filter.css';
import {Link} from 'react-router-dom';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import ArrowUp from '../assets/keyboard_arrow_up.svg';
import ArrowDown from '../assets/keyboard_arrow_down.svg';

export default function Filter() {

    //render state for filter sidebar to appear when button is clicked
    const [state, setState] = useState(false);
    //const [products, setProducts] = useState(true);
    const toggleFilter = () => {setState(!state)};

    //render brand dropdown when clicked
    const [isBrandOn, setIsBrandOn] = useState(false); 
    const toggleBrand = () => {setIsBrandOn(!isBrandOn)};

    //render reviews dropdown when clicked
    const [isReviewOn, setIsReviewOn] = useState(false);
    const toggleReview = () => {setIsReviewOn(!isReviewOn)};

    //render price dropdown when clicked
    const [isPriceOn, setIsPriceOn] = useState(false);
    const togglePrice = () => {setIsPriceOn(!isPriceOn)};


    const brands = (
        <div className="list-wrapper">
            <Transition
                native
                items={useState()}
                from={{ opacity: 0, marginTop: -40 }}
                enter={{ opacity: 1, marginTop: 0}}
                leave={{ opacity: 0 }}
                config={{ delay: 100, duration: 100 }}
                >
                {show => show && (props => (
                <animated.div style={props}>
                    <ul><input type="checkbox" id="rogue" name="rogue" value="Bike"/>Rogue</ul>
                    <ul><input type="checkbox" id="elitefts" name="elitefts" value="elitefts"/>EliteFTS</ul>
                    <ul><input type="checkbox" id="bike" name="troy" value="Bike"/>Troy</ul>
                    <ul><input type="checkbox" id="cap" name="cap" value="Bike"/>Cap</ul>
                </animated.div>

                ))}
            </Transition>
        </div>

    );  

    const reviews = (

        <div className="list-wrapper">
        <Transition
            native
            items={useState()}
            from={{ opacity: 0, marginTop: -40 }}
            enter={{ opacity: 1, marginTop: 0}}
            leave={{ opacity: 0 }}
            config={{ delay: 100, duration: 100 }}
            >
            {show => show && (props => (
            <animated.div style={props}>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>5 Stars</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>4 Stars</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>3 Stars</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>2 Stars</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>1 Star</ul>
            </animated.div>

            ))}
        </Transition>
        </div>
    );

    const price = (
            <div className="list-wrapper">
            <Transition
                native
                items={useState()}
                from={{ opacity: 0, marginTop: -40 }}
                enter={{ opacity: 1, marginTop: 0}}
                leave={{ opacity: 0 }}
                config={{ delay: 100, duration: 100 }}
                >
                {show => show && (props => (
                <animated.div style={props}>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>Below $50</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>$50 - $100</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>$101 - $200</ul>
                <ul><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>$200 and Above</ul>
                </animated.div>

                ))}
            </Transition>
            </div>
        

        

        
    )

    const sideBar = (
        <div className="products-sidebar">
            <div className="category">
                
                <li onClick={toggleBrand}>Brands<img src={isBrandOn ? ArrowDown : ArrowUp}/></li>
                    {isBrandOn ? brands : null }
            </div>

            <div className="category">
                <li onClick={toggleReview}>Reviews<img src={isReviewOn ? ArrowDown : ArrowUp}/></li>
                    {isReviewOn? reviews : null}
            </div>

            <div className="category">
                <li onClick={togglePrice}>Price<img src={isPriceOn ? ArrowDown : ArrowUp}/></li>
                {isPriceOn ? price : null}
                    
            </div>         
        </div>
    )

    const transitionTest = (
        <div>
            <Transition
                native
                items={useState()}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={{ delay: 100, duration: 100 }}
          >
            {show => show && (props => (
              <animated.div style={props}>
                {sideBar}

              </animated.div>

            ))}
          </Transition>
        </div>
    )
    return (
        <div>
            <button onClick={toggleFilter} className="filterButton">Filter</button>
            {state ? transitionTest : null}
        </div>
    )
}
