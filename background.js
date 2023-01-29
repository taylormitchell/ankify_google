chrome.contextMenus.create({
  title: "Ankify",
  contexts: ["selection"],
  onclick: (info, tab) => {
    if (tab) {
      chrome.tabs.executeScript(tab.id, { file: "ankifySelection.js" });
    }
  },
});
