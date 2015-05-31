var timer = require('timers');

var cacheList = {
    objs : [],
    getCached : function(apiName) {
        var data;

        for (var i = 0; i <  this.objs.length; i++) {
            var cachedData = this.objs[i];
            if (cachedData && cachedData.name === apiName.toLowerCase) {
                data = cachedData;
            }
        };

        return data;
    },
    setCache : function(apiObj) {
        this.objs.push(apiObj);
    },
    setCacheTimer : function(key, time) {

    }
};
