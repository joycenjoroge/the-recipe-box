import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;