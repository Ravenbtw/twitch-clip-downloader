if (!document.querySelector('.ravenbtwDiv')) {
    let ravenbtwDiv = document.createElement('div');
    ravenbtwDiv.classList.add('ravenbtwDiv');
    document.body.appendChild(ravenbtwDiv);
    let ravenbtwBadges = [];
    fetch('https://ravenbtw.com/api/subscribers')
    .then(data => data.json())
    .then(json => {
        console.log('Loaded Ravenbtw subscribers.');
        const subStylesheet = document.createElement('style');
        document.head.appendChild(subStylesheet);
        const subSheet = subStylesheet.sheet;
        json.forEach(subscriber => {
            if (subscriber.glow) subSheet.insertRule(`[data-a-user="${subscriber.name}"], [data-user="${subscriber.name}"] .chat-author__display-name {text-shadow: 0 0 5px}`);
            if (subscriber.badge) ravenbtwBadges.push(subscriber.name);
        });
        let chatDiv;
        let chatObserver = new MutationObserver(mutations => {
            for (mutation in mutations) {
                if (mutations[mutation].addedNodes.length) {
                    let username;
                    if (mutations[mutation].addedNodes[0].querySelector('[data-a-user]')) {
                        username = mutations[mutation].addedNodes[0].querySelector('[data-a-user]').dataset.aUser;
                    } else {
                        username = mutations[mutation].addedNodes[0].dataset.user;
                    }
                    if (ravenbtwBadges.includes(username)) {
                        mutations[mutation].addedNodes[0].querySelector('.chat-line__username').insertAdjacentHTML('beforebegin', '<a href="https://ravenbtw.com/#subscriberBadge" target="_blank"><img src="https://ravenbtw.com/img/ravenbtw_badge_18.png" class="chat-badge"></a>');
                    }
                }
            }
        });
        setInterval(() => {
            let currentChatDiv = document.querySelector('.chat-scrollable-area__message-container');
            if (currentChatDiv && chatDiv !== currentChatDiv) {
                chatDiv = document.querySelector('.chat-scrollable-area__message-container');
                chatObserver.disconnect();
                chatObserver.observe(chatDiv, {
                    childList: true
                });
            };
        }, 1000);
    });
}