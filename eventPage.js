var menuItem = {
  id: "search123",
  title: "Search on MDN",
  contexts: ["selection"],
};

const url = "https://mdn.io/";
function goto(info) {
  console.log(info);
  window.open(url + info.selectionText, "_blank");
}

chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(goto);
