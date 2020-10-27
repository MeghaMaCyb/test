function addBook() {
    // var div = document.getElementById("second");
    // div.style.visibility = "hiden";
    //window.prompt("Enter the bookId");
    var bookid = prompt("Please enter book Id", "1000");
    var bookname = prompt("Please enter book Name", "java");
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var myObject = {"bookId" : bookid, "bookName" : bookname};
    cell1.innerHTML = myObject.bookId;
    cell2.innerHTML = myObject.bookName;
    
  }

  function removeBook()
  {
    document.getElementById("myTable").deleteRow(1);
  }