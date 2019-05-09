const express = require('express');
const app = express();
const pdf = require('./pdf');



const cors = require('cors');

app.use(cors())

app.get('/file', (req, res)=>{
    console.log('requisitou');
    res.json({fileName : 'ArquivoTeste.pdf', file : pdf});
    
});


app.listen(4000, ()=>{
    console.log('on');
})