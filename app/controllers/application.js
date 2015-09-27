import Ember from 'ember';

export default Ember.Controller.extend({
	actions : {
		search : function( keywords ) {
			this.transitionToRoute('/search?query=' + keywords);
		}
	}
});