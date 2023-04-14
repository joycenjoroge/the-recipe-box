import React, { useState, useEffect } from "react";

const RecipeDetail = ({ match }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://recipe-box-sinatra-project.onrender.com/recipes/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [match.params.id]);

  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
