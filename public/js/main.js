var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

// Bring in view
var BeerifyMainView = require('./views/beerify-main-view'),
    DrinkingNowView = require('./views/drinking-now-view'),
    FindBeerView = require('./views/find-beer-view'),
    BeerifyAboutView = require('./views/about-us-view'),
    LoginView = require('./views/login-view.js')

var Router = Backbone.Router.extend({
  routes: {
    '': 'main',
    'drinkingnow': 'drinkingnow',
    'findbeer': 'findbeer',
    'about' : 'about',
      'login': 'login'
  },
  main: function () {
    this.beerifyMainView = new BeerifyMainView();
    this.beerifyMainView.render();
  },
  drinkingnow: function () {
    this.drinkingNowView = new DrinkingNowView();
    this.drinkingNowView.render();    
  },
  findbeer: function () {
    this.findBeerView = new FindBeerView();
    this.findBeerView.render();    
  },
  about: function () {
    this.beerifyAboutView = new BeerifyAboutView();
    this.beerifyAboutView.render();    
  },
    login: function(){
        this.loginView = new LoginView();
        this.loginView.render();
    }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});