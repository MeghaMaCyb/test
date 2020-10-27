
		//function that display value 
		function dis(val) 
		{ 
			document.getElementById("result").value+=val 
		} 
		
		//function that evaluates the digit and return result 
		function solve() 
		{ 
			let x = document.getElementById("result").value 
			let y = eval(x) 
			document.getElementById("result").value = y 
		} 
		
		//function that clear the display 
		function clr() 
		{ 
			document.getElementById("result").value = "" 
        } 
        
        function backspace()
        {                                              
            let a = document.getElementById("result").value;
            document.getElementById("result").value = document.getElementById("result").value.substring(0,a.length - 1);
        }
        function sqrt()
        {
            // debugger;
            var q = document.getElementById("result").value;
            document.getElementById("result").value= Math.sqrt(q);                
        }
        function sqr()
        {
            let v = document.getElementById('result').value;

                document.getElementById('result').value = v * v;

       }
       function cube()
        {
			debugger;
            let v = document.getElementById('result').value;
			document.getElementById('result').value = v * v * v;

                

       }
       function normalcal()
       {
            let d = document.getElementById('science');
			d.hidden = true;
       }
       function science()
       {
            // debugger;
            let d = document.getElementById('science');
            d.hidden = false;
       }
	   function singleBtn()
	   {
		var cont = document.getElementById('science');
        if (cont.style.display == 'contents') {
            cont.style.display = 'none';

            document.getElementById('btnn').value = 'SCIENTIFIC';
        }
        else {
            cont.style.display = 'contents';
            document.getElementById('btnn').value = 'NORMAL';
        }
	   }