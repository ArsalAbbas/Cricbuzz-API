const Matches = require('../models/matches'); 

async function handleGetMatchById(req,res){

    const matchid=req.params.match_id

    try {
        const matchById = await Matches.findByPk(matchid);

        if (!matchById) {
          return res.status(404).json({ error: 'Match not found' });
        }
    
        return res.status(200).json(matchById)
    } catch (error) {
        console.error('Error fetching match by ID', error);
        return res.status(500).json({ error: 'Unable to fetch match' });
    }

}

async function handleGetAllMatches(req,res){

    try {
        const matchList=await Matches.findAll()
        return res.status(200).json({
            matches: matchList
        })

    } catch (error) {
        console.error('Error fetching matches:', error);
        return res.status(500).json({ error: 'Unable to fetch matches' });
    }

}

async function handleCreateMatch(req,res){
    const {team_1,team_2,date,venue}= req.body
    try {
        const newMatch= await Matches.create({
            team1: team_1,
            team2: team_2,
            date: date,
            venue: venue,
          })
          return res.status(201).json( {
              message: "Match created successfully",
              match_id : newMatch.id
             }
          )
    } catch (error) {
        console.error('Error creating match:', error);
        return res.status(500).json({ error: 'Unable to create match' });
    }
}

module.exports={handleCreateMatch,handleGetAllMatches,handleGetMatchById}