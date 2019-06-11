chrome.runtime.onMessage.addListener(
  function(request) {
    chrome.downloads.download({
      url: request.file,
      filename: request.name
    });
  }
)
