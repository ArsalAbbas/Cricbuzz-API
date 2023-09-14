const Matches = require('../models/matches'); 
const Players = require('../models/players');

async function getPlayersByTeam(teamId) {
    try {
        const players = await Players.findAll({
            where: {
                team_name: teamId
            }
        });
        return players;
    } catch (error) {
        console.error('Error fetching players by team', error);
        return [];
    }
}

async function handleGetMatchById(req,res){

    const matchid=req.params.match_id

    try {
        const matchById = await Matches.findByPk(matchid);

        if (!matchById) {
          return res.status(404).json({ error: 'Match not found' });
        }
        console.log(matchById)      

        const matchStatus= matchById.dataValues.date < new Date() ? "completed" : "upcoming"

        const team1= await getPlayersByTeam(matchById.team1)
        const team2= await getPlayersByTeam(matchById.team2)  
    
        return res.status(200).json({...matchById.dataValues , status: matchStatus, squads: {team_1:team1,team_2:team2}})
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