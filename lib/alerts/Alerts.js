const api = require('../api');

function alerts() {
    let url = '/users.json';

    return {
        getAllUsers: function () {
            let path = url;
            let config = {
                method: 'GET'
            };
            return api.newRelic.request(path, config);
        }
    };
}

module.exports = alerts;
