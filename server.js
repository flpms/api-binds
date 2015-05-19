var http = require('http');
var cacheManager = require('cache-manager');
var Q = require('q');
var getApiTokens = require('./modules/getTokens.js');
var apiList = require('./data/api-list.json');

http.createServer(function (req, res) {
    console.log('Request Start');
    var promissesListResult  = [] ;

    apiList.forEach(function(item) {
        var deferred = Q.defer();

        var result = getApiTokens(item, http, deferred);

        console.log(result);
    });

    console.log('Request End');
}).listen(1337, '127.0.0.1');


process.on('uncaughtException', function (err) {
    console.log(err);
}); 

console.log('Server running at http://127.0.0.1:1337/');