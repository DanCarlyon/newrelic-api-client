const api = require('../NewRelicCore')();

function events() {
    let url = '/alerts_events';

    return {
        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/alerts_events.json' -H 'Api-Key:$API_KEY' -i
         * @returns {*}
         */
        getAllEvents: function() {
            let path = url + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },
    };
}

module.exports = events;
