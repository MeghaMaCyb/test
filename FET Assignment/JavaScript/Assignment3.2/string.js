var companyName = "Cybage Software Pvt Ltd";
document.write("String :: " + companyName +"<br>");
var sln = companyName.length;
document.write("Length of the String is " + sln + "<br>");

 function searchChar()
 {
   var ch = document.getElementById("mychar").value;
   var i = companyName.indexOf(ch);
   if(i == "")
       document.getElementById("outputPara").innerHTML="Please Enter the character"
   else if(i == -1)
       //document.write("Character "+ch+" not found <br>");
       document.getElementById("outputPara").innerHTML="Character "+ch+" not found <br>"
   else
       //document.write("Character "+ch+" is found at position " +i+" <br>");
       document.getElementById("outputPara").innerHTML="Character "+ch+" is found at position " +i+" <br>"
 }

 function extractString()
 {
   var sub = companyName.substring(0, 15);
   document.getElementById("outputPara").innerHTML = companyName +" is popularly known as "+ sub;
 }
 function convertUpper()
 {
   var uStr = companyName.toUpperCase();
   document.getElementById("outputPara").innerHTML = uStr
 }
 function convertLower()
 {
   var lStr = companyName.toLowerCase();
   document.getElementById("outputPara").innerHTML = lStr
 }
