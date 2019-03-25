document.onload = setTimeout(function() {

	var node1 = document.createElement('DIV');
	var node1attr1 = document.createAttribute('class');
	var node1attr2 = document.createAttribute('style');
	node1attr1.value = 'tw-inline-block';
	node1.setAttributeNode(node1attr1);
	node1.setAttributeNode(node1attr2);

	var node2 = document.createElement('P');
	var node2attr1 = document.createAttribute('style');
	var node2attr2 = document.createAttribute('class');
	node2attr1.value = 'cursor:pointer';
	node2attr2.value = 'tw-button';
	node2.setAttributeNode(node2attr1);
	node2.setAttributeNode(node2attr2);

	var node3 = document.createElement('SPAN');
	var node3attr1 = document.createAttribute('class');
	var node3attr2 = document.createAttribute('data-a-target');
	var node3attr3 = document.createAttribute('id');
	node3attr1.value = 'tw-button__text';
	node3attr2.value = 'tw-button-text';
	node3attr3.value = 'downloadclipbutton';
	node3.setAttributeNode(node3attr1);
	node3.setAttributeNode(node3attr2);
	node3.setAttributeNode(node3attr3);
	node3.innerHTML = 'Download Clip';

	node2.appendChild(node3);
	node1.appendChild(node2);

		var twitchclipdownloader_oldclippage = document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-end tw-pd-1')[0];

		var twitchclipdownloader_newclippage = document.getElementsByClassName('tw-align-items-center tw-flex tw-flex-row tw-flex-shrink-0 tw-full-height tw-pd-1 video-info-bar__action-container')[0];

		if (twitchclipdownloader_oldclippage) {

			var twitchclipdownloader_oldclippage_style = document.createAttribute('style');
			node1attr2.value = 'margin-left:10px;position:absolute;left:0px;';
			twitchclipdownloader_oldclippage_style.value = 'position:relative;';
			twitchclipdownloader_oldclippage.setAttributeNode(twitchclipdownloader_oldclippage_style);
			var twitchclipdownloader_insert = document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-end tw-pd-1')[0];
			twitchclipdownloader_insert.appendChild(node1);

			document.getElementById('downloadclipbutton').addEventListener('click',function() {
				var twitchclipdownloader_video = document.getElementsByTagName('video')[0].src;
				var twitchclipdownloader_title = "Downloaded_By_Ravenbtw's_Twitch_Clip_Downloader" + ".mp4";
				console.log(twitchclipdownloader_title);
				chrome.runtime.sendMessage({
					msg: 'downloadclip',
					clipname: twitchclipdownloader_title,
					clipurl: twitchclipdownloader_video
				});
			});

		} else if (twitchclipdownloader_newclippage) {

			var twitchclipdownloader_newclippage_style = document.createAttribute('style');
			node1attr2.value = 'margin-right:10px;';
			twitchclipdownloader_newclippage.setAttributeNode(twitchclipdownloader_newclippage_style);
			var twitchclipdownloader_insert = document.getElementsByClassName('tw-align-items-center tw-flex tw-flex-row tw-flex-shrink-0 tw-full-height tw-pd-1 video-info-bar__action-container')[0];
			twitchclipdownloader_insert.insertBefore(node1,twitchclipdownloader_newclippage.firstChild);

			document.getElementById('downloadclipbutton').addEventListener('click',function() {
				var twitchclipdownloader_video = document.getElementsByTagName('video')[0].src;
				var twitchclipdownloader_title = "Downloaded_By_Ravenbtw's_Twitch_Clip_Downloader" + ".mp4";
				console.log(twitchclipdownloader_title);
				chrome.runtime.sendMessage({
					msg: 'downloadclip',
					clipname: twitchclipdownloader_title,
					clipurl: twitchclipdownloader_video
				});
			});

		}


},4000)

// IF YOU SEE THIS, VI VON! ZULUL - Made by Ravenbtw.com
