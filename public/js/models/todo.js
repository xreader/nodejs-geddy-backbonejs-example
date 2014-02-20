/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
        urlRoot : '/todos',
        methodUrl: function(method) {
            if(method == "delete"){
                return this.urlRoot + "/" +this.attributes.id+".json";
            }
            else if(method == "update"){
                return this.urlRoot + "/" +this.attributes.id+".json";
            }
            else if(method == "read"){
                return this.urlRoot + "/" +this.attributes.id+".json";
            }
            else if(method == "create"){
                return this.urlRoot + ".json";
            }
            return false;
        },

		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});

	return Todo;
});
