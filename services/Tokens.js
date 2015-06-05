var https = require('https');
var querystring = require('querystring');
var Q = require('q');

var Token = function(item, http) {
    console.log('Get Token for API:', item.apiName);
    var token, headers, postRequest;
    var deferred = Q.defer();
    var dataString = querystring.stringify(item.authenticateParams);
    var optionsRequest = item.authenticateRules;

    if (optionsRequest.method.toLowerCase() === 'post') {
        headers = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Length" : Buffer.byteLength(dataString)
        };
    }

    optionsRequest.headers = headers;

    var get = function() {
        var tokenURL = this.optionsRequest.hostname + '?' + this.dataString;
        https.get(tokenURL, responseToken, function(res){
            res.on('data', function(item) {
                deferred.resolve(item);
            });
        }).on('error', function(e) {
             deferred.reject(new Error('Stack ' + e));
        });
        return deferred.promise
    };

    var post = function(){
        postRequest = https.request(optionsRequest, function(data) {
            data.setEncoding('utf8');

            data.on('data', function (chunk) {
                item.token = chunk;
                deferred.resolve(item);
            }).on('error', function(){
                deferred.reject(new Error('Stack ' + chunk));
            });
        });

        postRequest.write(dataString);
        process.nextTick(function(){ postRequest.end(); });
        return deferred.promise;
    };

    return this;
};

module.exports = Token;