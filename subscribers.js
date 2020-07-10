fetch('https://ravenbtw.com/api/subscribers')
.then(data => data.json())
.then(json => {
    const subStylesheet = document.createElement('style');
    document.head.appendChild(subStylesheet);
    const subSheet = subStylesheet.sheet;
    json.forEach(subscriber => {
        console.log(subscriber);
        subSheet.insertRule(`[data-a-user="${subscriber}"], [data-user="${subscriber}"] .chat-author__display-name {text-shadow: 0 0 5px}`);
    });
});