//$(document).on("click", '.ride', function( ) {
//    window.location = "../static/confirm.html";
//    var name = $(this).find(".col-sm-6 p1").text();
//    var img = $(this).find(".col-sm-2").attr("value");
//    sessionStorage.setItem('name', name);
//    sessionStorage.setItem('img', img);
//});

document.getElementById("submit").onclick = function() {mySubmit()};
                    
function mySubmit(){
    var select = document.getElementById("sel2").selectedIndex;
    var time = document.getElementsByTagName("option")[select].value;
    localStorage.setItem('time', time);
}