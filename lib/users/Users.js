const api = require('../NewRelicCore')();

function users() {
    let url = '/users.json';

    return {
        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/users.json' -H "X-Api-Key:API_KEY"
         */
        getAllUsers: function () {
            let path = url;
            let config = {
                method: 'GET'
            };
            return api.request(path, config);
        },

        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/users.json' -H "X-Api-Key:API_KEY" -d 'filter[ids]=1668661'
         * @param id
         */
        getById(id) {
            let path = "/users.json?filter[ids]=" + id;
            let config = {
                method: 'GET',
            };
            return api.request(path, config);
        }
    };
}

module.exports = users;
