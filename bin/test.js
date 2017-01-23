var sourceMap = require('source-map');

var rawSourceMap = require('../statics/main_4e322931.js.json');

var consumer = new sourceMap.SourceMapConsumer(rawSourceMap);

var numInfo = consumer.originalPositionFor({
    line: 17,
    column: 14797
})

console.log(numInfo);
