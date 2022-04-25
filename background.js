chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({
    url: 'https://www.raven.fo',
    active: true,
  });
});

chrome.runtime.onMessage.addListener((request) => {
  chrome.downloads.download({
    url: request.file,
    filename: request.name,
  });
});
