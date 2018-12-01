var sides=[];
for(var index=0; index<=sides.length; index++){
//sides.push(parseInt(prompt("Enter the length of sides: "(index+1)))
}

function triangleType(sides){
  var sideA=parseInt(document.getElementById('txt1').value);  /*value property
  sets or returns the value of the value attribute of a text field*/
  var sideB=parseInt(document.getElementById('txt2').value);
  var sideC=parseInt(document.getElementById('txt3').value);
if(sideA == sideB && sideB == sideC && sideA == sideC){
  prompt("Equilaeral Triangle");
}else if(sideA==sideB ||sideA==sideC ||sideB==sideC){
  prompt("Isosceles Triangle");
}else if(sideA!==sideB && sideB!==sideC && sideA!==sideC){
  prompt("Scalene Triangle");
}else{
  prompt("Not a triangle");
}
}

//calling the function
