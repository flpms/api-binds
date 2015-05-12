var http = require('http');
var cacheManager = require('cache-manager');
var Q = require('q');
var getApiTokens = require('./modules/getTokens.js');
var apiList = require('./data/api-list.json');

http.createServer(function (req, res) {
    console.log('Request Start');
    var result;

    apiList.forEach(function(item) {
        item.token = getApiTokens(item, http);
    });
    

    console.log('Request End');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');