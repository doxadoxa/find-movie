import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', {path:'/search'});
  this.route('movie', {path:'/movie/:movie_id'});
  this.route('genre');
});

export default Router;
