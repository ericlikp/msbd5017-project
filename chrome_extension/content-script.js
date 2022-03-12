console.log("[MSBD5017] Content script has been injected.");

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// get search bar
var url = window.location.href;
var google_regex = /https:\/\/www.google.com(.hk)?\/search\?q=.*/;
var youtube_regex = /https:\/\/www.youtube.com\/results\?search_query=.*/;
var source = undefined;
// console.log('[MSBD5017] ' + url); // debugging message
if (google_regex.test(url)){
  var searchBar = getElementByXpath("/html/body/div[4]/div[2]/form/div[1]/div[1]/div[2]/div/div[2]/input");
  source = 'Google';
  console.log('[MSBD5017] Searching keywords in google: "' + searchBar.value + '"');
} else if (youtube_regex.test(url)){
  var searchBar = document.getElementById('search-input').childNodes[0]
  source = 'YouTube';
  console.log('[MSBD5017] Searching keywords in youtube: "' + searchBar.value + '"');
}

// TODO: send the message to background
// Send the searched keywords to background script
chrome.runtime.sendMessage({
  source: source,
  keywords: searchBar.value,
  timestamp: Date.now()
});
