console.log("background.js loaded");

// eslint-disable-next-line @typescript-eslint/no-use-before-define
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log("button clicked");
  chrome.tabs.sendMessage(tab.id, {
    request: "scan"
  });
  console.log("sent message to " + tab.id);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);
  if (message.request === "openNewTab") {
    let htmlCode = message.content;
    let url = "data:text/html,<div>" + encodeURIComponent(htmlCode) + "</div>";
    chrome.tabs.create({ url: "newTab.html" });
  }
});
