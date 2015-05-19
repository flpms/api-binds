var querystring = require('querystring');
var Q = require('Q');

var getTokens = function(item, http, deferred) {
    console.log('Get Token for API:', item.apiName);

    var token, headers;
    var postData = querystring.stringify(item.authenticateParams);
    var optionsRequest = item.authenticateRules;
    optionsRequest.port = 80;

    if (item.authenticateRules.method.toLowerCase() === 'post'){
        headers = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Length" : Buffer.byteLength(postData)
        };
    } else {
        headers = ''
    }

    optionsRequest.headers = headers;

    var postRequest = Q.nfcall(http.request, [optionsRequest] );
console.log(postRequest);
    // var postRequest = http.request(optionsRequest, function(resp){
    //     resp.setEncoding('utf8');

    //     resp.on('data', function (chunk) {
    //         deferred.resolve();
    //         console.log('Response: ' + chunk);
    //     });
    // });

//console.log(deferred);

    postRequest.write(postData);
    postRequest.end();

    return deferred.promisse;
};

module.exports = getTokens;