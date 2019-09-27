var loadDownloadButton = setInterval(() => {
	if (!document.querySelector('#downloadClipButton')) {
		if (document.querySelector('[data-test-selector="clips-watch-full-button"]')) {
			document.querySelector('[data-test-selector="clips-watch-full-button"]').style.float = 'right';
			document.querySelector('[data-test-selector="clips-watch-full-button"]').insertAdjacentHTML('beforebegin','<a class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--border tw-core-button--padded tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative" href="#" id="downloadClipButton"><div class="tw-align-items-center tw-flex tw-flex-grow-0"><div class="tw-flex-grow-0">Download Clip</div></div></a>');
			if (document.querySelector('.tw-font-size-3.tw-line-height-heading')) {
				document.querySelector('#downloadClipButton').parentNode.style.width = '100%';
			}
			document.querySelector('#downloadClipButton').onclick = () => {
				var fileName;
				if (document.querySelector('[data-test-selector="title"]')) {
					fileName = document.querySelector('[data-test-selector="title"]').title;
				} else if (document.querySelector('.tw-font-size-3.tw-line-height-heading')) {
					fileName = document.querySelector('.tw-font-size-3.tw-line-height-heading').innerHTML;
				}
				chrome.runtime.sendMessage({
					file: document.querySelector('video').src,
					name: fileName.replace(/ /g, '_').replace(/[^a-zA-Z0-9\\_]/g, '') + '.mp4'
				});
			}
		}
	}
}, 1000);

// IF YOU SEE THIS, VI VON! ZULUL - Made by Ravenbtw.com
