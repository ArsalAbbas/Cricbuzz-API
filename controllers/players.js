const Player = require('../models/players')

const handleGetAllPlayers=async (req,res)=>{
    const playerId = req.params.player_id;

    try {
      const playerById = await Player.findByPk(playerId);
  
      if (!playerById) {
        return res.status(404).json({ error: 'Player not found' });
      }
      const { id, name, role, team_name, matches_played, runs, average, strike_rate } = playerById;
      const playerStats = {
        id,
        name,
        role,
        team_name,
        matches_played,
        runs,
        average,
        strike_rate,
      };
  
      return res.json(playerStats);
    } catch (error) {
      console.error('Error fetching player by ID:', error);
      return res.status(500).json({ error: 'Unable to fetch player statistics' });
    }
}

module.exports={handleGetAllPlayers}