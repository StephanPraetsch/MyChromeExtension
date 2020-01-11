console.log("content.js");

const regex = ["http", "https"];

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);

  let element = "iframe";
  let links = document.getElementsByTagName(element);
  console.log('getElementsByTagName("' + element + '")');
  for (let i = 0, max = links.length; i < max; i++) {
    console.log(links[i].href);
  }

  let ni = document.createNodeIterator(
    document.documentElement,
    NodeFilter.SHOW_ELEMENT
  );

  let currentNode;
  const nodes = new Set();
  const iframes = new Set();
  while ((currentNode = ni.nextNode())) {
    if (currentNode.nodeName === "IFRAME") {
      iframes.add(currentNode);
    }
    nodes.add(currentNode.nodeName);
  }
  console.log(nodes);
  console.log("iframes " + iframes.size);
});
