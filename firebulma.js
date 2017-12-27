//6
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3vieO3WGSCO6UKQsNkRjZ82KsbVM5Ct8",
    authDomain: "npm-vs-yarn-cec61.firebaseapp.com",
    databaseURL: "https://npm-vs-yarn-cec61.firebaseio.com",
    projectId: "npm-vs-yarn-cec61",
    storageBucket: "npm-vs-yarn-cec61.appspot.com",
    messagingSenderId: "830500788286"
  };
  firebase.initializeApp(config);

  var UserRef = firebase.database().ref('messages');

//1
document.getElementById('fireForm').addEventListener('submit',submitUser);

//2
function submitUser(e){
    e.preventDefault();
//4
var user = val('user');
var email = val('email');
var textarea = val('textarea');

Smessage(user, email, textarea);

document.querySelector('.thanks').style.display="block";
setTimeout(function(){
    document.querySelector('.thanks').style.display="none";
   
},1500);

document.getElementById("fireForm").reset();

}
//3
function val(id){
    return document.getElementById(id).value;
}

function Smessage(user,email,textarea){
    var newUserRef = UserRef.push();
    newUserRef.set(
        {
           user: user,
           email: email,
           textarea: textarea
        
        });
}


