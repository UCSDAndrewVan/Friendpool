var data = require('../data.json');
var friends = [];
for (var key in data){
    var friend = data[key];
    for(var i = 0; i < friend.length; i++){
        if(friend.name != "" && friend.depart != "UNAVAILABLE"){
            friend[i] = "depart?time"+ key + "&id=" + i;
            friends.push(friend); 
        }
    }
}

exports.view = function(req, res) {
    res.render('riderhome', {friends: friends});
}