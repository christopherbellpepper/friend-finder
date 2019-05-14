var friendsList = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {
    var newFriendResults = req.body.scores;
    var scoresArr = [];
    var friendsCount = 0;
    var friendMatch = 0;

    //runs through all current friends in list
    for (var i = 0; i < friendsList.length; i++) {
      var scoresDiff = 0;
      //run through scores to compare friends
      for (var j = 0; j < newFriendResults.length; j++) {
        scoresDiff += Math.abs(
          parseInt(friendsList[i].scores[j]) - parseInt(newFriendResults[j])
        );
      }
      //push results into scoresArray
      scoresArr.push(scoresDiff);
    }
    //after all friends are compared, find best match
    for (var i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[friendMatch]) {
        friendMatch = i;
      }
    }
    //return bestMatch data
    var bestMatch = friendsList[bestMatch];
    res.json(bestMatch);

    //pushes new submission into the friendsList array
    friendsList.push(req.body);
  });
};
