import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import Nav from './Nav';


class RecipeApp extends Component {
  static propTypes ={
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string)
  }
  static defaultProps = {
    recipes: [
      {
        title: 'pasta',
        ingredients: ['flour', 'water', ''],
        instructions: 'Mix ingredients',
        img: 'Pasta.jpg' 
      },
      {
        title: 'avocado toast',
        ingredients: ['toast', 'avocado', 'olive oil'],
        instructions: 'Mix ingredients',
        img: 'avocado.jpg' 
      },
      {
        title: 'milk shake',
        ingredients: ['milk', 'ice cream', 'strawberrys'],
        instructions: 'Mix ingredients',
        img: 'milkShake.jpg' 
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
      {this.props.recipes.map((r, index)=>{
        return (
          
          <Recipe key={index}
          // title={r.title} 
          // ingredients={r.ingredients}
          // img={r.img}
          // instructions={r.instructions}
          //+++++++++++
          //above same as bellow (Object rest operator to pass
          //all of the proterties to the child component)
          //+++++++++++
          {...r}
          />
        );
      })}
        
      </div>
    );
  }
}

export default RecipeApp;
