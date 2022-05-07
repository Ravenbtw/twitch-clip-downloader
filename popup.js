const downloadClip = document.querySelector('.download-clip');
const video = document.querySelector('video');
const fileName = document.querySelector('.file-name');

downloadClip.onclick = async () => {
  chrome.downloads.download({
    url: document.querySelector('video').src,
    filename: `TCD_${fileName.value || Date.now()}.mp4`,
  });
};

chrome.tabs.query(
  {
    currentWindow: true,
    active: true,
  },
  async (tabs) => {
    const { videoURL } = await chrome.tabs.sendMessage(tabs[0].id, {
      type: 'requestVideo',
    });

    video.src = videoURL;

    return true;
  }
);
