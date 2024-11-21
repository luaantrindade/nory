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

require("dotenv").config(); // Import and configure dotenv
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

// Allow cross-origin requests from the frontend
app.use(cors());
app.use(express.json());

console.log("Initializing server...");

// PostgreSQL connection pool setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the environment variable
  max: 10, // Maximum number of connections
  idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
  connectionTimeoutMillis: 2000, // Timeout for establishing a connection
  keepAlive: true, // Keeps connections alive
});

// Log pool errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle client:", err);
  process.exit(-1); // Optional: Exit if there's a critical issue
});

// Endpoint to fetch all recipes
app.get("/api/recipes", async (req, res) => {
  let client;
  try {
    client = await pool.connect(); // Get a connection from the pool
    const result = await client.query("SELECT * FROM nory.recipes");
    res.json(result);
    console.log(result); // Send recipes data as JSON
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).json({ error: "Failed to fetch recipes data" });
  } finally {
    if (client) client.release(); // Release the connection back to the pool
  }
});

// Start the server
app.listen(5001, () => {
  console.log("Server running on port 5001");
});