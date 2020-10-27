$(document).ready(function () {

    //assign button click event to call function to create html table dynamically
    $("#btnCreateHtmlTable").click(function () {
        CreateHtmlTable();
    });
}
);

function CreateHtmlTable() {

    //Clear result div
    $("#ResultArea").html("");

    //Crate table html tag
    var table = $("<table id=DynamicTable border=1></table>").appendTo("#ResultArea");

    //Create table header row
    var rowHeader = $("<tr></tr>").appendTo(table);
    $("<td></td").text("ID").appendTo(rowHeader);
    $("<td></td>").text("Name").appendTo(rowHeader);
    $("<td></td>").text("Username").appendTo(rowHeader)
    $("<td></td>").text("Email").appendTo(rowHeader);
    $("<td></td>").text("Address").appendTo(rowHeader);
    $("<td></td>").text("Phone").appendTo(rowHeader);
    $("<td></td>").text("Website").appendTo(rowHeader);
    $("<td></td>").text("Company").appendTo(rowHeader);
    

    //Get JSON data by calling action method in controller
    $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
        $.each(data, function (i, value) {

            //Create new row for each record
            var row = $("<tr></tr>").appendTo(table);
            $("<td></td>").text(value.id).appendTo(row);
            $("<td></td>").text(value.name).appendTo(row);
            $("<td></td>").text(value.username).appendTo(row);
            $("<td></td>").text(value.email).appendTo(row);
            $("<td></td>").text(value.address.city).appendTo(row);
            $("<td></td>").text(value.phone).appendTo(row);
            $("<td></td>").text(value.website).appendTo(row);
            $("<td></td>").text(value.company.name).appendTo(row);
        });
    });
}