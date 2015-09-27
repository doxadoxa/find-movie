import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams : ["query", "page"],
	page : 1
});
