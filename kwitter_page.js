var firebaseConfig = {
    apiKey: "AIzaSyBINFOWpP29V3GxyjrO70GzdTA3CurLpb4",
    authDomain: "kwitter-ec5ff.firebaseapp.com",
    databaseURL: "https://kwitter-ec5ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-ec5ff",
    storageBucket: "kwitter-ec5ff.appspot.com",
    messagingSenderId: "916955632638",
    appId: "1:916955632638:web:79d04f04bdd3fb63f5a6af"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send()
 {
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
 }

 function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();
