import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
 const title={
   fontFamily: 'Playfair Display SC', textAlign: "center", fontSize: "64px",
 };
  
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (recipeIndex) => {
    setRecipes(recipes.filter((_, index) => index !== recipeIndex));
  };

  return (
    <div className="App">
      <header>
        <h1 style={title}>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
