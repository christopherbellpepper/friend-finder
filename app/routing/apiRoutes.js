var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends.myFriends);
    });

  app.post('/api/friends', function(req, res) {
    var newFriend = friends.addTable(req.body);
    res.json(newFriend);
    });

res.json({ ok: true });

};