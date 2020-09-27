import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebaseApp from './firebaseApp';
import Header from './Header.js';
import DropDown from './DropDown'
import DisplaySection from './DisplaySelection.js'
import ReviewMakeup from './ReviewMakeup.js'
import Footer from './Footer'
import DisplaySelection from './DisplaySelection.js';
import {ToastProvider, useToasts } from 'react-toast-notifications'




class App extends Component{
  constructor() {
    super()
    this.state = {
      currentProducts: [],
    }
  }
//Making an Api call and putting userchoice to get different product types
  getProduct = (event,userChoice) =>  {
    event.preventDefault();
      // run getProduct with userChoice as an argument 
    axios({ 
      url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${userChoice} `,
      method: `GET`,
      responseType: `json`
    })
    .then( (result) => {
      this.setState({
      //using the data from the api call into a state
        currentProducts: result.data
      }
    );
  })
  }


//Getting user input
  getUserInput = (event) => {
    event.preventDefault();
  }

//putting different components together 
  render(){
      return (
        <div className="App">
          
          <Header />
          <DropDown getProduct={ this.getProduct } / >
          <DisplaySection items={this.state.currentProducts} />
				  <ReviewMakeup />
          <Footer/>
        </div>
      );
  }
}

export default App;

