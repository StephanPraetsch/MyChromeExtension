console.log("content.js");

function filter(node) {
  if (node.nodeName.toLocaleLowerCase().indexOf("video") !== -1) {
    if (node.src !== undefined) {
      return true;
    }
  }
  return false;
}

function scanDocument(document) {
  let ni = document.createNodeIterator(
    document.documentElement,
    NodeFilter.SHOW_ELEMENT
  );

  let currentNode;
  const nodes = new Set();
  while ((currentNode = ni.nextNode())) {
    if (currentNode.nodeName === "IFRAME") {
      try {
        let innerNodes = scanDocument(currentNode.contentWindow.document);
        innerNodes.forEach(node => nodes.add(node));
      } catch (e) {
        // ignore, probably blocked as cross origin request
      }
    }
    if (filter(currentNode)) {
      nodes.add(currentNode);
    }
  }
  return nodes;
}

function openInNewTab(string) {
  let message = {
    request: "openNewTab",
    content: string
  };
  chrome.runtime.sendMessage(message);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);
  if (message.request === "scan") {
    let videos = Array.from(scanDocument(document));
    console.log(videos.sort());
    if (videos.length > 0) {
      openInNewTab(videos[0].outerHTML);
    }
  }
});
