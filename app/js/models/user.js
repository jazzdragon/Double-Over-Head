define(['backbone'], function(Backbone){

	return Backbone.Model.extend({

		url: '/user',
		idAttribute: "_id",

		regex: {
		email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
		password: /^[\w\d!@#$%]{6,}$/,
		username: /^[\w\d_-]{3,15}$/
		},

		validate: function(attrs){

			if (attrs.hasOwnProperty('email') && !attrs.email.match(this.regex.email)) {
				return {field: 'email', msg: 'Please enter a valid email address'}
			}
			
			if (attrs.hasOwnProperty('password') && !attrs.password.match(this.regex.password)) {
				return {field: 'password', msg: 'Password must contain at least 6 letters, digits or special characters'}
			}

			if (attrs.hasOwnProperty('username') && !attrs.username.match(this.regex.username)) {
				return {field: 'username', msg: 'Invalid User Name'}
			}
		}

	})

})