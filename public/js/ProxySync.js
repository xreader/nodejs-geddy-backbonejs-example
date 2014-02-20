/*
 * Include after Backbone.js to modify Backbone.sync()
 */
(function() {

    var proxiedSync = Backbone.sync;

    Backbone.sync = function(method, model, options) {
        options || (options = {});

        //Uses our methodUrl method to get the correct path for the request
        if (model.methodUrl) {
            options.url = model.methodUrl(method.toLowerCase());
        }

        return proxiedSync(method, model, options);
    };
})();