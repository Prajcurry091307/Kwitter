var firebaseConfig = {
      apiKey: "AIzaSyCAp8sXb7bGXiADklGUsOyiyT31Di-3el0",
      authDomain: "kwitter-c2f48.firebaseapp.com",
      databaseURL: "https://kwitter-c2f48-default-rtdb.firebaseio.com",
      projectId: "kwitter-c2f48",
      storageBucket: "kwitter-c2f48.appspot.com",
      messagingSenderId: "658186658179",
      appId: "1:658186658179:web:ecee3c6518770d1c5716b6"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
