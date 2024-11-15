// const { Client } = require('pg');

// // PostgreSQL connection details
// const client = new Client({
//   connectionString: 'postgres://default:XJnBK6CeLh3G@ep-green-fog-a4c630vj.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
// });

// async function testConnection() {
//   try {
//     // Connect to the PostgreSQL database
//     await client.connect();
//     console.log('Connected to PostgreSQL successfully');

//     // Query to fetch all records from the 'items' table
//     const res = await client.query('SELECT * FROM nory."ingredients "');
//     console.log('Records from items table:', res.rows);

//   } catch (err) {
//     console.error('Error connecting to the database:', err.message);
//   } finally {
//     // Close the connection
//     await client.end();
//   }
// }

// // Run the test connection function
// testConnection();

const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const app = express();

// Allow cross-origin requests from the frontend
app.use(cors());
app.use(express.json());

console.log("Initializing server...");

// PostgreSQL connection setup
const client = new Client({
  connectionString:
    "postgres://default:XJnBK6CeLh3G@ep-green-fog-a4c630vj.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
});

// app.use((req, res, next) => {
//   res.set('Cache-Control', 'no-store');
//   next();
// });

// Connect to PostgreSQL database
async function testConnection() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL successfully");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);  // Exit the process if connection fails
  }
}

testConnection();

// Endpoint to fetch all recipes
app.get("/api/recipes", async (req, res) => {
  try {
    const recipesResult = await client.query('SELECT * FROM nory.recipes');
    res.json(recipesResult); // Send recipes data as JSON
    console.log(recipesResult.rows);
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).json({ error: "Failed to fetch recipes data" });
  }
});

// Endpoint to fetch all ingredients
app.get("/api/ingredients", async (req, res) => {
  try {
    const ingredientsResult = await client.query('SELECT * FROM "nory"."ingredients "');
    res.json(ingredientsResult); // Send ingredients data as JSON
  } catch (err) {
    console.error("Error fetching ingredients:", err);
    res.status(500).json({ error: "Failed to fetch ingredients data" });
  }
});

// Endpoint to fetch all items
app.get("/api/items", async (req, res) => {
  try {
    const itemsResult = await client.query('SELECT * FROM "nory"."items"');
    res.json(itemsResult); // Send items data as JSON
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ error: "Failed to fetch items data" });
  }
});

// Start the server
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
