const express = require('express');
const app = express();
const path = require('path');
const port = 3050
app.use(express.static('public'))

/* middleware */
app.listen(port,() => console.log((`Servidor corriendo en el puerto ${port} \n http://localhost:${port}`)));


/* Routes */
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'/views/index.html')));