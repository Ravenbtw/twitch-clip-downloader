chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.msg == 'downloadclip') {
      chrome.downloads.download({
        url: request.clipurl,
        filename: request.clipname
      });
    }
  }
)
