define(['backbone'], function(Backbone){

	return Backbone.Model.extend({
		idAttribute: '_id',
		url: '/comments'
	})

})