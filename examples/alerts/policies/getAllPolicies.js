const newrelic = require('../../../');

require('../../configure');

let allPolicies = newrelic.policy.getAllPolicies()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(allPolicies);
