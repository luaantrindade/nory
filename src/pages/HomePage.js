import React from "react";


export function HomePage() {
  return (
    <div>
      
      <div className="flex  font-italic  text-white text-4xl border-l-purple-300 border-4 hover:border-purple-800 rounded-2xl p-20 m-20">
        <p>
          For your task, we have attached 3 CSV files below containing the data
          for a simple restaurant menu. The structure is relatively simple; we
          have a list of recipes that the restaurant can sell for some price. We
          also have a set of items which a restaurant can purchase at some cost.
          We also have an ingredients table which tells us how much of each item
          is contained in each recipe.
          <b className="text-purple-800">
            Your challenge is to write some code to read this data and using it,
            return to us an ordered list of each recipe, sorted by which has the
            highest profit.
          </b>
          For this challenge you can assume each recipe with a sale price is a
          sellable item and should be included in your list. If a recipe does
          not have a sale price, you can ignore it from the final list. The
          profit for a recipe is calculated by subtracting the total cost of the
          recipe’s ingredients from the sale price. Keep an eye out for the type
          of ingredient we are dealing with—recipes can contain other recipes as
          ingredients. For example, “Guacamole” could be a recipe in a Mexican
          restaurant, and so could a “Burrito”, however; a “Burrito” could
          contain “Guacamole” as an ingredient!!
        </p>
      </div>
      <nav ><button ><a href="/task" className="flex justify-center text-4xl font-bold border-8 p-2 rounded-lg border-white hover:border-purple-800 animate-bounce end-1 text-white ">Next</a></button></nav>
      <div className="fixed inset-x-0 bottom-0 p-4 text-white">Made by Luan Trindade ♥️</div>
    </div>
  );
}

export default HomePage;
