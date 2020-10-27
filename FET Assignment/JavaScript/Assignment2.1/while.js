function printNumbersWithWhileLoop()
{
    document.write("With while loop..<br>");
    var i = 1;
    while (i < 101) {
        document.write(i + "   ");
        var r = i % 10;
        if(r == 0)
        document.write("<br>");
        i++;
      }
      document.write("<hr>");
}