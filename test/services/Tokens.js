var assert = require("assert");
var getTokens = require('../modules/getTokens.js');

//mock data
var data = {
        "name" : "apontador",
        "authenticateRules" : {
            "host" : "api.apontador.com.br",
            "path" : "/v2/oauth/token",
            "method" : "POST"
        },
        "authenticateParams" : {
            "client_id" : "monitoring-reviews",
            "client_secret" : "",
            "grant_type" : "client_credentials",
            "scope": "read"
        },
        "expirationTime" : ""
    };

describe('Test for Tokens', function() {
	it('Should return a Object for new Instance', function() {

	});
});