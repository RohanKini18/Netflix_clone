function validateform(){  
    var nam=document.myform.email.value;  
     
      
    if (nam==null || nam==""){  
      alert("Email can't be blank") 
      return false;  
    }else if(nam=='rohankini.rk18@gmail.com'){       
        alert("Loading......✔️✔️✔️");
        window.location.assign("login.html");      
    }
    else
    {
        alert("❌Invalid Email❌")
        return false;
    } 
    } 