const NewRelic = require('../../');

const getUserById = NewRelic.users.getById('1668661')
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(user);
