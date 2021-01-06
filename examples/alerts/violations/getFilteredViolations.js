const newrelic = require('../../../');

require('../../configure');

let options = {
    page: 1,
    start_date: '2021-01-05T10:29:00+00:00',
    end_date: '2021-01-06T15:29:00+00:00',
    only_open: true
};

let filteredResults = newrelic.violations.getFilteredViolations(options)
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));
