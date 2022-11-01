var menuItem = {
  id: "Search",
  title: "Search on MDN",
  contexts: ["selection"],
};

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

chrome.contextMenus.create(menuItem);
const url = "https://mdn.io/";
function goto(info) {
  console.log(info);
  window.open(url + info.selectionText, "_blank");
}

chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(goto);
