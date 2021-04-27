var firebaseConfig = {
  apiKey: "AIzaSyBdGpEGj3OWAeRw80eiIzD9rgWZEUNhpP0",
  authDomain: "webapp1-84753.firebaseapp.com",
  projectId: "webapp1-84753",
  storageBucket: "webapp1-84753.appspot.com",
  messagingSenderId: "1032126530254",
  appId: "1:1032126530254:web:d358eaff7ece161773069f",
  measurementId: "G-T9XE7L3R60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let dbRef=firebase.database().ref().child("students"); 
  function createStudent(){
      let name=document.getElementById("name").value;
      let branch=document.getElementById("branch").value;
      let rollno=document.getElementById('rollno').value;
      
      dbRef.child(rollno).set({
          name:name,
          branch:branch,
          rollno:rollno
      }); 
      console.log("Student data inserted Successfully");
  }
  function deleteStudent(){
      
      let rollno=window.prompt("Enter the Rollno of the student to be deleted");
      dbRef.child(rollno).remove();
      console.log(rollno+" removed");
  }
  function updateStudent(){
    let name=document.getElementById("name").value;
    let branch=document.getElementById("branch").value;
    let rollno=document.getElementById('rollno').value;
    dbRef.child(rollno).update({
      name:name,
      branch:branch,
      rollno:rollno
    })
    console.log("Updated Succesfully");
  }
  
  function display(){
    var tb=document.createElement("TABLE");
    tb.border="1";
    var row=tb.insertRow(-1)
    var cella1=row.insertCell(-1)
    var cella2=row.insertCell(-1)
    var cella3=row.insertCell(-1)
    cella1.innerHTML="<h5>Student Name</h5>"
    cella2.innerHTML="<h5>Branch</h5>"
    cella3.innerHTML="<h5>Rollno</h5>"
    dbRef.once('value',function(snapshot) {
       
      snapshot.forEach(function(childSnapshot) {
        var row1=tb.insertRow(-1)
        var cell1=row1.insertCell(-1)
        var cell2=row1.insertCell(-1)
        var cell3=row1.insertCell(-1)
          cell1.innerHTML=childSnapshot.val().name;
          cell2.innerHTML=childSnapshot.val().branch;
          cell3.innerHTML=childSnapshot.key;
           
      });
    });
    var Dtable=document.getElementById("students")
    Dtable.append(tb);

  }