const newrelic = require('../../../');

require('../../configure');

let options = {
    identifier: 905222
};

let deletePolicy = newrelic.policy.deletePolicy(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(deletePolicy);
