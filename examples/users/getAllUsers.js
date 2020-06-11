const NewRelic = require('../../');

const getAllUsers = NewRelic.users.getAllUsers()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getAllUsers);
