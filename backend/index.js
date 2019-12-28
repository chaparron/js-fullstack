const express = require ('express');

//initializations
const app = express();

//settings
app.set('port', 3000);

//start the server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});