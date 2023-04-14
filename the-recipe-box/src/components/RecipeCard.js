import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button>View Recipe</button>
    </div>
  );
}

export default RecipeCard;
