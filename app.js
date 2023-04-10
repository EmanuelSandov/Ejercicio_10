const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Configuracion
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send("En teoria el index.html");
})
app.get('*',(req,res)=>{
    res.send("En teoria 404.html")
})

app.listen(port,()=>{
    console.log('Consola corriendo en el puerto : ',port);
})