import React, { Component } from 'react'
import Drink from './Pages/Drink'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = props.store;    
  }
  
  render ()
  {
    return <Drink 
      quantityDrinks={this.store.getState()}
      drinksCount={() => this.store.dispatch({ type: 'INCREMENT' })}
      drinksResetCount={() => this.store.dispatch({ type: 'RESET' })}
    /> 

  }
}