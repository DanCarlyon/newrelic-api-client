const newrelic = require('../../../');

require('../../configure');

let allViolations = newrelic.violations.getAllViolations()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(allViolations);
