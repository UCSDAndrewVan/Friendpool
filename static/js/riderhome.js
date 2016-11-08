$.getJSON("../data.json",
function (data) {
    var frame = $("#frame");
    for (var i = 0; i < data.friends.length; i++) {
        
        if (data.friends[i].depart == "UNAVAILABLE") {
            var row = $('<div class="row ride" id="unavailable">');
        } else {
            var row = $('<div class="row ride">');
        }
        
        row.append('<div class="col-sm-4"><p2>'+ data.friends[i].depart + "</p2></div>");
        row.append('<div class="col-sm-2" value="' + data.friends[i].imageURL + '"><img src="'+ data.friends[i].imageURL + '"></div>');
        row.append('<div class="col-sm-6"><p1>' + data.friends[i].name + "</p1></div>");
        frame.append(row);
        sessionStorage.setItem('number', data.friends[i].number);
    }
});

$(document).on("click", '.ride', function() {
    var time = $(this).find(".col-sm-4 p2").text();
    if (time == "UNAVAILABLE") {
        return;
    }
    var name = $(this).find(".col-sm-6 p1").text();
    var img = $(this).find(".col-sm-2").attr("value");
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('img', img);
    window.location = "../static/confirm.html";
});

//var data = require('../data.json');
//var drivers = [];
//for (var key in data){
//    var friend = data[key];
//    for(var i = 0; i < friend.length; i++){
//        if(friend.name != "" && friend.depart != "UNAVAILABLE"){
//            friend[i] = "depart?rest"+ key + "&id=" + i;
//            drivers.push(friend); 
//        }
//    }
//}
//
//exports.view = function(req, res) {
//    res.render('riderhome', drivers);
//}