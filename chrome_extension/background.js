console.log('[MSBD5017] Background script executed')
chrome.storage.sync.set({'toggle': 0});
console.log("Toggle initialized as 0!");



//get toggle status
function getToggle() {
   chrome.storage.sync.get('toggle', function(result) {
  console.log('[BACKGROUND] Value is ' + result.toggle);
  });
}

getToggle();




// Programmatically inject script for youtube (or other pushState website)
// As youtube is changed via history.pushState instead of loading
chrome.webNavigation.onHistoryStateUpdated.addListener(
  function(details){
    // console.log('[MSBD5017] onHistory: '+details.url); // debugging message
    var youtube_regex = /https:\/\/www.youtube.com\/results\?search_query=.*/;
    if (youtube_regex.test(details.url)){
      // inject script
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['content-script.js']
      });
    }
  }
);

// Add received message (search history) from content script and add to chrome.storage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('[MSBD5017] Message received.'); // debugging message



    chrome.storage.local.get(['history'],
      function(result){
        var hist_json = undefined;
        // If no history, initialize a history obj
        if(!result.history){
          hist_json = {
            type: 'Google & YouTube',
            searchingHistory: []
          }
          chrome.storage.local.set({'history': JSON.stringify(hist_json)});
        }
        // otherwise, parse the string as json
        else{
          hist_json = JSON.parse(result.history);
        }


        if(request.source === 'Google' || request.source === 'YouTube'){
          hist_json.searchingHistory.push(request);
          console.log('[MSBD5017] A ' + request.source + ' search for "' + request.keywords + '" has been added to the record.');
          console.log(hist_json); // debugging message
          chrome.storage.local.set({'history': JSON.stringify(hist_json)});
        }
      }
    );
  }
);
