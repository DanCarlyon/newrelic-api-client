const NewRelic = require('../../NewRelicCore.js');

const api = new NewRelic({
    api_key: "API_KEY_HERE"
});

const allPolicies = api.getAllAlertPolicies().then(data => console.log(data)).catch(err => console.error(JSON.stringify(err)));
console.log(allPolicies);
