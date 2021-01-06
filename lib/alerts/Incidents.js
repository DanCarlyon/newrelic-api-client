const api = require('../NewRelicCore')();

function incidents() {
    let url = '/alerts_incidents';

    return {
        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/alerts_incidents/alerts_incidents.json' -H 'Api-Key:$API_KEY' -i
         * @param id
         */
        getAllIncidents: function() {
            let path = url + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },

        /**
         * Example Curl
         * curl -X GET 'https://api.newrelic.com/v2/alerts_incidents/{id}.json' -H 'Api-Key:$API_KEY' -i
         * @param id
         */
        getIncidentById: function(id) {
            let path = url + '/' + id + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },

        /**
         * Example Curl
         * curl -X PUT 'https://api.newrelic.com/v2/alerts_incidents/{id}/acknowledge.json' -H 'Api-Key:$API_KEY' -i -H 'Content-Type: application/json'
         * @param id
         */
        acknowledgeIncident: function(id) {
            let path = url + '/' + id + '/acknowledge.json';
            let config = {
                method: 'PUT'
            };

            return api.request(path, config);
        },

        /**
         * Example Curl
         * curl -X PUT 'https://api.newrelic.com/v2/alerts_incidents/{id}/close.json' -H 'Api-Key:$API_KEY' -i -H 'Content-Type: application/json'
         * @param id
         */
        closeIncident: function(id) {
            let path = url + '/' + id + '/close.json';
            let config = {
                method: 'PUT'
            };

            return api.request(path, config);
        }
    };
}

module.exports = incidents;
