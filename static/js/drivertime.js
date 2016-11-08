function mySubmit() {
    var select = document.getElementById("sel2").selectedIndex;
    var time = document.getElementsByTagName("option")[select].value;
    localStorage.setItem('time', time);
}