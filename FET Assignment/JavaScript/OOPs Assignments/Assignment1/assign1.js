function calcDistance(p1,p2){
    let sq=Math.pow((p2.x-p1.x),2)+Math.pow((p2.y-p1.y),2);
    let pow=Math.sqrt(sq);
    return pow;
}

function midpoint(p1,p2){
    console.log("inside midpoint");
    let x1=(p1.x+p2.x)/2;
    let y1=(p1.y+p2.y)/2;
    let p=new Point(x1,y1);
    return p;
}

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

class Shape{
    constructor(edges,points){
        this.edges=edges;
        this.points=points;
    }

    area(){
        console.log(" Shape Area ");
    }

    perimeter(){
        console.log(" Shape Perimeter ");
    }
}

class Triangle extends Shape{
    constructor(edges,points){
        super(edges,points);
    }

    area(){
        console.log(" Triangle Area ");
        if(this.edges!=3){
            window.alert("Triangles have 3 edges so input 3 points only");
            return; 
        }
        else{
            let res=document.getElementById("res"); 
            let b=calcDistance(pts[0],pts[1]);
            console.log("before midpoint");
            let mid=midpoint(pts[0],pts[1]);
            console.log("outside midpoint");
            let h=calcDistance(mid,pts[2]);
            res.innerHTML=" Area of Triangle = "+(0.5*b*h);
        }
    }

    perimeter(){
        console.log(" Triangle Perimeter ");
        if(this.edges!=3){
            window.alert("Triangles have 3 edges so input 3 points only");
            return; 
        }
        else{
            let res=document.getElementById("res"); 
            let s1=calcDistance(pts[0],pts[1]);
            let s2=calcDistance(pts[1],pts[2]);
            let s3=calcDistance(pts[2],pts[0]);
            res.innerHTML=" Perimeter of Triangle = "+(s1+s2+s3);
        }
    }
}

class Square extends Shape{
    constructor(edges,points){
        super(edges,points);
    }

    area(){
        console.log(" Square Area ");
            if(this.edges!=4){
                window.alert("Square have 4 edges so input 4 points only");
                return; 
            }
            else{
                let res=document.getElementById("res"); 
                let s=calcDistance(pts[0],pts[1]);
                res.innerHTML=" Area of Square = "+(s*s);
            }
    }

    perimeter(){
        console.log(" Square Perimeter ");
        if(this.edges!=4){
            window.alert("Square have 4 edges so input 4 points only");
            return; 
        }
        else{
            let res=document.getElementById("res"); 
            let s=calcDistance(pts[0],pts[1]);
            res.innerHTML=" Perimeter of Square = "+(4*s);
        }
    }
}

class Rectangle extends Shape{
    constructor(edges,points){
        super(edges,points);
    }

    area(){
        console.log(" Rectangle Area");
        if(this.edges!=4){
        window.alert("Rectangle have 4 edges so input 4 points only");
        return; 
        }
        else{
            let res=document.getElementById("res"); 
            let l=calcDistance(pts[0],pts[1]);
            let b=calcDistance(pts[1],pts[2]);
            res.innerHTML=" Area of rectangle = "+(l*b);
        }
    }

    perimeter(){
        console.log("Rectangle Perimeter");
        if(this.edges!=4)
            window.alert("Rectangle have 4 edges so input 4 points only");
        else{
            let res=document.getElementById("res"); 
            let l=calcDistance(pts[0],pts[1]);
            let b=calcDistance(pts[1],pts[2]);
            res.innerHTML=" Perimeter of rectangle = "+(2*(l+b));
        }
    }
}