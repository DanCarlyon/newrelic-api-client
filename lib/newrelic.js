let configuration = require('./configure');

module.exports = function () {

    function configure(options) {
        configuration.default_options = {
            ...configuration.default_options,
            ...options
        };
    }

    return {
        configure: configure,
        configuration: configuration,
        users: require('./users/Users')(),
        alerts: require('./alerts/Alerts')(),
    };
};
