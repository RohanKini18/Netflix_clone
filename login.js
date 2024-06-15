function validateform(){  
    var name=document.myform.email.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      return false;
      alert("Name can't be blank");  
        
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }else if(name=='rohankini.rk18@gmail.com' && password=='Rohan1234'){      
        alert("Login successfull ✔️, Welcome to Netflix!!✔️")
        window.location.assign("signinguin.html");        
            
    }
    else{
      alert("❌Invalid Email or Password❌");  
      return false; 
      
    }

    
  }