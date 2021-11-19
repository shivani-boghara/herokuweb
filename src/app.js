const express= require("express");
const path = require("path");
const hbs = require("hbs");

const app=express();
const port= process.env.PORT || 8000;

const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);

app.use(express.static(staticpath));

 app.get("/",(req,res)=>{
     res.render("index")
 })
 app.get("/about",(req,res)=>{
    res.render("about.hbs")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg: 'opps! page not found'
    })
})
 app.listen(port,()=>{
   console.log(`listening to the port at ${port}`);
 })