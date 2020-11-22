//generate a random number using math library
    
var y=  Math.floor(Math.random()*100+1);
//no of time that took to run your code
var guess=1;

document.getElementById("submitguess").onclick=function(){

//user entered value 
var x=document.getElementById("guessField").value;


if(x==y){
    alert("Congratulations!!. You have Got the number succesfully at " + guess + " time ");
}

else if(x>y)
{
    guess++; 
    alert("Sorry!! Try a smaller number");
}


else{
guess++; 
    alert("Sorry!! Try a larger number");
}
}