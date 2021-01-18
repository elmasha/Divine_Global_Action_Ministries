
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      document.getElementById("contact1").style.display = "block";
      document.getElementById("contact2").style.display = "none";
    } else {
      // No user is signed in.

      document.getElementById("contact1").style.display = "none";
      document.getElementById("contact2").style.display = "block";
    }
  });


function Login(){
var userEmail = document.getElementById("email").value;
var userPass = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
    // Signed in 
    // ...
    document.getElementById("contact1").style.display = "none";
    window.alert("Logged in")
    
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage)
  });

}