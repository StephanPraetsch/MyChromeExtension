window.addEventListener("load", function(evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "payload.js"
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(`onUpdated tabId=${tabId} changeInfo=${changeInfo} tab=${tab}`);
});

chrome.runtime.onMessage.addListener(function(message, sender) {
  console.log(`onMessage ${message} from ${sender.tab}`);
  let pageTitle = document.getElementById("pagetitle");
  if (pageTitle !== null && pageTitle !== undefined) {
    console.log("set new title");
    pageTitle.innerHTML = "foo" + message;
  }
});
