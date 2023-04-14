import React, { useState } from 'react';

const RecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients.trim(),
      instructions: instructions.trim()
    };

    onSubmit(newRecipe);

    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
  }

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="title">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label id="description">Description</label>
          <input type="text" name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label id="ingredients">Ingredients</label>
          <textarea name="ingredients" id="ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} />
        </div>
        <div>
          <label id="instructions">Instructions</label>
          <textarea name="instructions" id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
