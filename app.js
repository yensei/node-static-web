const express = require('express');
const app   = express();

app.use(express.static('public'));
/*
app.get('/',(req,res) => {
    res.end('It works!!');
});
*/
app.listen(3000,  () => {
    console.log('listen on 3000');
});