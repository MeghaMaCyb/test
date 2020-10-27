function printNumbersWithDoWhileLoop()
{
    var i = 1;
    document.write("With doWhile loop..<br>");
    do {
        document.write(i + "   ");
        var r = i % 10;
        if(r == 0)
        document.write("<br>");
        i++;
      }
      while (i < 101);
      document.write("<hr>");
}