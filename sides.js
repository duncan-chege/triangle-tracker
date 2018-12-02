

function triangleType(){
 var sideA=parseInt(document.getElementById("txt1").value);  /*value property
 sets or returns the value of the value attribute of a text field*/
 var sideB=parseInt(document.getElementById("txt2").value);
 var sideC=parseInt(document.getElementById("txt3").value);

if(sideA+sideB<=sideC || sideC+sideB<=sideA || sideA+sideC<=sideB){
  document.getElementById("result").innerHTML="Not a Triangle";
}else if(sideA == sideB && sideB == sideC){
  document.getElementById("result").innerHTML="Equilateral Triangle";
}else if(sideB==sideC || sideA==sideC|| sideA==sideB){
  document.getElementById("result").innerHTML="Isosceles Triangle";
}else{
  document.getElementById("result").innerHTML="Scalene Triangle";
}
}

//calling the function
