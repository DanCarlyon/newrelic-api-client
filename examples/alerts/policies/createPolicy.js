const newrelic = require('../../../');

require('../../configure');

let options = {
    incident_preference: 'PER_POLICY',
    name: 'API Test'
};

let createPolicy = newrelic.policy.createNewPolicy(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(createPolicy);
