const api = require('../NewRelicCore')();

function conditions() {
    // 905446
    let basePath = '/alerts_conditions';
    let policyPath = '/policies';

    return {
        createCondition: function(options) {
            let path = basePath + policyPath + options.identifier + '.json';
            let config = {
                method: 'POST',
                body: JSON.stringify({
                    condition: {
                        type: options.type,
                        name: options.name,
                        enabled: options.enabled,
                        entities: options.entities,
                        metric: options.metric,
                        gc_metric: options.gc_metric,
                        condition_scope: options.condition_scope,
                        violation_close_timer: options.violation_close_timer,
                        runbook_url: options.runbook_url,
                        terms: [
                            {
                                duration: options.terms.duration,
                                operator: options.terms.operator,
                                priority: options.terms.priority,
                                threshold: options.terms.threshold,
                                time_function: options.terms.time_function
                            }
                        ],
                        user_defined: {
                            metric: options.user_defined.metric,
                            value_function: options.user_defined.value_function
                        }
                    }
                })
            }
        },

        /**
         *
         * @param options
         * @returns {*}
         */
        getPolicyConditions: function(options) {
            let path = basePath + '.json?policy_id=' + options.identifier;
            let config =  {
                method: 'GET'
            };

            return api.request(path, config);
        }
    };
}

module.exports = conditions;
