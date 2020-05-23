import React, {useState, useEffect} from 'react';
import './ProductDetail.css';
import { Spring, Transition, animated } from 'react-spring/renderprops';


export default function ProductDetail( props, {match}) {

    let description2;

    useEffect( () => {
        //console.log(props);

        fetchItem();

    }, []);

    //create state to render items to product detail info. Set to empty object
    const [item, setItem] = useState({});




    const fetchItem = () => {

        let selectedItem = {}; //create an empty object and loop through json file til there's a match. If there's a match, assign

        if (props.category === 'plates'){
            props.passedState.plates.forEach( (item) => {
                if (item.id === Number(props.match.params.id) ) {
    
                    selectedItem = item;
    
                    //convert detailed description to a global variable to read outside when toggling the tabs
                    description2 = item.description2;
                    window.description3 = description2;    
                };
    
            });
        }

        if (props.category === 'equipment'){
            props.passedState.equipment.forEach( (item) => {
                if (item.id === Number(props.match.params.id) ) {
    
                    selectedItem = item;
    
                    //convert detailed description to a global variable to read outside when toggling the tabs
                    description2 = item.description2;
                    window.description3 = description2;    
                };
    
            });
        }

        if (props.category === 'barbell'){
            props.passedState.barbells.forEach( (item) => {
                if (item.id === Number(props.match.params.id) ) {
    
                    selectedItem = item;
    
                    //convert detailed description to a global variable to read outside when toggling the tabs
                    description2 = item.description2;
                    window.description3 = description2;    
                };
    
            });
        }

        if (props.category === 'shoes'){
            props.passedState.shoes.forEach( (item) => {
                if (item.id === Number(props.match.params.id) ) {
    
                    selectedItem = item;
    
                    //convert detailed description to a global variable to read outside when toggling the tabs
                    description2 = item.description2;
                    window.description3 = description2;    
                };
    
            });
        }

        if (props.category === 'apparel'){
            props.passedState.apparel.forEach( (item) => {
                if (item.id === Number(props.match.params.id) ) {
    
                    selectedItem = item;
    
                    //convert detailed description to a global variable to read outside when toggling the tabs
                    description2 = item.description2;
                    window.description3 = description2;    
                };
    
            });
        }

        setItem(selectedItem);
    }


    //render description tab when clicked
    const [isDescriptionOn, setDescription] = useState(true);
    const toggleDescriptionTab = () => {
        setDescription(true);
        setSpecs(false);
        setReview(false);
        setQa(false);


    }; 

    //render specs tab when clicked
    const [isSpecsOn, setSpecs] = useState(false);
    const toggleSpecsTab = () => {
        setSpecs(true);
        setDescription(false); //toggle off description tab
        setReview(false);
        setQa(false);


    }; 

    //render reviews tab when clicked
    const [isReviewOn, setReview] = useState(false);
    const toggleReview = () => {
        setReview(true);
        setDescription(false); //toggle off description tab
        setSpecs(false);
        setQa(false);

    }; 

    //
    const [isQaOn, setQa] = useState(false);
    const toggleQa = () => {
        setQa(true);
        setDescription(false); //toggle off description tab
        setReview(false);
        setSpecs(false);
    }

    
    return (
        <div className="main-container">
            <div className="product-info-wrapper" id="container-1a">

                <div className="product-image"><img src={item.image} /></div>

                <div className="product-info">
                <li></li>
                    <h1>{item.name}</h1>
                    <li>{item.description}</li>
                    <li>${item.price}</li>
                    <li><strong>Review: </strong>{item.review} Stars</li><br/>
                    <li>Qty: <input type="number" id="quantity" name="quantity" min="1" max="50"/></li>
                    <button class="btnCart">Add to Cart</button>
                </div>
            </div>    
            
            <div className="tabs-wrapper">
                <div className="tabs">
                    <button className={isDescriptionOn ? "tab-active" : "tab"} onClick={toggleDescriptionTab}>Description</button>
                    <button className={isSpecsOn ? "tab-active" : "tab"} onClick={toggleSpecsTab}>Specifications</button>
                    <button className={isReviewOn ? "tab-active" : "tab"} onClick={toggleReview}>Reviews</button>
                    <button className={isQaOn ? "tab-active" : "tab"} onClick={toggleQa} >Q & A</button>
                </div>
                
                </div>

                <div className="toggled-description" >
                <Transition
                    native
                    items={isDescriptionOn}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {show => show && (props => (
                    <animated.div style={props}>
                        <div className="tab-toggle" >
                            {isDescriptionOn ? <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                        
                        : null}

                        </div>
                    </animated.div>
                    ))}
                </Transition>
                            
                </div>

                
                <Transition
                    native
                    items={isSpecsOn}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {show => show && (props => (
                    <animated.div style={props}>
                <div className="toggled-description">
                    <div className="tab-toggle" >{isSpecsOn ? <div>Lorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsumorem Ipsum</div> : null}
                    </div>
                </div>
                </animated.div>
                    ))}
                </Transition>


                <Transition
                    native
                    items={isReviewOn}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {show => show && (props => (
                    <animated.div style={props}>
                <div className="toggled-description">
                    <div className="tab-toggle">{isReviewOn ? <div>Ipsum Ipsum Ipsum Ipsum Ipsum Ipsum</div> : null}
                    </div>
                </div>
                </animated.div>
                    ))}
                </Transition>

                <Transition
                    native
                    items={isQaOn}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {show => show && (props => (
                    <animated.div style={props}>
                <div className="toggled-description">
                    <div className="tab-toggle">{isQaOn ? <div>What is the warranty?</div> : null}
                    </div>
                </div>
                </animated.div>
                    ))}
                </Transition>
            </div>
            
            )
    
}
