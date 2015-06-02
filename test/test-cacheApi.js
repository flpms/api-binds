var assert = require("assert");
var cache = require('../modules/cacheApi.js');
var data = require('../data/api-list')
//Mock para testes

describe('Test for cacheApi', function() {
	var cacheObject = cache;

	describe('setCache()', function() {
		it('Should return undefined when set a API object', function() {
			assert.equal(undefined, cacheObject.getCachedItem(apiObject, apiObject.token.expires_in));
		});
	});

	describe('getCachedItem()', function() {
		it('Should return undefined for a empty cache', function() {
			assert.equal(undefined, cacheObject.getCachedItem());
		});

		it('Should return ApiObject when pass a ApiName', function() {
			var returnedObject = cacheObject.getCachedItem(apiObject.apiName);
			assert.equal(apiObject, returnedObject);
		});
	});

})