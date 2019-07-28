function getData(){
    
    var uname = document.getElementById("uname").nodeValue;
    if(uname == "")
    {
        alert("Please enter your name!");
        return false;
    }
    var ubranch = document.getElementById("ubranch").value;
    var dob  = document.getElementById("dob").value;
    var today = new Date();
    if(dob > today){
        alert("Date of birth cannot be later than today");
        return false;
    }
}