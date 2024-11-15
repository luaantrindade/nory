import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CalculateProfit() {
  const location = useLocation();
  const navigate = useNavigate();

  const { recipes, ingredients, items } = location.state || { recipes: [], ingredients: [], items: [] };
  const [sortedRecipes, setSortedRecipes] = useState([]);

  // Function to calculate the total cost of ingredients for a recipe
  const calculateTotalCost = (recipeId) => {
    const recipeIngredients = ingredients.filter(ingredient => ingredient.RecipeId === recipeId);

    let totalCost = 0;

    recipeIngredients.forEach(ingredient => {
      const item = items.find(item => item.id === ingredient.IngredientId);
      if (item) {
        totalCost += item.Cost * ingredient.Quantity;
      }
    });

    return totalCost;
  };

  // Function to calculate profit for each recipe and sort them
  const calculateProfitAndSort = () => {
    const recipesWithProfit = recipes.map(recipe => {
      if (recipe.SalePrice) {
        const totalCost = calculateTotalCost(recipe.Id);
        const profit = recipe.SalePrice - totalCost;
        return { ...recipe, profit };
      }
      return null;
    }).filter(recipe => recipe !== null);

    // Sort recipes by profit in descending order
    const sortedRecipes = recipesWithProfit.sort((a, b) => b.profit - a.profit);

    setSortedRecipes(sortedRecipes);
  };

  // Perform the calculation when the component mounts
  useEffect(() => {
    if (recipes.length > 0 && ingredients.length > 0 && items.length > 0) {
      calculateProfitAndSort();
    }
  }, [recipes, ingredients, items]);

  return (
    <div className="text-black bg-white p-12 m-12">
      <h1 className="text-6xl p-8">Calculated Profits</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-4xl p-8 m-8 rounded-2xl"
        onClick={() => navigate('/')}
      >
        Back to Task
      </button>

      <h2>Sorted Recipes:</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Sale Price</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecipes.length > 0 ? (
            sortedRecipes.map((recipe) => (
              <tr key={recipe.Id}>
                <td>{recipe.Id}</td>
                <td>{recipe.Name}</td>
                <td>{recipe.SalePrice || 'N/A'}</td>
                <td>{recipe.profit.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No recipes available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CalculateProfit;