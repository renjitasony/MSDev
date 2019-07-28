function validateForm()
{    
    var scnd = document.getElementById("two").value;
    if((document.getElementById("one").value == "")
     || (scnd == "")){
         alert("Please enter both numbers to continue:");
         return false;
     }
     if(parseInt(scnd) == 0){
         alert("The divisor cannot be zero.");
         document.myform.two.focus();
         return false;
     }
}
function opidentify()
{    
    validateForm();
     a=parseInt(document.getElementById("one").value);
     b=parseInt(document.getElementById("two").value);
    var op = document.getElementById("op").value;
    
    if(op=="Addition"){
        result=  add(a,b);
    }else if(op=="Subtraction"){
         result=subtract(a,b);
    }else if(op=="Multiplication"){
         result=multiply(a,b);
    }else if(op=="Division"){
         result=divide(a,b);
    }
    else{
        result="";
    }
    document.getElementById("result").innerHTML="<b>"+result+"<b>";
    return;
}
function add(a,b){
    var result = a+b;   
   return result;
}
function subtract(a,b){
    var result = a-b;
    return result;
}
function multiply(a,b){
    var result = a*b;
    return result;
}
function divide(a,b){
    var result = a/b;
    return result;
}