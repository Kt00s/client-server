import 'core-js/es6';
// для поддержки Reflect Api
import 'core-js/es7/reflect';
// zone используется angular
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}