import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, ingredients, instructions } = recipe;

    if (name.trim() && ingredients.trim() && instructions.trim()) {
      addRecipe(recipe);

      setRecipe({
        name: '',
        ingredients: '',
        instructions: ''
      });
    }
  }

  const { name, ingredients, instructions } = recipe;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label id="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label id="ingredients">Ingredients</label>
        <textarea id="ingredients" name="ingredients" value={ingredients} onChange={handleChange}></textarea>
      </div>
      <div>
        <label id="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" value={instructions} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
