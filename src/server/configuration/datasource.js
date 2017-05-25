/**
 * Created by sourabh on 4/5/17.
 */

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/buzzapp");
(function() {
    mongoose.connection.on("open", (err, data) => {

        console.log("connection made------------")

    })

    mongoose.connection.on("error", (err, data) => {

        console.log("connection not successful-----------")

    })

})();