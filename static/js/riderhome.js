$(document).on("click", '.ride', function() {
    var time = $(this).find(".col-sm-4").text();
    var name = $(this).find(".col-sm-6").text();
    var img = $(this).find(".col-sm-2").attr("value");
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('img', img);
    window.location = "../static/confirm.html";
});