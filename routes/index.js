$.getJSON("../data.json",
function (data){
    var frame = $("#frame");
    for (var i = 0; i < data.friends.length; i++) {
        var row = $('<div class="row ride">');
        row.append('<div class="col-sm-4"><p2>'+ data.friends[i].depart + "</p2></div>");
        row.append('<div class="col-sm-2" value="' + data.friends[i].imageURL + '"><img src="'+ data.friends[i].imageURL + '"></div>');
        row.append('<div class="col-sm-6"><p1>' + data.friends[i].name + "</p1></div>");
        
        frame.append(row);
    }
});

$(document).on("click", '.ride', function( ) {
    window.location = "../static/confirm.html";
    var name = $(this).find(".col-sm-6 p1").text();
    var img = $(this).find(".col-sm-2").attr("value");
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('img', img);
});
        