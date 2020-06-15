const newrelic = require('../../../');

require('../../configure');

let options = {
    name: 'Test Name',
    type: 'email',
    configuration : {
        recipients: 'dan.carlyon+test@space48.com',
        include_json_attachment: true
    }
};

let createChannel = newrelic.notifications.createNotificationChannel(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(createChannel);
