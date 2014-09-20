var $ = jQuery = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var loginTemplate = require('../../templates/login.hbs');

var LoginView = Backbone.View.extend(
    {
        el: '#my-app',
        initialize: function () {
            console.log('Yay main view!');
            $(this.el).html(loginTemplate);
        },
        render: function(){
            console.log("login-view.js render() called.");
        }
    }
);


module.exports = LoginView;
