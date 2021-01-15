const express = require('express');
const routes = express.Router();
const User =require('../modules/user')
const jwt = require('jsonwebtoken')


const mongoose = require('mongoose');
const db = 'mongodb+srv://ahad1234:ahad8808@cluster0.1bj6e.mongodb.net/eventsdb?retryWrites=true&w=majority' 
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true},err =>{
    if(err){
        console.log('connection failed ' +err)
    }
    else{
        console.log('connection to mongodb')

    }
} )

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

routes.post('/register' , (req,res) => {
    let userData = req.body;
    const user = new User(userData)
    user.save((error,registerUser) =>{
        if(error){
            console.log(error);
        }
        else{
            res.status(200).json(registerUser)
        }
    })

})
routes.post('/login' , (req, res) => {
    let UserData = req.body;
    User.findOne({email : UserData.email},(error, user) =>{
        if(error)
        {
            console.log(error)
        }

        else
        {
            if(!user){
        
                res.status(401).send('invalid email');
            }
            else if(user.password !== UserData.password){
                res.status(401).send('invalid password')
            }
            else{
                res.status(200).send(user)
            }
        }
    })
})
  routes.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.send(events)

  })
  
  routes.get('/special', verifyToken, (req, res) => {
    let specialEvents = [
      {
        "_id": "1",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(specialEvents)
  })
  
module.exports = routes 