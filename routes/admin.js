const router=require('express').Router()

router.route('/signup')
.post((req,res)=>{

    const {username,password,email}= req.body

    //TODO: Add to database

    return res.json({
        status: "Admin account successfully created",
        status_code: "200",
        user_id:  "12345" //getuserid
    })
})

router.route('/login')
.post((req,res)=>{
    //Todo: Implement login
})

module.exports= router