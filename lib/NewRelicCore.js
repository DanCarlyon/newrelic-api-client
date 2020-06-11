const fetch = require("node-fetch");

function NewRelic() {
    let api_key = "API_KEY_HERE";
    let basePath = "https://api.newrelic.com/v2";

    return {
        request: function (endpoint, options) {
            let url = basePath + endpoint;

            let headers = {
                'X-Api-Key': api_key,
                'Content-type': 'application/json'
            };

            let config = {
                ...options,
                headers: {...headers}
            };

            return fetch(url, config).then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw new Error(r);
            });
        }
    }
}

module.exports = NewRelic;
