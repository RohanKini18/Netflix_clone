var login = JSON.parse(localStorage.getItem("login_users")) || [];
document.querySelector("#btn1").addEventListener("click", myFun);
function myFun() {
 
  event.preventDefault();
  
  var email = document.getElementById("text").value;
  var password = document.getElementById("password").value;
  var flag = false;

  for (var i = 0; i < login.length; i++) {
    if (login[i].email === email && login[i].pass === password) {
      flag = true;
    }
  }
  if (flag) {
    event.preventDefault();
    console.log(1);
    alert("login Sucessfull ✔️");
    window.location.href = "/Netflix_Home_Page_Static_Main/NetFlix_HomePage_Main.html";
  } else {
    alert("Wrong Credential   ❌");
  }
}





import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyDIwrPchQIY5hLmhssR97zBRMacKP6n3dw",
  authDomain: "netflix-clone-f3bd7.firebaseapp.com",
  databaseURL: "https://netflix-clone-f3bd7-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-f3bd7",
  storageBucket: "netflix-clone-f3bd7.appspot.com",
  messagingSenderId: "436180578507",
  appId: "1:436180578507:web:1f91f100cdf1ca00a8ab4e"
};

firebase.initializeApp(firebaseConfig);
firebase.database().ref('netflixform')

