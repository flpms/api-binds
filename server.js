var http = require('http');
//var cacheManager = require('cache-manager');
var Q = require('q');
var cache = require('./modules/cacheApi.js');
var getApiTokens = require('./services/Tokens.js');
var apiList = require('./data/api-list.json');
var env = '';
var promissesListResult  = [];

env.apiItens = [];

apiList.forEach(function(item) {
    var token = new Token(item, http);
    promissesListResult.push(token.post());
});


http.createServer(function (req, res) {
    console.log('Request Start');

    Q.all(promissesListResult).done(function(result) {
        cache.setCache();
        console.log('Retornou - - - \n', result);
    });

    console.log('Request End');
}).listen(1337, '127.0.0.1');


process.on('uncaughtException', function (err) {
    console.log(err);
}); 

console.log('Server running at http://127.0.0.1:1337/');