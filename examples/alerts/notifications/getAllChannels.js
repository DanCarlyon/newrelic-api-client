const newrelic = require('../../../');

require('../../configure');

let allNotifications = newrelic.notifications.getAllChannels()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(allNotifications);
