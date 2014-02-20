/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/details.html',
	'common'
], function ($, _, Backbone, detailsTemplate, Common) {
	'use strict';

	var TodoView = Backbone.View.extend({

		tagName:  '#todoapp',

		template: _.template(detailsTemplate),

		// The DOM events specific to an item.
		events: {
			'click #back':	'backToList'
		},

		// The TodoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function (options) {
            this.router = this.constructor["arguments"][0].router;
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		// Re-render the titles of the todo item.
		render: function () {
//			this.$el.html(this.template(this.model.toJSON()));
            if (this.model)
			    $(this.tagName).html(this.template(this.model.toJSON()));
			return this;
		},

        backToList: function () {
            console.log("navigating to todos list...");
            this.router.navigate("/", {trigger: true});
		}

	});

	return TodoView;
});
