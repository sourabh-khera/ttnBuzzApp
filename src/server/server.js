/**
 * Created by sourabh on 3/5/17.
 */

const express = require("express");
let router = require("./routes/route");
require("./configuration/datasource");
const app = express();
const webpack = require("webpack");
const webpackmiddleware = require("webpack-dev-middleware");
const webpackconfig = require("../../webpack.config");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

app.use(express.static('./src/server/public'));
app.use('/buzz', express.static('./dist'));
const compiler = webpack(webpackconfig);
app.use(cookieParser());
app.use(bodyParser());
app.use(webpackmiddleware(compiler, {
    hot: true,
    publicPath: '/',
    stats: {
        color: true,
    },
    historyApiFallback: true,
}));
router(app);


authenticate = (req, res, next) => {
    if (req.url == "/") {
        if (req.user) {
            res.redirect("/buzz/create-post")
        }
        next();
    } else {
        if (req.user) {
            next()
        } else {
            res.redirect("/")
        }
    }
};
app.get("/*", authenticate, (req, res) => {
    res.sendFile(path.resolve('src/client', './index.html'));
});
const Port = 3000;
app.listen(Port, () => {
    console.log("serverListening =============", Port);
});


