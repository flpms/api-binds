var querystring = require('querystring');

var getTokens = function(item, http) {
    console.log('Get Token for API:', item.apiName);
    var token, headers;
    var postData = querystring.stringify(item.authenticateParams);

    if (item.authenticateRules.method.toLowerCase() === 'post'){
        headers = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Length" : postData.length
        };
    } else {
        headers = ''
    }

    var optionsRequest = item.authenticateRules;
    optionsRequest.headers = headers;

    var postReq = http.request(optionsRequest, function(resp){
        resp.setEncoding('utf8');

        resp.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    postReq.write(postData);
    postReq.end();
};

module.exports = getTokens;