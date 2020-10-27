$(document).ready(()=>{
    

        $("#commentForm").validate({
            rules:{
                username:{
                    minlength: 3,
                    required: true
                },
                password:{
                    required: true
                },
                cpassword:{
                    required: true
                },
                pnumber:{
                    required: true
                },
                skills:{
                    required: true
                },
                city:{
                    required: true
                },
                email:{
                    required: true
                }
    
            }
        })
    });
