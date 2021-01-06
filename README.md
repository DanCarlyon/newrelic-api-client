# NewRelic NodeJS SDK

I wanted to access some things in the new relic api but struggled to find an up to date/working package
And thus, newrelic-nodejs-sdk is born!


## Aim and Scope

NewRelic NodeJS SDK aims to access the NewRelic Web API through HTTP calls from Node.js applications.

NewRelic NodeJS SDK covers:

* Users API
* Alert Policies API
* Alert Notifications API
* Alert Conditions API
* Incidents API
* Events API
* Violations API

## Installation
Node.js version >=0.6.x is required.

`npm install newrelic-nodejs-sdk`

## Getting Started

```js
var newrelic = require('newrelic-nodejs-sdk');


newrelic.configure({
    'api_key': 'your_api_key'
});
```

```js
let getAllUsers = newrelic.users.getAllUsers()
    .then(data => console.log(data))
    .catch(err => console.error(JSON.stringify(err)));

console.log(getAllUsers);
```
## Examples

More samples can be found under `/examples` directory
