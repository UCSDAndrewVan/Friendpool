$(document).ready(function() {
    var rideaccepted = $("#rideaccepted");
    var row = $('<div class="row">');
    var name = sessionStorage.getItem('name'); 
    var img = sessionStorage.getItem('img');
    var number = sessionStorage.getItem('number');
    
    row.append('<div class="col-xs-12"><p>'+ name +"</p></div>");
    row.append('<div class="col-xs-12"><img id="smiley" src="' + img + '"></div>');
    row.append('<div class="col-xs-12"><p>'+ number +"</p></div>");
    rideaccepted.append(row);
});