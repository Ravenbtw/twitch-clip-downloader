let downloadButtonHTML = '<a class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--border tw-core-button--padded tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative" href="#" id="downloadClipButton" style="margin-right: 10px"><div class="tw-align-items-center tw-core-button-label tw-flex tw-flex-grow-0"><div class="tw-flex-grow-0">Download Clip</div></div></a>';

function setButtonClick() {
	document.querySelector('#downloadClipButton').onclick = () => {
		let fileName;
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

let loadDownloadButton = setInterval(() => {
	if (!document.querySelector('#downloadClipButton')) {
		if (document.querySelector('.tw-align-items-center.tw-flex.tw-flex-row.tw-flex-shrink-0.tw-full-height.tw-pd-1.video-info-bar__action-container')) {
			document.querySelector('.tw-align-items-center.tw-flex.tw-flex-row.tw-flex-shrink-0.tw-full-height.tw-pd-1.video-info-bar__action-container').firstChild.insertAdjacentHTML('beforebegin', downloadButtonHTML);
			setButtonClick();
		} else if (document.querySelector('.clips-sidebar.tw-flex.tw-flex-column')) {
			document.querySelector('.clips-sidebar.tw-flex.tw-flex-column').children[2].firstChild.firstChild.firstChild.insertAdjacentHTML('beforebegin', downloadButtonHTML);
			document.querySelector('#downloadClipButton').parentNode.style.width = '100%';
			let floatInterval = setInterval(() => {
				console.log(document.querySelector('#downloadClipButton').parentNode.children[1].style);
				if (document.querySelector('#downloadClipButton').parentNode.children[1].style.float = 'right') {
					clearInterval(floatInterval);
					console.log('stopped interval');
				} else {
					document.querySelector('#downloadClipButton').parentNode.children[1].style.float = 'right';
					console.log('looking for folat');
				}
			}, 500);
			setButtonClick();
		}
	}
}, 1000);

// IF YOU SEE THIS, VI VON! ZULUL - Made by Ravenbtw.com
