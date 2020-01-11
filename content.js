console.log("content.js");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);
  // let firstHref = $("a[href^='http']")
  //   .eq(0)
  //   .attr("href");
  // console.log(`first ref is ${firstHref}`);
  //
  // function printByTagName(element) {
  //   let links = document.getElementsByTagName(element);
  //   console.log('getElementsByTagName("' + element + '")');
  //   for (let i = 0, max = links.length; i < max; i++) {
  //     console.log(links[i].href);
  //   }
  // }
  //
  // function printByClassName(element) {
  //   let links = document.getElementsByClassName(element);
  //   console.log('getElementsByTagName("' + element + '")');
  //   for (let i = 0, max = links.length; i < max; i++) {
  //     console.log(links[i].href);
  //   }
  // }
  //
  // printByTagName("a");
  // printByClassName("video");
  //
  // let currentNode,
  //   ni = document.createNodeIterator(
  //     document.documentElement,
  //     NodeFilter.SHOW_ELEMENT
  //   );
  //
  // while ((currentNode = ni.nextNode())) {
  //   console.log(currentNode.nodeName);
  // }
  //
  // let srcNodeList = document.querySelectorAll("[src],[href]");
  // console.log("src and href");
  // for (let i = 0, max = srcNodeList.length; i < max; i++) {
  //   console.log(srcNodeList[i].href);
  // }
});
