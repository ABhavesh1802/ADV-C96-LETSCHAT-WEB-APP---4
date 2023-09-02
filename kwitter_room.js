// Your web app's Firebase configuration
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

 document.getElementById("user_name").innerHTML = 
   "Welcome " + user_name  + "!";

   function addroom()
   {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      document.getElementById("output").innerHTML += row

    //End code
    });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}