
function triangleType(sideX,sideY,sideZ){
 var sideX=parseInt(document.getElementById("txt1").value);  /*value property
 sets or returns the value of the value attribute of a text field*/
 var sideY=parseInt(document.getElementById("txt2").value);
 var sideZ=parseInt(document.getElementById("txt3").value);

 var sides=[];
 sides.push(sideX,sideY,sideZ);
 var x=sides[0];
 var y=sides[1];
 var z=sides[2];

if(x+y<=z || x+y<=z || x+y<=z){
  document.getElementById("result").innerHTML="Not a Triangle";
}else if(x==y && y==z){
  document.getElementById("result").innerHTML="Equilateral Triangle";
}else if(y==z || x==z|| x==y){  //chain your comparisons together with logical operators,
  document.getElementById("result").innerHTML="Isosceles Triangle";
}else{
  document.getElementById("result").innerHTML="Scalene Triangle";
}
}

//calling the function
