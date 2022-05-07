chrome.runtime.onMessage.addListener((request) => {
  chrome.downloads.download({
    url: request.file,
    filename: request.name,
  });

  return true;
});
