console.log('[MSBD5017] Background script executed')

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

// Add received message (searching information) from content script and add to chrome.storage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('[MSBD5017] Message reveived.'); // debugging message
    chrome.storage.local.get(['history'],
      function(result){
        var hist_json = undefined;
        // If history, initialize a history obj
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
