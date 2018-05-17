module.exports = (Franz) => {
    const getMessages = function getMessages() {
        console.log('Get messages');
        const $imgCounts = document.querySelectorAll('img.tab-red-dot');
        console.log('Img count', $imgCounts);
        if ($imgCounts.length > 0) {
            const $img = $imgCounts[0];
            const src = $img.getAttribute('src');
            console.log('Img src', src);
            if (src) {
                const regex = /message_notification_(.+).png$/g;
                const execResult = regex.exec(src);
                console.log('Img result', execResult);
                if (execResult.length > 0) {
                    let count = execResult[1];
                    if (count === 'more') {
                        count = 6;
                    }
                    // set Franz badge
                    Franz.setBadge(parseInt(count));
                }
            }
        }
    };

    Franz.loop(getMessages);
};
