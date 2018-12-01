
var sides=[];
for(var index=0; index<=sides.length; index++){
//sides.push(parseInt(prompt("Enter the length of sides: "(index+1)))
}

function triangleType(sides){
 var sideA=parseInt(document.getElementById("txt1").value);  /*value property
 sets or returns the value of the value attribute of a text field*/
 var sideB=parseInt(document.getElementById("txt2").value);
 var sideC=parseInt(document.getElementById("txt3").value);

if(sideA == sideB== sideC){
  document.getElementById("result").innerHTML="Equilateral Triangle";
}else if(sideB!==sideC==sideA || sideA!==sideB==sideC || sideC!==sideB==sideA){
  document.getElementById("result").innerHTML="Isosceles Triangle";
}else if(sideA!==sideB!==sideC){
  document.getElementById("result").innerHTML="Scalene Triangle";
}else{
  prompt("Not a triangle");
}
}
//calling the function
