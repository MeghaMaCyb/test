document.body.onload = myFunction;
function myFunction() {
    var para = document.createElement("P");
    para.innerHTML = "This is a new paragraph.";
    document.getElementById("div1").appendChild(para);
  }
