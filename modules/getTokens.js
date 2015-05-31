var https = require('https');
var querystring = require('querystring');
var Q = require('q');

var getTokens = function(item, http) {
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

    if (optionsRequest.method.toLowerCase() === 'get')  {

        var tokenURL = optionsRequest.hostname + '?' + dataString;
        https.get(tokenURL, responseToken);
    } else {

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
    }

    return deferred.promise;
};

module.exports = getTokens;