function printNumbersWithForLoop()
{
    var i;
    document.write("With for loop..<br>");
    for (i = 1; i < 101; i++) {
            document.write(i + "   ") ;
            var r = i % 10;
            if(r == 0)
             document.write("<br>");
}
document.write("<hr>");
}