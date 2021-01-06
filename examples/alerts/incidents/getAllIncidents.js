const newrelic = require('../../../');

require('../../configure');

let allIncidents = newrelic.incidents.getAllIncidents()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(allIncidents);
