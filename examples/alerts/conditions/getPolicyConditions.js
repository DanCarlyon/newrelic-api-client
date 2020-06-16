const newrelic = require('../../../');
require('../../configure');

let options = {
    identifier: 905446
};

const getAllPolicyConditions = newrelic.conditions.getPolicyConditions(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getAllPolicyConditions);
