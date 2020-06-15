const newrelic = require('../../');

require('../configure');

let getAllUsers = newrelic.users.getAllUsers()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getAllUsers);
