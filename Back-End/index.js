import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();


// Generic Queries
export async function getTable(table) {
  const [rows] = await pool.query("SELECT * FROM ??", [table]);
  return rows;
}
export async function deleteRow(table, id) {
  const [rows] = await pool.query("DELETE FROM ?? WHERE id = ?", [table, id]);
  return rows;
}

export async function getFormTable(table, id){
  const [rows] = await pool.query("SELECT * FROM ?? WHERE id = ?", [table, id]);
  return rows;
}

//User table
export async function getUser(id) {
  return getFormTable('users', id);
}

export async function getUserID(email){
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE Email = ?",
    [email]
  );
  return rows;
}

export async function addUser(email, hashedpassword, networth) {
  const [rows] = await pool.query(
    "INSERT INTO users (Email, HashedPassword, Networth) VALUES (?, ?, ?)",
    [email, hashedpassword, networth]
  );
  return rows;
}

export async function updateUser(id, Email, HashedPassword, Networth) {
  const [rows] = await pool.query(
    "UPDATE users SET  Email = ?, HashedPassword = ?, Networth = ? WHERE id = ?",
    [Email, HashedPassword, Networth, id]
  );
  return rows;
}

//Assets table
export async function getAsset(id) {
  return getFormTable('Assets', id);
}

export async function addAsset(category, worth, sold, owner_id) {
  const [rows] = await pool.query(
    "INSERT INTO assets (category, worth, sold, owner_id) VALUES (?, ?, ?, ?)",
    [category, worth, sold, owner_id]
  );
  return rows;
}

export async function updateAsset(category, worth, sold, owner_id, id) {
  const [rows] = await pool.query(
    "UPDATE users SET  category = ?, worth = ?, sold = ?, owner_id = ? WHERE id = ?",
    [category, worth, sold, owner_id, id]
  );
  return rows;
}

//Goals table
export async function getGoal(id) {
  return getFormTable('goals', id);
}

export async function addGoal(category, worth, owner_id) {
  const [rows] = await pool.query(
    "INSERT INTO goal (category, worth, owner_id) VALUES (?, ?, ?)",
    [category, worth, owner_id]
  );
  return rows;
}

export async function updateGoal(id, category, worth, owner_id) {
  const [rows] = await pool.query(
    "UPDATE users SET  category = ?, worth = ?, owner_id = ? WHERE id = ?",
    [category, worth, owner_id, id]
  );
  return rows;
}

//Income table
export async function getIncome(id) {
  return getFormTable('income', id);
}

export async function addIncome(category, amount, incomeinterval, owner_id) {
  const [rows] = await pool.query(
    "INSERT INTO users (category, amount, incomeinterval, owner_id) VALUES (?, ?, ?, ?)",
    [category, amount, incomeinterval, owner_id]
  );
  return rows;
}

export async function updateIncome(category, amount, incomeinterval, owner_id, id) {
  const [rows] = await pool.query(
    "UPDATE users SET  category = ?, amount = ?, incomeinterval = ?, owner_id = ? WHERE id = ?",
    [category, amount, incomeinterval, owner_id, id]
  );
  return rows;
}
 
