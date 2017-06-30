/**
 * Created by sourabh on 4/5/17.
 */

const mongoose = require("mongoose");

// mongoose.connect("mongodb://sourabh:restinpeace1910@ds161021.mlab.com:61021/ttnd_buzz");
mongoose.connect("mongodb://localhost/buzzapp");
(function() {
        mongoose.connection.on("open", (err, data) => {

        console.log("connection made------------")

    })

    mongoose.connection.on("error", (err, data) => {

        console.log("connection not successful-----------")

    })

})();