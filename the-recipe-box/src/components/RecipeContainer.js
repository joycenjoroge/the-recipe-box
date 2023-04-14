import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class RecipeContainer extends Component {
  state = {
    recipes: [],
    loading: true
  }

  componentDidMount() {
    fetch('/recipes')
      .then(res => res.json())
      .then(recipes => this.setState({ recipes, loading: false }));
  }

  addRecipe = (recipe) => {
    fetch('/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipes: [...this.state.recipes, recipe] });
      });
  }

  render() {
    const { recipes, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <RecipeList recipes={recipes} />
        <RecipeForm addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default RecipeContainer;
