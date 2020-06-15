const api = require('../NewRelicCore')();

function notifications() {
    let url = '/alerts_channels';

    return {
        getAllChannels: function() {
            let path = url + '.json';
            let config = {
                method: 'GET'
            };

            return api.request(path, config);
        },

        createNotificationChannel: function() {
            let path = url + '.json';
            let config = {
                method: 'POST',
                body: JSON.stringify({
                    channel: {
                        name: "Test Channel",
                        type: "email",
                        configuration: {
                            "recipients" : "dan.carlyon+test@space48.com",
                            "include_json_attachment" : true
                        }
                    }
                })
            };

            return api.request(path, config);
        },

        deleteChannel: function(options) {
            let path = url + '/' + options.identifier + '.json';
            let config = {
                method: 'DELETE',
            };

            return api.request(path, config);
        }
    };
}

module.exports = notifications;
