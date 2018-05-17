module.exports = (Franz) => {
    const getMessages = function getMessages() {
        let count = 0;
        const $imgCounts = document.querySelectorAll('img.tab-red-dot');
        if ($imgCounts.length > 0) {
            const $img = $imgCounts[0];
            const src = $img.getAttribute('src');
            if (src) {
                const regex = /message_notification_(.+).png$/g;
                const execResult = regex.exec(src);
                if (execResult.length > 0) {
                    count = execResult[1];
                    if (count === 'more') {
                        count = 6;
                    }
                }
            }
        }
        // set Franz badge
        Franz.setBadge(parseInt(count));
    };

    Franz.loop(getMessages);
};
