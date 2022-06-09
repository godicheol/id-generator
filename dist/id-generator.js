(function() {
    'use strict';

    var exports = {};

    var charsets = [
        "0123456789",
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "-._~()'!*:@,;",
        "?/#+&="
    ];

    exports.generate = function(options) {
        var len = typeof(options.length) == "number" ? options.length : 6;
        var charset;
        var i;
        var str = "";
        
        if (typeof(options.charset) == "string") {
            charset = options.charset;
        } else if (
            typeof(options.charset) == "number" &&
            options.charset > -1 &&
            options.charset < charsets.length
        ) {
            charset = "";
            for (i = 0; i < options.charset+1; i++) {
                charset += charsets[i];
            }
        } else {
            charset = charsets[0] + charsets[1] + charsets[2];
        }

        for (i = 0; i < len; i++) {
            str += charset[Math.floor(Math.random() * charset.length)];
        }
        return str;
    }

    exports.uuidv4 = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    if (typeof(window.idGenerator) === "undefined") {
        window.idGenerator = exports;
    }
})();