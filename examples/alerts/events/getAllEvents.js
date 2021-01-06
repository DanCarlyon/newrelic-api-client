const newrelic = require('../../../');

require('../../configure');

let allEvents = newrelic.events.getAllEvents()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(allEvents);
