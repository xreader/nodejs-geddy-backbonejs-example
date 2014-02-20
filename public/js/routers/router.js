/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/todos',
    'views/todos',
    'views/details',
    'common'
], function ($, _, Backbone, Todos, TodoView, DetailsView, Common, a, b, c, d) {
	'use strict';

	var TodoRouter = Backbone.Router.extend({
		routes: {
			'home': 'home',
			'test': 'test',
			'details/:id': 'details',
      '*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			Common.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of the Todo view items
			Todos.trigger('filter');
		},

        test: function() {
            console.log("on open test page:");
//            app.navigate("details/" + id, {trigger: true});
        },

        home: function() {
            console.log("on open test page:");
//            var details = new TodoView({router: this});
//            details.render();
            this.navigate("/");
        },

        details: function(id) {
            var self = this;
            console.log("on open details page:" + id);
//            this.loadModule("bundles/demo/main");
            if (Todos.length == 0) {
                this.listenTo(Todos, 'add', function () {
                    self.gotoDetails(id);
                });
            } else {
                self.gotoDetails(id);
            }
        },

        gotoDetails: function(id) {
            var todo = Todos.get(id);
            var details = new DetailsView({model:todo, router: this});
            details.render();
        }


	});

	return TodoRouter;
});
