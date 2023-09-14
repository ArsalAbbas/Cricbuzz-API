const router=require('express').Router()
const Player=require('../models/players')
const {handleGetAllPlayers}=require('../controllers/players')

router.route('/:player_id/stats')
.get(handleGetAllPlayers)


module.exports= router