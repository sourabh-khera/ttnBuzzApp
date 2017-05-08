/**
 * Created by sourabh on 3/5/17.
 */

const express=require("express");
let router=require("./routes/route");
require("./configuration/datasource");
const app=express();
const webpack=require("webpack");
const webpackmiddleware=require("webpack-dev-middleware");
const webpackconfig=require("../../webpack.config")
const path=require("path")



const compiler=webpack(webpackconfig);

app.use(webpackmiddleware(compiler,{
    hot:true,
    publicPath:'/',
    stats:{
        color:true,
    },
    historyApiFallback:true,
}));
 router(app);

    app.get("/*",function(req, res) {
       // console.log("----------hello")
        res.sendFile(path.resolve('src/client','./index.html'));
    })


const server = app.listen(3000,()=>{
    const Port = server.address().port;
    console.log("serverListening=============", Port);
})