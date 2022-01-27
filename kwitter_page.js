//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDQFd1xMchvGPFaweNWDn68cO45hVgwChQ",
      authDomain: "kwitter-954fd.firebaseapp.com",
      databaseURL: "https://kwitter-954fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-954fd",
      storageBucket: "kwitter-954fd.appspot.com",
      messagingSenderId: "777940962837",
      appId: "1:777940962837:web:8a8e397e1733e35207881c"
    };
    firebase.initializeApp(firebaseConfig);    

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
       
      function send(){
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value="";

      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }