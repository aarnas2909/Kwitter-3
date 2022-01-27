

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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firbase_message_id)
      console.log(message_data);
      name = message_data('name');
      message = message_data('message');
      like = message_data('like');
      name_with_tag="<h4>"+ name +"<img class='user_tick" src='tick'></h4>";
      message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
      like_button="<butto class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id'>";
      span_with_tag = "<span class='glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      
      console.log("RoomName- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();



function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html"
}
 
function updateLike(message_id){
  console.log("clicked on like button -"+ message_id);
  button_id= message_id;
  likes= document.getElementById(button_id).value;
  updated_likes = nember(likes)+1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : update_likes
  });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

