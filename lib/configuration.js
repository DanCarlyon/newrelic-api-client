let def_options = {
    host: 'https://api.newrelic.com/v2',
    api_key: 'api_key'
};

exports.default_options = def_options;

let configure = exports.configure = function configure(options) {
    if (options !== undefined && typeof options === 'object') {
        def_options = utils.merge(def_options, options);
    }
};
