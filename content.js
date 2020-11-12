let downloadButtonHTML = '<a class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--border tw-core-button--padded tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative" href="#" id="downloadClipButton"><div class="tw-align-items-center tw-core-button-label tw-flex tw-flex-grow-0"><div class="tw-flex-grow-0">Download Clip</div></div></a>';

function setButtonClick() {
	document.querySelector('#downloadClipButton').onclick = () => {
		let fileName;
		if (document.querySelector('[data-a-target="stream-title"]')) {
			fileName = `TCD_${document.querySelector('[data-a-target="stream-title"]').title}`;
		} else if (document.querySelector('.tw-font-size-3.tw-line-height-heading')) {
			fileName = `TCD_${document.querySelector('.tw-font-size-3.tw-line-height-heading').innerHTML}`;
		}
		chrome.runtime.sendMessage({
			file: document.querySelector('video').src,
			name: fileName.replace(/ /g, '_').replace(/[^a-zA-Z0-9\\_]/g, '') + '.mp4'
		});
	}
}

let loadDownloadButton = setInterval(() => {
	if (document.querySelector('.player-controls__right-control-group')) {
		const addButton = () => {
			if (!document.querySelector('#downloadClipButton')) {
				document.querySelector('.player-controls__right-control-group').insertAdjacentHTML('afterbegin', downloadButtonHTML);
				setButtonClick();
			}
		};
		if (location.pathname.includes('/clip/')) {
			addButton();
		} else if (document.querySelector('.clips-sidebar.tw-flex.tw-flex-column')) {
			addButton();
		} else if (document.querySelector('#downloadClipButton')) {
			document.querySelector('#downloadClipButton').remove();
		}
	}
}, 1000);

// IF YOU SEE THIS, VI VON! ZULUL - Made by Ravenbtw.com
