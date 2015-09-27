import Ember from 'ember';

export default Ember.Route.extend({
	queryParams : {
		query : {
			refreshModel : true,
			replace : true,
			as : 'query'
		},
		page : {
			refreshModel : true,
			replace : false,
			as : 'page'
		}
	},
	model: function( params ) {
		
		return this.store.query('search', {'query' : params.query, 'page' : params.page});
		//return this.store.query('movie', {'query' : params.query});
	}, 
	loading : function() {
		displayLoadingSpinner();
		return true;
	},
	actions : {
		loadNext : function( params ) {
			return this.store.query('search', {'query' : params.query, 'page' : params.page});
		}
	}
});
