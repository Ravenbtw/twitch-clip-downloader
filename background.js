chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({
      url: 'https://raven.fo/tcd-thanks',
      active: true
  });
});

chrome.runtime.onMessage.addListener((request) => {
    chrome.downloads.download({
      url: request.file,
      filename: request.name
    });
  }
);
