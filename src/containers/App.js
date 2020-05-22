import React, { Component, useState }from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Home from './Home';
import Footer from '../components/Footer';
import About from './About';
import Contact from './Contact';
import ProductCard from '../components/ProductCard';
import ProductListings from './ProductListings';
/*import EquipProductDetail from './EquipProductDetail';
import BarbellProductDetail from './BarbellProductDetail';
import ShoesProductDetail from './ShoesProductDetail';*/
import ProductDetail from './ProductDetail';





class App extends Component {

  state = {
    
    freeWeights: [
      { id: 1, name: 'Olympic Barbell', description: 'Olympic Size Barbell 20kg', price: '199.99', review: '5/5', category: 'freeweights', image: require('../assets/barbell1.jpg')},
      { id: 2, name: 'Standard Barbell', description:'Standard Barbell 2 Inch Diameter', price: '29.99', review: '4/5', category: 'freeweights',image: require('../assets/standard.jpg')},
      { id: 3, name: 'Olympic Weight Plates', description:'Weight Plates for Olympic Size Barbell', price: '1.10', review: '4.5/5', category: 'freeweights',image: require('../assets/olympic-plates.jpg')},
      { id: 4, name: 'Standard Weight Plates', description:'Weight Plates for Standard Size 2 inch diameter barbell', price: '1.10', review: '4.7/5', category: 'freeweights',image: require('../assets/standard-plates.jpg')},
      { id: 5, name: 'Trap Bar', description:'Trapbar made of the finest metals', price: '199.99', review: '4/5', category: 'freeweights',image: require('../assets/hex.jpg')},
      { id: 6, name: 'Dumbbells', description:'Cast Iron or Rubber Hex Dumbbells', price: '1.10', review: '4.5/5', category: 'freeweights',image: require('../assets/dumbbells.jpg')},
      { id: 7, name: 'Bumper Plates', description:'Bumper plates for olympic barbell', price: '1.30', review: '4.5/5', category: 'freeweights',image: require('../assets/bumper.jpg')},

  ],

    equipment: [
      { id: 1, name: 'Rogue Combo Rack', description: 'In developing the Rogue Combo Rack, we worked directly with the International Powerlifting Federation to produce a 2-in-1 bench/squat rack that’s not only IPF certified for 2019 competition use, but also uniquely engineered for easier custom adjustments and greater overall stability.', review: '5/5', price: '2,500', category: 'equipment',image: require('../assets/combo-rack.jpg')},
      { id: 2, name: 'Rogue S-4 Squat Stand 2.0', description: 'The Rogue S-4 2.0 sets a new standard for independent squat stands, combining the strength and stability of two 7-gauge steel H-bases with the efficiency of a new bolt-together, triangle-plate design. Each unit includes a pair of 72" Infinity uprights with hole spacing in the Westside pattern through the bench zone—so users can specifically set up the included J-cups at 1” increments.', review: '5/5', price: '350', category: 'equipment',image: require('../assets/s4-rogue.jpg')},
      { id: 3, name: 'Rogue SM-1 Monster Squat Stand 2.0', description: 'Bridging the gap between traditional squat stands and power racks, the fully redesigned Rogue Monster Squat Stand 2.0 features over-sized 3x3" 11 gauge steel uprights, 1" hardware, and a bolt-together base with triangle plates for maximum stability. Each 73" upright of our SM-1 model also now includes a keyhole design down the side (for greater flexibility with a wider array of new attachments), along with a new Satin Black powder coat finish and dome tag branding for a bolder look. The unit’s base, triangle plates, and crossmembers feature the Satin Black powder coat finish, as well.', review: '4.5/5', price: '595', category: 'equipment',image: require('../assets/sm-1.jpg')},
      { id: 4, name: 'York FTS Squat Stand', description: 'Telescoping uprights for the squat function extend from 41 1/2" to 61 1/2" in 2" increments. Telescoping uprights for the bench press function extend from 29 1/2" to 49 1/2" in 2" increments.', review: '5/5', price: '329', category: 'equipment',image: require('../assets/york.jpg')},
      { id: 5, name: 'Elite FTS 3X3 Collegiate Multi-Triple Rack', description: 'Simply put, the world\'s best power rack...from the American steel, to the careful welding and machining, your great grandson will still be squatting in this.', review: '5/5', price: '3,599', category: 'equipment',image: require('../assets/elitefts3x3.jpg')},
      { id: 6, name: 'Elite FTS Scholastic Glute Ham Raise (GHR) w/ Split Pad', description: 'An affordable version of the GHR that is designed to outperform.', review: '4.2/5', price: '799', category: 'equipment',image: require('../assets/eliteftsglute.jpg')},
      { id: 7, name: 'Rogue Combo Rack', description: 'In developing the Rogue Combo Rack, we worked directly with the International Powerlifting Federation to produce a 2-in-1 bench/squat rack that’s not only IPF certified for 2019 competition use, but also uniquely engineered for easier custom adjustments and greater overall stability.', review: '5/5', price: '2,500', category: 'equipment',image: require('../assets/combo-rack.jpg')},
      { id: 8, name: 'Rogue S-4 Squat Stand 2.0', description: 'The Rogue S-4 2.0 sets a new standard for independent squat stands, combining the strength and stability of two 7-gauge steel H-bases with the efficiency of a new bolt-together, triangle-plate design. Each unit includes a pair of 72" Infinity uprights with hole spacing in the Westside pattern through the bench zone—so users can specifically set up the included J-cups at 1” increments.', review: '5/5', price: '350', category: 'equipment', image: require('../assets/s4-rogue.jpg')},

    ],

    barbells: [
      { id: 1, name: 'Sorinex Standard Series Performance Bar', description: 'The Sorinex Performance Bar is our favorite all-around barbell. Simplified and perfected performance that you can rely on. Clear bright zinc, one-piece sleeves are pressed, machined and plated for high-performance output and strength. Built to International Weightlifting Specifications. The Sorinex Performance Bar has upgraded bronze bushings & more aggressive medium knurl pattern. A noticeably positive difference when performing Olympic Lifts. The Performance Bar Shaft (190K PSI) comes in either Black Zinc or Bright Clear Zinc coating. Pull, clean & press, squat, deadlift, shrug, lunge and more.', review: '5/5', price: '329', image: require('../assets/sorinex.jpg'), category: 'barbell'},
      { id: 2, name: 'Rogue Ohio Power Bar', description: 'Our 45 LB Rogue Ohio Power Bar is available here with a Black E-Coat shaft finish. This electrically applied coating was first popularized in the auto industry for its reliable coverage, adhesion, and corrosion resistance, and it’s gained even wider favor for its environmental benefits, producing little to no HAPS (Hazardous Air Pollutants) or VOCs (Volatile Organic Compounds).', review: '4/5', price: '285', image: require('../assets/ohio-power-bar.jpg'), category: 'barbell'},
      { id: 3, name: 'Rogue Ohio Bar', description: 'Like all Ohio Bars, the E-Coat model is fully machined and assembled in Columbus, Ohio. It includes a 190,000 PSI tensile strength shaft, dual knurl marks (no center knurl), and bright zinc sleeves. The hybrid knurling pattern offers a firm but comfortable grip on both Powerlifts and Oly lifts, while a snap-ring design, quality U.S. steel, and bronze bushings help produce the perfect balance of rigidity and natural whip.', review: '4/5', price: '285', image: require('../assets/ohio-bar.jpg'), category: 'barbell'},
      { id: 4, name: 'Rogue Ohio Deadlift Bar', description: 'This version of the Rogue Ohio Deadlift Bar introduces a new Black E-Coat shaft finish. First popularized in the auto industry for its reliable coverage, adhesion, and corrosion resistance, this electrically applied coating has gained even wider favor for its environmental benefits, producing little to no HAPS (Hazardous Air Pollutants) or VOCs (Volatile Organic Compounds).', review: '5/5', price: '355', image: require('../assets/ohio-deadlift.jpg'), category: 'barbell'},
      { id: 5, name: 'Texas Power Bar', description: 'The best all-purpose bar on the market. It\'s tough and built for years of abuse.', review: '4/5', price: '309', image: require('../assets/texas-bar.png'), category: 'barbell'},
      { id: 6, name: 'Texas Squat Bar', description: 'A strong bar covered from end-to-end with knurling to support the big weights. WE ONLY SELL THIS BAR WHEN IT IS IN STOCK AND READY TO SHIP WITHIN ONE BUSINESS DAY.', review: '4/5', price: '425', image: require('../assets/texas-squat-bar.jpg'), category: 'barbell'},
      { id: 7, name: 'Rogue Ohio Bar', description: 'Like all Ohio Bars, the E-Coat model is fully machined and assembled in Columbus, Ohio. It includes a 190,000 PSI tensile strength shaft, dual knurl marks (no center knurl), and bright zinc sleeves. The hybrid knurling pattern offers a firm but comfortable grip on both Powerlifts and Oly lifts, while a snap-ring design, quality U.S. steel, and bronze bushings help produce the perfect balance of rigidity and natural whip.', review: '4/5', price: '285', image: require('../assets/ohio-bar.jpg'), category: 'barbell'},
      { id: 8, name: 'Rogue Ohio Deadlift Bar', description: 'This version of the Rogue Ohio Deadlift Bar introduces a new Black E-Coat shaft finish. First popularized in the auto industry for its reliable coverage, adhesion, and corrosion resistance, this electrically applied coating has gained even wider favor for its environmental benefits, producing little to no HAPS (Hazardous Air Pollutants) or VOCs (Volatile Organic Compounds).', review: '5/5', price: '355', image: require('../assets/ohio-deadlift.jpg'), category: 'barbell'},

  ],

    plates: [
      { id: 1, name: 'Rogue Competition Plates - 300lb set', description: 'Rogue Competition Plates are an IWF standard 450MM in diameter, with chrome-plated steel disc inserts and a 50.40MM collar opening for a firm, stable hold. We\'ve added several new features to this line-up of color-coded bumpers:', review: '4.5/5', price: '1,140', category: 'plates', image: require('../assets/rogue-comp-plates.jpg')},
      { id: 2, name: 'Rogue Machines Olympic Plates - Pairs', description: 'Available here in a unique gray hammertone finish with raised black text, Rogue’s Machined Olympic Plates offer greater precision than many comparable steel plates in the industry.', review: '4.5/5', price: '23-160', category: 'plates', image: require('../assets/rogue-olympic.jpg')},
      { id: 3, name: 'Rogue Echo Bumper Plates - Pairs', description: 'Rogue Echo Bumper Plates have an IWF standard 450MM diameter (10LB Plate is 446MM), minimal surface imperfections, and a weight within 1% of its target. Combined with stainless steel inserts and quality virgin rubber, the Echos offer a dead bounce and durability rarely seen in an economical plate.', review: '4.5/5', price: '47-130', category: 'plates', image: require('../assets/rogue-echo-bumper.jpg')}
    ],

    shoes: [
      { id: 1, name: 'Nike Metcon 5', description: 'The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed, and durability where you need it. It even includes a Hyperlift insert that\'s compatible with all prior versions of the Metcon. Meet your secret weapon for weight lifting and high-impact training.', review: '5/5', price: '130', category: 'shoes', image: require('../assets/metcon5.jpg')},
      { id: 2, name: 'Nike Romaleos 4', description: 'Designed for strength and stability, the Nike Romaleos 4 features a supportive midsole and a wide, flat outsole. Adjustable straps at the midfoot secure your foot during your most intense workouts.', review: '5/5', price: '200', category: 'shoes', image: require('../assets/romaleo.jpg')},
    ],

    apparel: [
      { id: 1, name: 'Professional Rated Sleeveless', description: 'Printed on our standard Gildan Sleeveless Tee.  Shoulder-to-shoulder taping, quarter turned, pill resistant air Jet spun yarn, double-needle stitched neckline and bottom hem. Pre-shrunk 50% cotton/50% polyester 5.6 ounce heavyweight with seamless collar.', review: '5/5', price: '10', category: 'apparel', image: require('../assets/tank.jpg')},
      { id: 2, name: 'EliteFTS Black on Black Beanie', description: 'It\'s a Beanie! Black on Black keeps it simple. Lightweight and stuff-able to fit inside a jacket pocket, backpack or gym bag!', review: '5/5', price: '10', category: 'apparel', image: require('../assets/beanie.jpg')},
    ]


  }

