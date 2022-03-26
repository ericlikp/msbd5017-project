var submission = document.querySelector("#submit");
if(submission){
  submission.addEventListener('click', function() {



    var last_name = document.getElementById("last_name").value;
    if(last_name) {
      console.log("last name is:" + last_name);
      chrome.storage.sync.set({'last_name': last_name});
    }

    var first_name = document.getElementById("first_name").value;
    if(first_name) {
      console.log("first_name is:" + first_name);
      chrome.storage.sync.set({'first_name': first_name});
    }

    var birth = document.getElementById("birth").value;
    if(birth) {
      console.log("birth is:" + birth);
      chrome.storage.sync.set({'birth': birth});
    }

    var birth = document.getElementById("birth").value;
    if(birth) {
      console.log("birth is:" + birth);
      chrome.storage.sync.set({'birth': birth});
    }

    var gender_query = document.querySelector('input[name="gender"]:checked');
    if(gender_query) {
      var gender = gender_query.value;
      if(gender) {
        console.log("gender is:" + gender);
        chrome.storage.sync.set({'gender': gender});
      }
    }


    var occupation = document.getElementById("occupation").value;
    if(occupation!="Null") {
      console.log("occupation is:" + occupation);
      chrome.storage.sync.set({'occupation': occupation});
    }

    alert("Submitted!");
    window.close();
  });
}


//submit new profile
window.onload = function () {
    console.log("submission page loaded!");
}
