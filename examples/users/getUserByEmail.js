const newrelic = require('../../');
require('../configure');

const getUserById = newrelic.users.getByEmail('dan.carlyon@space48.com')
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getUserById);
