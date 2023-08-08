const path = require("path");
const express=require("express");
const fs=require("fs");

const app=express();
const publicPath=path.resolve(__dirname, "./public");
const port=process.env.PORT || 3001;

app.use(express.static(publicPath));
// app.set("puerto", process.env.PORT || 3001)

/* app.listen(3000, ()=>{
    console.log("servidor corriendo en el puerto 3000");
}); */
app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.listen(port, ()=> console.log('servidor corriendo en el puerto ${port}'));