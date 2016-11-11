
  
  $("#row1").css("background-color", "#FFF");
  $("#random").css("background-color", "#FFF");
  
  function c(val)
{
document.getElementById("display").value=val;
}
function v(val)
{
document.getElementById("display").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("display").value)) 
} 
catch(e) 
{
  c('Error') 
} 
} 
  
  
