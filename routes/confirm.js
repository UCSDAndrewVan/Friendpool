$(document).ready(function() {
    var confirm = $("#confirm");
    var row = $('<div class="row">');
    var name = sessionStorage.getItem('name'); 
    var img = sessionStorage.getItem('img');
    
    row.append('<div class="col-xs-12">' + name + "</div>");
    row.append('<div class="col-xs-12"><img id="smiley" src="' + img + '"></div>');
    confirm.append(row);
});