import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import  Footer  from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
        dishes: DISHES,
      
    };
    
  }

  
render() {
  const HomePage = () =>{
    return (
      <Home/>
    )
  }
    return (
      <div>
        <Header/>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" />
        <Footer />
      </div>
    );
  }

}
export default Main;
