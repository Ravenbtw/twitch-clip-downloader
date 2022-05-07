let downloadButtonHTML =
  '<a class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--border tw-core-button--padded tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative" href="#" id="downloadClipButton"><div class="tw-align-items-center tw-core-button-label tw-flex tw-flex-grow-0"><div class="tw-flex-grow-0">Download Clip</div></div></a>';

const setButtonClick = () => {
  document.querySelector('#downloadClipButton').onclick = () => {
    chrome.runtime.sendMessage({
      file: document.querySelector('video').src,
      name: `TCD_${new Date().getTime()}.mp4`,
    });
  };
};

let loadDownloadButton = setInterval(() => {
  if (document.querySelector('.player-controls__right-control-group')) {
    const addButton = () => {
      if (!document.querySelector('#downloadClipButton')) {
        document
          .querySelector('.player-controls__right-control-group')
          .insertAdjacentHTML('afterbegin', downloadButtonHTML);
        setButtonClick();
      }
    };
    if (location.pathname.includes('/clip/')) {
      addButton();
    } else if (
      document.querySelector('[data-a-page-loaded-name="ClipsViewPage"]')
    ) {
      addButton();
    } else if (document.querySelector('#downloadClipButton')) {
      document.querySelector('#downloadClipButton').remove();
    }
  }
}, 1000);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({
    type: 'sendVideo',
    videoURL: document.querySelector('video').src,
  });

  return true;
});
