function sendJSON(){ 
	// -------------------------Code written by Priyanshu Raghuvanshi-------------------------------------------------------------------
	// Declaring variables
	let username = document.querySelector('#username'); 
	let pwd = document.querySelector('#pwd'); 
	
	var radios = document.getElementsByName('user_type');

		for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			

		var radio=radios[i].value;

			
			break;
		}
		
	}
	
	// Create XHR object
	let xhr = new XMLHttpRequest(); 
	 

	
	xhr.open("POST",'API/login.php', true); 

	
	xhr.setRequestHeader("Content-Type", "application/json"); 

	
	xhr.onload = function () { 
		
		if (xhr.status === 200) { 

		
			if(this.responseText==1)
			{
					window.location.href="home.php";
			}
			else if(this.responseText==0)
			{
				
				alert("Wrong Details");
			}
		
			
			
		} 
		
	}; 

	
	if(radio>0)
		{
			var data = JSON.stringify({"user_type":radio, "username": username.value, "pwd": pwd.value }); 

	
	xhr.send(data); 
		

		}
	else
	{
		alert("Please Select Login Type");
	}
		
	

} 
