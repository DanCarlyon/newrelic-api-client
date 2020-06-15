const fetch = require("node-fetch");
let configuration = require("./configure");

function NewRelic() {
    return {
        request: function (endpoint, options) {
            const url = configuration.default_options.host + endpoint;
            const headers = {
                'X-Api-Key': configuration.default_options.api_key,
                'Content-type': 'application/json'
            };
            const config = {
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
