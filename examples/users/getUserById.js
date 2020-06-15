const newrelic = require('../../');
require('../configure');

const getUserById = newrelic.users.getById('1668661')
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getUserById);
