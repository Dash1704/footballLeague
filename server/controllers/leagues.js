const asyncHandler = require('express-async-handler')
const pool = require("../db")

//GET
const getLeagues = asyncHandler(async(req, res) => {
  const allLeagues = await pool.query("SELECT * FROM leagues")
  res.json(allLeagues.rows)
})

//GET BY ID
const getLeaguesByID = asyncHandler(async(req, res) => {
  try {
    const { id } = req.params;
    const league = await pool.query("SELECT * FROM leagues WHERE leagues_id = $1", 
    [id]);
    res.json(league.rows[0]);

  } catch (err) {
    console.error(err.message)
  }
})

//POST
const postLeagues = asyncHandler(async (req, res) => {
    if(!req.body.name){
    res.status(400)
    throw new Error('Please add a name field')
  }
  const { name } = req.body;
  const newLeague = await pool.query("INSERT INTO leagues (name) VALUES($1) RETURNING *", 
  [name]
);
res.json(newLeague.rows[0])
})

//UPDATE
const updateLeagues = asyncHandler(async(req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateLeague = await pool.query("UPDATE leagues SET name = $1 WHERE leagues_id = $2", 
    [name, id]
    );
    res.json("League was updated");

  } catch (err) {
    console.error(err.message)
  }
})
//DELETE
const deleteLeagues = asyncHandler(async(req, res) => {
  try {
    const { id } = req.params;
    const deleteLeague = await pool.query("DELETE FROM leagues WHERE leagues_id = $1", 
    [id]);
    res.json("League was deleted")
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = {
  getLeagues,
  getLeaguesByID,
  postLeagues,
  updateLeagues,
  deleteLeagues,
}