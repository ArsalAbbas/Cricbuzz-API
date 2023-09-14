const express=require('express')
const sequelize = require('./config/database');
const adminRouter=require('./routes/admin')
const teamsRouter=require('./routes/teams')
const playersRouter=require('./routes/players')
const matchesRouter=require('./routes/matches')
const Team = require('./models/teams');
const Matches = require('./models/matches');
const Player = require('./models/players');
const app=express()

sequelize
  .sync()
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

Matches.belongsTo(Team, { as: 'Team1', foreignKey: 'team1', targetKey: 'team_name' });
Matches.belongsTo(Team, { as: 'Team2', foreignKey: 'team2', targetKey: 'team_name' });

Team.hasMany(Player, { foreignKey: 'team_name' });
Player.belongsTo(Team, { foreignKey: 'team_name' });

app.use(express.json({extended:false}))

app.get('/', (req,res) => {
  return res.send("hello world");
})
app.use('/api/admin',adminRouter)
app.use('/api/teams',teamsRouter)
app.use('/api/players',playersRouter)
app.use('/api/matches',matchesRouter)

app.listen(8000, ()=>{
    console.log("server started at port 8000")
})

