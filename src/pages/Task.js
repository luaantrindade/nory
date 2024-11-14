import React, { useState, useEffect } from 'react';

function Task() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [items, setItems] = useState([]);

  // Fetch recipes data from the backend
  useEffect(() => {

    const fetchData = async () => {
      try {
        
        const recipesRes = await fetch('http://localhost:5432/api/recipes');
        const ingredientsRes = await fetch('http://localhost:5432/api/ingredients');
        const itemsRes = await fetch('http://localhost:5432/api/items');
        console.log("1", recipesRes.json());

        const recipesData = await recipesRes.json();
        const ingredientsData = await ingredientsRes.json();
        const itemsData = await itemsRes.json();
        console.log("aqui",recipesData);
        
        setRecipes(recipesData);
        setIngredients(ingredientsData);
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-black bg-white'>
      <h1>Restaurant Menu Data</h1>

      <h2>Recipes</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.saleprice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Ingredients</h2>
      <table>
        <thead>
          <tr>
            <th>Recipe Id</th>
            <th>Ingredient Id</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id}>
              <td>{ingredient.recipesid}</td>
              <td>{ingredient.ingredientid}</td>
              <td>{ingredient.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Items</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;