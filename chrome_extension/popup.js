//store toggle status
function storeToggle(status) {
   chrome.storage.sync.set({'toggle': status});
}



var checkbox = document.querySelector("#check_box");
//listen for changes made to toggle
if(checkbox){
  checkbox.addEventListener('change', function() {
  if (this.checked) {
    storeToggle(1);
    console.log("toggle set to " + 1);
  }
  else {
    storeToggle(0);
    console.log("toggle set to " + 0);
  }
  });
}




var profile = document.querySelector("#toggle_profile");
if(profile) {
  profile.addEventListener('click', function() {
  window.open('./profile.html','_self');
  });
}



//set popup settings
window.onload = function () {
    console.log("POPUP window loaded!");

    chrome.storage.sync.get('toggle', function(result) {
      if(checkbox) {
        if(result.toggle === 1) 
          checkbox.checked = true;
        else
          checkbox.checked = false;
      }
      
    });
    

}