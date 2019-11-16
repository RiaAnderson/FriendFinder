var path = require("path");

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.get("/imgbgr", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/img/art-background-beautiful-1084510.jpg"));

    })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}