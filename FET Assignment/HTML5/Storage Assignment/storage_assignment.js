// function setKey()
// {
//     if(typeof(Storage) !== "undefined")
//     {
        
//     }   
//     else
//     {
          
//     document.getElementById("result").innerHTML =
//     "Sorry, ur browser doesnt support web storage";

//     }
// }




function 
save()

{

var 
key1= document.getElementById('key').value;

var 
key2= document.getElementById('value').value;

localStorage.setItem(key1,key2);

var 
table1 =document.getElementById('table1')[0];

var newrow =table1.insertRow(-1);

var 
cell1 =newrow.insertCell(0);

var 
cell2 =newrow.insertCell(1);

var 
cell3 =newrow.insertCell(2);

cell1.innerHTML=key1;

cell2.innerHTML=key2;

cell3.innerHTML='<th><input type="button" id="remove" onclick="remove1(this)" value="remove"/></th>';

}



function 
save1()

{

var 
key1= document.getElementById('key1').value;

var 
key2= document.getElementById('value1').value;

sessionStorage.setItem(key1,key2);

var 
table1 =document.getElementById('table2')[0];

var 
newrow =table1.insertRow(-1);

var 
cell1 =newrow.insertCell(0);

var 
cell2 =newrow.insertCell(1);

var 
cell3 =newrow.insertCell(2);

cell1.innerHTML=key1;

cell2.innerHTML=key2;

cell3.innerHTML='<th><input type="button" id="remove" onclick="remove1(this)" value="remove"/></th>';

}



function 
removeall()

{

localStorage.clear();

var 
deleteall = table1.rows.length;

for(var
i=deleteall-1;
i>0;
i--)

{

table1.deleteRow(i);

}

}



function 
removeall1()

{

sessionStorage.clear();

var 
deleteall = table2.rows.length;

for(var
i=deleteall-1;
i>0;
i--)

{

table1.deleteRow(i);

}

}



function 
remove(r)

{

var 
i=r.parentNode.parentNode.rowIndex;

var 
p =r.parentNode.parentNode;

console.log(p);

var 
k=p.childNodes[0].innerText;

alert(k);

alert(i);

document.getElementById("table1").deleteRow(i);

localStorage.removeItem(k);

}



function 
remove1(r)

{

var 
i=r.parentNode.parentNode.rowIndex;

var 
p =r.parentNode.parentNode;

console.log(p);

var 
k=p.childNodes[0].innerText;

alert(k);

alert(i);

document.getElementById("table2").deleteRow(i);

sessionStorage.removeItem(k);

}





