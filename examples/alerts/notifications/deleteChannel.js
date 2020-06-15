const newrelic = require('../../../');

require('../../configure');

let options = {
    identifier: 3630283
};

let deleteChannel = newrelic.notifications.deleteChannel(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(deleteChannel);
