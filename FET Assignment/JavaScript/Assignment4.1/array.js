var names = new Array();
function addName()
{
    var n = document.getElementById("nameIn").value;
    if(n == "")
    {
    document.getElementById("mypara").innerHTML= "Please enter the name";
    }   
    else
    {
    names.push(n);
    document.getElementById("nameIn").value="";
    document.getElementById("mypara").innerHTML= "";
    }
}
function displayNames()
{
    if(names.length == 0)
    {
        document.getElementById("mypara").innerHTML = "List is empty";
    }   
    else
    {
        // var aLen = names.length;
        // for(var i=0; i<=aLen; i++)
        // {
        //     document.getElementById("mypara").innerHTML = "List of names :: <br>"+names[i]+"<br>";
        // }
        document.getElementById("mypara").innerHTML=names;
    }
    
}
