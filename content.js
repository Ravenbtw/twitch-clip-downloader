window.onload = function () {
	var loadButton = setInterval(function functionName() {
		if (document.getElementsByClassName('clips-chat-info tw-align-items-start tw-flex tw-flex-column tw-flex-grow-1 tw-flex-shrink-1 tw-justify-content-center tw-lg-mg-y-2 tw-mg-t-1')[0]) {
			var div = document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-end tw-pd-1')[0];
			var html = '<div id="downloadClipButton" class="tw-inline-block" style="margin-left:10px;position:absolute;left:0px;"><p style="cursor:pointer" class="tw-button"><span class="tw-button__text">Download Clip</span></p></div>';
			if (div) {
				if (!document.getElementById('downloadClipButton')) {
					div.style.position = "relative";
					div.insertAdjacentHTML('beforeend', html);
					document.getElementById('downloadClipButton').addEventListener('click', function() {
						chrome.runtime.sendMessage({
							file: document.getElementsByTagName('video')[0].src,
							name: document.getElementsByClassName('tw-font-size-3 tw-line-height-heading')[0].innerHTML.replace(/ /g, "_").replace(/[^a-zA-Z0-9\\_]/g, "") + ".mp4"
						})
					});
				}
			}
		} else if (document.getElementsByClassName('video-chat__message-list-wrapper')[0]) {
			var div = document.getElementsByClassName('tw-align-items-center tw-flex tw-flex-row tw-flex-shrink-0 tw-full-height tw-pd-1 video-info-bar__action-container')[0];
			var html = '<div id="downloadClipButton" class="tw-inline-block" style="margin-right:10px;"><p style="cursor:pointer" class="tw-button"><span class="tw-button__text">Download Clip</span></p></div>';
			if (div) {
				if (!document.getElementById('downloadClipButton')) {
					div.style.position = "relative";
					div.insertAdjacentHTML('afterbegin', html);
					document.getElementById('downloadClipButton').addEventListener('click', function() {
						chrome.runtime.sendMessage({
							file: document.getElementsByTagName('video')[0].src,
							name: document.getElementsByClassName('tw-font-size-4 tw-strong')[0].querySelector('span').innerHTML.replace(/ /g, "_").replace(/[^a-zA-Z0-9\\_]/g, "") + ".mp4"
						})
					});
				}
			}
		}
	},1000);
}

// IF YOU SEE THIS, VI VON! ZULUL - Made by Ravenbtw.com
