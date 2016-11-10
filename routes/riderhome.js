var data = require('../data.json');
var friendsList = [];
for (var key in data){
    var friends = data[key];
    for(var i = 0; i < friends.length; i++){
        var friend = friends[i];
        if(friend.name != "" && friend.depart != "UNAVAILABLE"){
            friend[i] = "depart?time"+ key + "&id=" + i;
            friendsList.push(friend);
        }
    }
}

exports.view = function(req, res) {
    console.log(data);
    res.render('riderhome', data);
}