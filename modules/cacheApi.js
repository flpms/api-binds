var emmitter = require('events').EventEmitter;

var cacheList = {
    _objs : [],
    _timeouts : [],
    getCached : function(apiName) {
        var data;

        for (var i = 0; i <  this._objs.length; i++) {
            var cachedData = this._objs[i];
            if (cachedData && cachedData.name === apiName.toLowerCase) {
                data = cachedData;
            }
        };

        return data;
    },
    setCache : function(apiObj, time) {
        this._objs.push(apiObj);
        this._setCacheTimer(apiObj.apiName, time);
    },
    _setCacheTimer : function(key, time) {
        var listObjs = this._objs;

        var _timeouts[''+key] = setTimeout(function() {
            for (var i = 0; i < listObjs.length; i++) {
                if (listObjs[i].name === key) {
                    listObjs.token = '';
                    emitter.emit('clearTimer', key);
                }
            }
        }, time);

        emitter.addListener('clearTimer', function(key) {
            clearTimeout(_timeouts[key]);
        };
    }
};