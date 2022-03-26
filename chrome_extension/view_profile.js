//click OK to close
var ok = document.querySelector("#ok");
if(ok){
  ok.addEventListener('click', function() {
    history.back();
  });
}

//load profile data
window.onload = function () {
    console.log("view page loaded!");

    chrome.storage.sync.get('last_name', function(result) {
      if(result.last_name !=null) {
        document.getElementById("last_result").innerHTML = result.last_name;
      }
      else {
        document.getElementById("last_result").innerHTML = "No input";
      }
    });

    chrome.storage.sync.get('first_name', function(result) {
      if(result.first_name !=null) {
        document.getElementById("first_result").innerHTML = result.first_name;
      }
      else {
        document.getElementById("first_result").innerHTML = "No input";
      }
    });
    
    chrome.storage.sync.get('birth', function(result) {
      if(result.birth !=null) {
        document.getElementById("birth_result").innerHTML = result.birth;
      }
      else {
        document.getElementById("birth_result").innerHTML = "No input";
      }
    });
    
    chrome.storage.sync.get('gender', function(result) {
      if(result.gender !=null) {
        document.getElementById("gender_result").innerHTML = result.gender;
      }
      else {
        document.getElementById("gender_result").innerHTML = "No input";
      }
    });
    
    chrome.storage.sync.get('occupation', function(result) {
      if(result.occupation !=null) {
        document.getElementById("occupation_result").innerHTML = result.occupation;
      }
      else {
        document.getElementById("occupation_result").innerHTML = "No input";
      }
    });


}
