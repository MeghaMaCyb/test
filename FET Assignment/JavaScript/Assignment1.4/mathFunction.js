var msg; 
msg="<p><code>The script is located in external script file called mathFunction.js</code></p>";  
function addNumbers(headParam, bodyParam) {   
document.write(msg);
var addition = headParam + bodyParam;
var finalmsg = "Addition of " + headParam +" and "+ bodyParam +" is " +addition;
document.write(finalmsg);
}