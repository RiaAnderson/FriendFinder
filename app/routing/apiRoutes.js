var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestFriend = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        console.log("req.body = ", req.body);

        var newFriend = req.body;
        var newScore = newFriend.scores;
        var totalDiff = 0;

        console.log(newScore);

          for (var i = 0; i < friends.length; i++) {

            var friend = friends[i];
            console.log(friend.name);
            totalDiff = 0

            for (var j = 0; j < friend.scores[j]; j++) {
                
                totalDiff += Math.abs(parseInt(newScore[j]) - parseInt(friend.scores[j]));

                if (totalDiff <= bestFriend.friendDiff) {
                    bestFriend.name = friend.name;
                    bestFriend.photo = friend.photo;
                    bestFriend.friendDiff = totalDiff;
                }
            }
        }
        friends.push(newFriend);

        console.log(bestFriend);
        res.json(bestFriend);
    })
}