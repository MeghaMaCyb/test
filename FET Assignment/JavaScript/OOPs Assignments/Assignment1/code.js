
var pts=[];

function addPoint(){
    let xc=document.getElementById("x-cd");
    let xval=xc.value;
    xc.value="";
    let yc=document.getElementById("y-cd");
    let yval=yc.value;
    yc.value="";
    pts.push(new Point(xval,yval));
    let list=document.getElementById("list");
    list.textContent+="("+xval+","+yval+"),";
}

function printTriangleArea(){
    let tri=new Triangle(pts.length,pts);
    tri.area();
}

function printTrianglePeri(){
    let tri=new Triangle(pts.length,pts);
    tri.perimeter();
}

function printSquareArea(){
    let sq=new Square(pts.length,pts);
    sq.area();
}

function printRectArea(){
    let rect=new Rectangle(pts.length,pts);
    rect.area();
}

function printSquarePeri(){
    let sq=new Square(pts.length,pts);
    sq.perimeter();
}

function printRectPeri(){
    let rect=new Rectangle(pts.length,pts);
    rect.perimeter();
}