const newrelic = require('../../../');

require('../../configure');

let options = {
    identifier: 905222,
    incident_preference: 'PER_POLICY',
    name: 'Update API Test'
};

let updatePolicy = newrelic.policy.updatePolicy(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(updatePolicy);
