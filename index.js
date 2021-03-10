var db = firebase.firestore();







function Registerform(){

  var Inputname = document.getElementById("name").value;
  var Inputlocation = document.getElementById("location").value;
  var Inputemail = document.getElementById("email").value;
  var Inputphone = document.getElementById("phone").value;
  var Inputcountry = document.getElementById("country").value;
  var Inputstate = document.getElementById("state").value;
  var Inputmessage = document.getElementById("message").value;

  if(Inputname == "" |Inputphone == ""
   |Inputcountry == "" |Inputmessage == "" |Inputstate == "" |Inputemail == ""){
    window.alert("Inputs are empty")

  }else{

    db.collection("Registration").doc().set({
      Name: Inputname,
      Location: Inputlocation,
      Email: Inputemail,
      Phone: Inputphone,
      Message: Inputmessage,
      State: Inputstate,
      Country: Inputcountry
      })
      .then(function() {
      console.log("Document successfully written!");
      window.alert(Inputname + "  "+"registration successfull")
      })
      .catch(function(error) {
      console.error("Error writing document: ", error);
      window.alert(error)
      });
  }


}



// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
  var userSIEmail = document.getElementById("email").value;
  var userSIPassword = document.getElementById("password").value;
  
 
  if(userSIEmail == null){
      return checkUserSIEmail();
  }else if(userSIPassword == null){
      return checkUserSIPassword();
  }else{
    firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.replace("admin.html");

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage)
    });

  }
}


firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
  //   User is signed in.
      let user = firebase.auth().currentUser;
      let uid
      if(user != null){
          uid = user.uid;
      }
      let firebaseRefKey = firebase.database().ref().child(uid);
      firebaseRefKey.on('value', (dataSnapShot)=>{
         
      })
  } else {
  //   No user is signed in.
  }
});



    



 