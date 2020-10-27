$('document').ready(()=>{
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        method: 'GET',
        success: function(data){
            console.log(data.length);

            for(i=0;i<data.length; i+6)
            {
                var pic =data[i].url;
                var draw="<img src='"+pic+"'>";
                mainRow="<tr></tr>";
                var row =new Array();
                var r=i;
                for(j=i;j<(i+6);j++)
                {
                    row[j]="<td>"+draw+"<br>title: "+data[j].title+"<br>Price: "+data[j].id+"<br><button>Add to cart</button></td>";
                }
                i=r;
                $('table').append("<tr>"+row[i]+row[i+1]+row[i+2]+row[i+3]+row[i+4]+row[i+5]+"</tr>");
                i=i+6;
            }
        },
        error:function()
        {
            alert("Error!!!!!!");
        }
    })
})