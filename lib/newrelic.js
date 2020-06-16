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
        policy: require('./alerts/Policies')(),
        notifications: require('./alerts/Notifications')(),
        conditions: require('./alerts/Conditions')(),
    };
};
