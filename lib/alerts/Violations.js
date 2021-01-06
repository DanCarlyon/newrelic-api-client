const api = require('../NewRelicCore')();

function violations() {
    let url = '/alerts_violations';

    return {
        getAllViolations: function() {
            let path = url + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },
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
