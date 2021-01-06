const api = require('../NewRelicCore')();

function violations() {
    let url = '/alerts_violations';

    return {
        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/alerts_violations.json' -H 'Api-Key:$API_KEY' -i
         * @returns {*}
         */
        getAllViolations: function() {
            let path = url + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },
        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/alerts_violations.json?only_open=true' -H 'Api-Key:$API_KEY' -i
         *
         * Filtering options
         * - only_open
         * - start_date
         * - end_date
         * - page
         *
         * @param options
         * @returns {*}
         */
        getFilteredViolations: function(options) {
            let query = '?';
            if (options) {
                for (const [option, optionValue] of Object.entries(options)) {
                    query = query + `${option}=${optionValue}&`;
                }
            }

            let path = url + '.json' + query;
            let config = {
                method: 'GET',
            };

            return api.request(path, config);
        },
        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/alerts_incidents/{id}.json' -H 'Api-Key:$API_KEY' -i
         * @param id
         * @returns {*}
         */
        getViolationById: function(id) {
            let path = url + '/' + id + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        }
    };
}

module.exports = violations;
