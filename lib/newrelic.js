module.exports = function () {
    return {
        users: require('./users/Users')(),
        alerts: require('./alerts/Alerts')(),
    };
};
