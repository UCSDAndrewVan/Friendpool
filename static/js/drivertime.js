function mySubmit() {
    var name = document.getElementById("name").value;
    console.log("well we made it");
    var number = document.getElementById("number").value;
    var select = document.getElementById("sel2").selectedIndex;
    var time = document.getElementsByTagName("option")[select].value;
    localStorage.setItem('time', time);
    localStorage.setItem('name', name);
    localStorage.setItem('number', number);
}

function formdata() 
{
    var firstname1= document.getElementById("firstname").value;
    var lastname1= document.getElementById("lastname").value;
    document.writeln("<h1>Confirmation Page</h1><br>");
    document.writeln("Thank you for completing this form.<br><br>");
    document.writeln("The first name you entered is " + firstname + "<br>");
    document.writeln("The last name you entered is " + lastname);
}