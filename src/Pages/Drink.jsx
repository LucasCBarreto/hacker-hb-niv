import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { Creators as mapToActions } from '../Store/Drink/actions'

import Section from '../Components/Background'
import Header from '../Components/Header'
import QuantityDrink from '../Components/QuantityDrink'
import Buttons from '../Components/Buttons'
import './Drink.css'

const Drink = (
  { quantityDrinks, 
    drinksCount, 
    drinksResetCount }) => (

  <div>

    <Header />

    <Section>
      <div className="container-drink">
          <QuantityDrink 
            count={quantityDrinks} />

          <Buttons 
            drinksResetCount={() => {}}
            drinksCount={() => {}} />
      </div>
    </Section>
    
  </div>
 
)

// const mapStateToProps  = state => ({
//   quantityDrinks: state.Drinks.countDrinks
// });

// const mapDispatchToAction  = dispatch => bindActionCreators({ ...mapToActions }, dispatch);

// export default connect(mapStateToProps, mapDispatchToAction )(Drink)
export default Drink
