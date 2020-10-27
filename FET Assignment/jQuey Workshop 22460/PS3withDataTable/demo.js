$.ajax({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/users',
    data:{get_param: 'value'},
    success: function(data){
        $.each(data, function (index, element){

        });
        console.log(data);
        $(document).ready( function () {
            $('#table_id').DataTable({
                data:data,
                columns: [
                    {data: "id"},
                    {data: "name"},
                    {data: "username"},
                    {data: "email"},
                    {data: "address.city"},
                    {data: "phone"},
                    {data: "website"},
                    {data: "company.name"},
                ]
        });
        });
    }
});