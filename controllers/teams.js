const Player= require('../models/players');

const handleAddPlayerToTeam=async (req, res) => {
    const { name, role } = req.body;
    const teamId = req.params.team_id;
  
    try {
      const existingPlayer = await Player.findOne({
        where: {
          name: name,
        },
      });
  
      if (existingPlayer) {
        await existingPlayer.update({
          role: role,
          team_name: teamId,
        });
  
        return res.json({
          message: 'Updated player information successfully',
          player_id: existingPlayer.id,
        });
      } else {
        return res.status(404).json({ error: 'Player not found' });
      }
    } catch (error) {
      console.error('Error updating player information:', error);
      return res.status(500).json({ error: 'Unable to update player information' });
    }
  }

  module.exports={handleAddPlayerToTeam}