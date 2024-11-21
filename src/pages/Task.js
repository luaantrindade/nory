import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Task() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesRes = await fetch('http://localhost:5001/api/recipes');
        const ingredientsRes = await fetch('http://localhost:5001/api/ingredients');
        const itemsRes = await fetch('http://localhost:5001/api/items');
        
        const recipesData = await recipesRes.json();
        const ingredientsData = await ingredientsRes.json();
        const itemsData = await itemsRes.json();


        console.log("fec2222", recipesData);


        console.log("Recipes Data:", recipesData);
        console.log("Ingredients Data:", ingredientsData);
        console.log("Items Data:", itemsData);



        // Extract rows for recipes, ingredients, and items
        setRecipes(recipesData.rows || []);
        setIngredients(ingredientsData.rows || []);
        setItems(itemsData.rows || []);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Navigate to the CalculatePrice page and pass the necessary data
  const handleCalculateProfit = () => {
    navigate('/calculate-profit', { state: { recipes, ingredients, items } });
  };

  return (
    <div className='text-black bg-white p-12 m-12'>
      <h1 className='text-6xl p-8'>Restaurant Menu Data</h1>

      <button
        className='bg-green-500 hover:bg-green-700 text-white text-4xl p-8 m-8 rounded-2xl'
        onClick={handleCalculateProfit}
      >
        Calculate Profit ▶️
      </button>

      <h2>Recipes:</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <tr key={recipe.Id}>
                <td>{recipe.Id}</td>
                <td>{recipe.Name}</td>
                <td>{recipe.SalePrice || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No recipes available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Ingredients:</h2>
      <table>
        <thead>
          <tr>
            <th>Recipe Id</th>
            <th>Ingredient Id</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <tr key={ingredient.Id}>
                <td>{ingredient.RecipeId}</td>
                <td>{ingredient.IngredientId}</td>
                <td>{ingredient.Quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No ingredients available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Items:</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.Id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Cost}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Task;