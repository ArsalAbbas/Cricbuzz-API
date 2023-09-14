const router=require('express').Router()
const Matches = require('../models/matches'); 
const {handleCreateMatch,handleGetAllMatches,handleGetMatchById}=require('../controllers/matches')

router.route('/')
.post( handleCreateMatch)
.get(handleGetAllMatches)

router.route('/:match_id')
.get(handleGetMatchById)

module.exports= router