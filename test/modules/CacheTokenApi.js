var assert = require("assert");
var cache = require('../modules/cacheTokenApi.js');
//Mock para testes
var data = {
    "name" : "teste",
    "authenticateRules" : {
        "host" : "api.com.br",
        "path" : "/v2/oauth/token",
        "method" : "POST"
    },
    "token" : {
        "expires_in" : 40000
    }
};

describe('Test for cacheApi', function() {
    var cacheObject = cache;

    describe('setCache()', function() {
        it('Should return undefined when set a API object', function() {
            assert.equal(undefined, cacheObject.setCache(data, data.token.expires_in));
        });
    });

    describe('getCachedItem()', function() {
        before(function() {
            cacheObject.setCache(data, data.token.expires_in); 
        });

        it('Should return undefined for a empty cache', function() {
            assert.equal(undefined, cacheObject.getCachedItem());
        });

        it('Should return Mock data when pass a ApiName', function() {
            var returnedObject = cacheObject.getCachedItem(data.name);
            assert.equal(data, returnedObject);
        });
    });

})