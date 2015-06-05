var Emitter = require('events').EventEmitter;

var CacheList = {
    _objs : [],
    _timeouts : {},
    getCachedItem : function(apiName) {
        var data;

        if(!apiName) {
            return;
        }

        for (var i = 0; i <  this._objs.length; i++) {
            var cachedData = this._objs[i];
            if (cachedData && cachedData.name === apiName.toLowerCase()) {
                data = cachedData;
                break;
            }
        };

        return data;
    },
    setCache : function(apiObj, time) {
        try {
            this._objs.push(apiObj);
            this._setCacheTimer(apiObj.apiName, time);
        } catch (e){
            console.log('Linha 28', new Error(e));
        }
    },
    _setCacheTimer : function(key, time) {
        var self = this;
        var listObjs = self._objs;
        var emitter = new Emitter();

        self._timeouts[key] = setTimeout(function() {
            for (var i = 0; i < listObjs.length; i++) {
                if (listObjs[i].name === key) {
                    listObjs.token = '';
                    emitter.emit('clearTimer', key);
                }
            }
        }, time);

        emitter.addListener('clearTimer', function(key) {
            clearTimeout(self._timeouts[key]);
        });
    }
};

module.exports = cacheList;