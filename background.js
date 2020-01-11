console.log("background 222");

// eslint-disable-next-line @typescript-eslint/no-use-before-define
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log("button clicked");
  let msg = {
    message: "user clicked!"
  };
  chrome.tabs.sendMessage(tab.id, msg);
  console.log("sent message to " + tab.id);
}
