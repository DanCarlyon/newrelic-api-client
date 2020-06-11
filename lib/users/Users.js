const api = require('../NewRelicCore')();

function users() {
    let url = '/users.json';

    return {
        getAllUsers: function () {
            let path = url;
            let config = {
                method: 'GET'
            };
            return api.request(path, config);
        }
    };
}

module.exports = users;
