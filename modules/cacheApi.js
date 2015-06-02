var emmitter = require('events').EventEmitter;

var cacheList = {
    _objs : [],
    _timeouts : [],
    getCachedItem : function(apiName) {
        var data;
console.log('linha 8:', apiName);
        for (var i = 0; i <  this._objs.length; i++) {
            var cachedData = this._objs[i];
            if (cachedData && cachedData.name === apiName.toLowerCase) {
                data = cachedData;
            }
        };

        return data;
    },
    setCache : function(apiObj, time) {
        try {
            console.log('Linha 25', this);
            this._objs.push(apiObj);
            this._setCacheTimer(apiObj.apiName, time);
        } catch (e){
            console.log(new Error(e));
        }
    },
    _setCacheTimer : function(key, time) {
        var listObjs = this._objs;

        _timeouts[key] = setTimeout(function() {
            for (var i = 0; i < listObjs.length; i++) {
                if (listObjs[i].name === key) {
                    listObjs.token = '';
                    emitter.emit('clearTimer', key);
                }
            }
        }, time);

        emitter.addListener('clearTimer', function(key) {
            clearTimeout(_timeouts[key]);
        });
    }
};

module.exports = cacheList;