const router = require('express').Router();
const Player = require('../models/players');
const {handleAddPlayerToTeam}=require('../controllers/teams')

router.route('/:team_id/squad')
.post(handleAddPlayerToTeam);

module.exports = router;
