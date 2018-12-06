
function triangleType(){   //try without the arguments
 var sides=[];
 sides.push(document.getElementById("txt1").value);  /*value property
 sets or returns the value of the value attribute of a text field*/
 sides.push(document.getElementById("txt2").value);
 sides.push(document.getElementById("txt3").value);

if(sides[0]==""||sides[1]==""||sides[2]==""){
  document.getElementById("result").innerHTML="Please enter values";
}else{
  var x=parseInt(sides[0]);
  var y=parseInt(sides[1]);
  var z=parseInt(sides[2]);
  if(x+y<=z || y+z<=x || x+z<=y){
   document.getElementById("result").innerHTML="Not a Triangle";
 }else if(x==y && y==z){
   document.getElementById("result").innerHTML="Equilateral Triangle";
 }else if(y==z || x==z|| x==y){  //chain your comparisons together with logical operators,
   document.getElementById("result").innerHTML="Isosceles Triangle";
 }else{
   document.getElementById("result").innerHTML="Scalene Triangle";
 }
}
}



//calling the function
