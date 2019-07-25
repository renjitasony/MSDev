function opidentify()
{
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