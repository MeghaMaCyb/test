var exam=document.getElementById('ex');
var con=exam.getContext("2d");

con.beginPath();
con.lineWidth=10;
con.arc(500,200,40,1*Math.PI,0*Math.PI);
con.strokeStyle="red";
con.stroke();

con.beginPath();
con.lineWidth=10;
con.arc(500,200,50,1*Math.PI,0*Math.PI);
con.strokeStyle="orange";
con.stroke();

con.beginPath();
con.lineWidth=10;
con.arc(500,200,60,1*Math.PI,0*Math.PI);
con.strokeStyle="yellow";
con.stroke();

con.beginPath();
con.lineWidth=10;
con.arc(500,200,70,1*Math.PI,0*Math.PI);
con.strokeStyle="green";
con.stroke();

con.beginPath();
con.lineWidth=10;
con.arc(500,200,80,1*Math.PI,0*Math.PI);
con.strokeStyle="blue";
con.stroke();

con.beginPath();
con.lineWidth=10;
con.arc(500,200,90,1*Math.PI,0*Math.PI);
con.strokeStyle="indigo";
con.stroke();

var a=new Image();
a.src="1.jpg";
a.onload=function(){
con.drawImage(a,100,300,200,200)
}

var b=new Image();
b.src="2.jpg";
b.onload=function(){
con.drawImage(b,400,300,200,200)

}

var c=new Image();
c.src="3.jpg";
c.onload=function(){
con.drawImage(c,700,300,200,200)
}