function checks() 
{
    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        // debugger;
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                if (checkboxes[0].value == "Reading" && checkboxes[0].checked) {
                    var r = document.getElementById('read');
                    r.hidden = false;
                }
                else {
                    var r = document.getElementById('read');
                    r.hidden = true;
                }
                checkboxes[i].addEventListener('change', checkValidity);
            }
            //var p = checkboxes[0].values;
            // console.log(p);
            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);

    }   


    init();

    // ValidateEmail();
    // validatedate();







    //code to check password is correct
    // function checkpass() {
    //     var password = document.getElementById('pass').value;
    //     var cpassword = document.getElementById('cpass').value;
    //     if (password != cpassword) {
    //         alert("password dont match try again!!!");
    //     }

    // }
    
   

}
function ValidateEmail() {
    var email1 = document.getElementById('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email1.value.match(mailformat)) {
           alert("Valid email address!");
        // document.sectionForm.email1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        // document.sectionForm.email1.focus();
        return false;
    }
}

function reset()
{
    var d = document.querySelectorAll('input');
    for (let index = 0; index < d.length; index++) {
        d[index].value = "";
        
    }
}

function validatedate() {
 
    var dob = document.getElementById('dob');
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    var spandob= document.getElementById('dobm');
        if(dob.value == "")
        
        {
            spandob.innerText = "";
        }
    
    if (dob.value.match(dateformat))
     {

       
        // document.sectionForm.dob1.focus();
        //Test which seperator is used '/' or '-'
        var opera1 = dob.value.split('/');
        var opera2 = dob.value.split('-');
        lopera1 = opera1.length;
        lopera2 = opera2.length;
        // Extract the string into month, date and year
        if (lopera1 > 1) {
            var pdate = dob.value.split('/');
        }
        else if (lopera2 > 1) {
            var pdate = dob.value.split('-');
        }
        var dd = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
        let d= dd.toString();
        let m= mm.toString();
        let y =yy.toString();
        // debugger;
        // var date1= d+"-"+m+"-"+y;
        // var mydate = new Date(date1);
            var today = new Date();
            console.log(today.getUTCFullYear());
            if (y > today.getUTCFullYear()) 
            {
              
                spandob.style.color="red";
                spandob.innerText = "DOB year should be less than current year" ;
                // alert("Date of Birth Error");
                return false;
            }

        
        
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
                alert('Invalid date format!');
                return false;
            }
        }
        if (mm == 2) {
            var lyear = false;
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear == false) && (dd >= 29)) {
                alert('Invalid date format!');
                return false;
            }
            if ((lyear == true) && (dd > 29)) {
                alert('Invalid date format!');
                return false;
            }
           
        }
        spandob.style.color="green";
        spandob.innerText = "DOB is valid" ;
        
    }
    else
     {
        spandob.innerText = "DOB is invalid" ;
        spandob.style.color="red";
        // alert("Invalid date format!");
        // document.sectionForm.dob1.focus();
 
        return false;
    }
}
window.addEventListener('beforeunload', function (e) {
    var name = this.document.getElementById('name').value;
    e.preventDefault();
    alertbox("Thanks "+name+" for using "+this.navigator.appName+" ");
    e.returnValue = '';
});