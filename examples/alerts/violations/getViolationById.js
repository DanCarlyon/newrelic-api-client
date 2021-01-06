const newrelic = require('../../../');

require('../../configure');

const getViolationById = newrelic.violations.getViolationById(1003381489)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getViolationById);