  render() {

    //create product cards or free weights
    const freeWeights = (
      <div className="all-cards">
        {this.state.freeWeights.map( (item, index) => {
          return <ProductCard
            name={item.name}
            description={item.description}
            price={item.price}
            review={item.review}
            image={item.image}
            category={item.category}
            key={item.id}
            id={item.id}/>
          })}
        </div>
      )

      //create productcards for equipment
      const equipment = (
        <div className="all-cards">
          {this.state.equipment.map( (item, index) => {
            return <ProductCard
              name={item.name}
              description={item.description}
              price={item.price}
              review={item.review}
              image={item.image}
              category={item.category}
              key={item.id}
              id={item.id}/>
            })}
          </div>
        )

        

      

        //create productcards for barbells
        const barbells = (
          <div className="all-cards">
              {this.state.barbells.map( (item, index) => {
                return <ProductCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  review={item.review}
                  image={item.image}
                  category={item.category}
                  key={item.id}
                  id={item.id}/>
                })}
            </div>
          )

        //create productcards for barbells
        const plates = (
          <div className="all-cards">
              {this.state.plates.map( (item, index) => {
                return <ProductCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  review={item.review}
                  image={item.image}
                  category={item.category}
                  key={item.id}
                  id={item.id}/>
                })}
            </div>
          )

          const shoes = (
            <div className="all-cards">
                {this.state.shoes.map( (item, index) => {
                  return <ProductCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    review={item.review}
                    category={item.category}
                    image={item.image}
                    key={item.id}
                    id={item.id}/>
                  })}
              </div>
            )

            const apparel = (
              <div className="all-cards">
                  {this.state.apparel.map( (item, index) => {
                    return <ProductCard
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      review={item.review}
                      category={item.category}
                      image={item.image}
                      key={item.id}
                      id={item.id}/>
                    })}
                </div>
              )

          
    


    return (
      <div className="App">
        <Router>
          <Navbar/>
          <SubNavbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/equipment" render={ (props) => <ProductListings {...props} equipmentCards={equipment} />}/>
            <Route exact path="/barbells" render={ (props) => <ProductListings {...props} barbellCards={barbells} />}/>
            <Route exact path="/plates" render={ (props) => <ProductListings {...props} plateCards={plates} />}/>
            <Route exact path="/shoes" render={ (props) => <ProductListings {...props} shoeCards={shoes} />}/>
            <Route exact path="/apparel" render={ (props) => <ProductListings {...props} apparelCards={apparel} />}/>
            <Route exact path="/products/equipment/:id" render={ (props) => <ProductDetail {...props} passedState={this.state} category={'equipment'} />} />}/>
            <Route exact path="/products/barbell/:id" render={ (props) => <ProductDetail {...props} passedState={this.state} category={'barbell'}/>}  />}/>
            <Route exact path="/products/plates/:id" render={ (props) => <ProductDetail {...props} passedState={this.state} category={'plates'}/>}  />}/>
            <Route exact path="/products/shoes/:id" render={ (props) => <ProductDetail {...props} passedState={this.state} category={'shoes'}/>}  />}/>
            <Route exact path="/products/apparel/:id" render={ (props) => <ProductDetail {...props} passedState={this.state} category={'apparel'}/>}  />}/>

          </Switch>
      </Router>  

      <Footer/> 
      </div>
    );
  }
}

export default App;
