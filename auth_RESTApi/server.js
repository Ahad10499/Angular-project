const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const api = require('./routes/api');
const port = 3000;

app.use(bodyparser.json());
app.use('/api' , api);

app.get('/', (req , res) => {
    res.send('hello from server')
    
})

app.listen(port,() =>{
    console.log('localhost running on ' + port);
})



