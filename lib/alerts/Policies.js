const api = require('../NewRelicCore')();

function policies() {
    let url = '/alerts_policies';

    return {
        /**
         *
         * @returns {*}
         */
        getAllPolicies: function () {
            let path = url + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },

        /**
         *
         */
        createNewPolicy: function (options) {
            let path = url + '.json';
            let config = {
                method: 'POST',
                body: JSON.stringify({
                    policy: {
                        incident_preference: options.incident_preference,
                        name: options.name
                    }
                })
            };

            return api.request(path, config);
        },

        updatePolicy: function (options) {
            let path = url + '/' + options.identifier + '.json';
            let config = {
                method: 'PUT',
                body: JSON.stringify({
                    policy: {
                        incident_preference: options.incident_preference,
                        name: options.name
                    }
                })
            };

            return api.request(path, config);
        },

        deletePolicy: function (options) {
            let path = url + '/' + options.identifier + '.json';
            let config = {
                method: 'DELETE',
            };

            return api.request(path, config);
        }
    };
}

module.exports = policies;
