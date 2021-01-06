const newrelic = require('../../../');

require('../../configure');

const getIncidentById = newrelic.incidents.getIncidentById(143443070)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getIncidentById);
