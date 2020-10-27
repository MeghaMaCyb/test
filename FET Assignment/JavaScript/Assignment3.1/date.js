var d = new Date();
document.write(d);

var hr = d.getHours();
if(hr < 12)
    document.write("<br> Good Morning!!!");
else if( hr >=12 && hr <= 17)
    document.write("<br> Good Afternoon!!!");
else if(hr > 17)
    document.write("<br> Good Evening!!!");