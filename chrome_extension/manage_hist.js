console.log('[MSBD5017] Test axios');
console.log(axios);
console.log('[MSBD5017] Test rpc');
console.log(Json_rpc_methods);

chrome.storage.local.set({'toRemove': ''});

chrome.storage.local.get(['history'],
  function(result){
    // If history exist, show them on page
    if(result.history){
      var hist_json = JSON.parse(result.history);
      hist_json = hist_json.searchingHistory;

      // Add content to SearchHistTable
      var tbodyRef = document.getElementById('SearchHistTable').getElementsByTagName('tbody')[0];
      for(var i=0; i<hist_json.length; i++){
        var newRow = tbodyRef.insertRow();
        // Website
        var websiteCell = newRow.insertCell();
        var text = document.createTextNode(hist_json[i].source);
        websiteCell.appendChild(text);
        // Keywords
        var keywordsCell = newRow.insertCell();
        text = document.createTextNode(hist_json[i].keywords);
        keywordsCell.appendChild(text);
        // Day and Time
        var daytimeCell = newRow.insertCell();
        var daytime = new Date(parseInt(hist_json[i].timestamp));
        daytime = daytime.toLocaleString();
        text = document.createTextNode(daytime);
        daytimeCell.appendChild(text);
        // Remove
        var removeCell = newRow.insertCell();
        var removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove';
        removeBtn.onclick = function() {
          var index = this.parentNode.parentNode.rowIndex - 2;
          console.log('[MSBD5017] Button ' + String(index) + ' is clicked.'); // debug
          // Noticefy the user
          this.disabled = true;
          this.innerHTML = 'Removed';
          // save add the index to toRemove
          chrome.storage.local.get(['toRemove'],
            function(result){
              var toRemove = result.toRemove.split(' ');
              toRemove.push(index);
              chrome.storage.local.set({'toRemove': toRemove.join(' ')});
              console.log('[MSBD5017] to be removed: ' + toRemove.join(' ')); // debug
            }
          );
        };
        removeCell.appendChild(removeBtn);
      }

      // Add a submit button
      var submitBtnDiv = document.getElementById('SubmitBtnContainer');
      var submitBtn = document.createElement('button');
      submitBtn.innerHTML = 'Submit';
      submitBtn.onclick = function(){
        console.log('[MSBD5017] Submit clicked'); // debug
        chrome.storage.local.get(['toRemove', 'history'],
          function(result){
            // Parse
            var toRemove = result.toRemove.split(' ').map(x => parseInt(x));
            var hist_json = JSON.parse(result.history);
            hist_json = hist_json.searchingHistory;
            // Get the to be submitted hist
            var toSubmit = hist_json.filter((hist, index) => !toRemove.includes(index));
            var textToSave = JSON.stringify(toSubmit);
            // Add to etd-blockchain and etd-filesystem
            console.log("[MSBD5017] Try to send to etd");
            var etd_bc_url = "https://rpc.debugchain.net/"; //"https://rpc.etdchain.net/"
            var etd_fs_url = "http://39.98.50.209:5145/";

            // Save
            // var a = document.createElement('a');
            // a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));
            // a.setAttribute('download', 'history.txt');
            // a.style.display = 'none';
            // a.click();
            // Clear all the history saved in extension
            // chrome.storage.local.remove('history');
          }
        );
      }
      submitBtnDiv.appendChild(submitBtn);
    }
    else {
      var status = document.getElementById('status');
      status.innerHTML = 'Empty';
    }
  }
);
