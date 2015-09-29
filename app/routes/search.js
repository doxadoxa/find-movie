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
		},
		genre : {
			refreshModel : true,
			replace : true,
			as : 'genre'
		}
	},
	model: function( params ) {
		var search = this.store.query('search', {'query' : params.query, 'page' : params.page}).then(function( searches ){
			var filtered = Ember.A();

			if ( params.genre ) {		
				 searches.forEach(function(e,i) {
					if ( e.get('genre_ids').indexOf( parseInt( params.genre ) ) != -1 ) {
						filtered.pushObject(e);
					}
				})
			} else {
				filtered = searches;
			}
			
			return filtered;
		})
		var data =  Ember.RSVP.hash({
			search : search,
		 	genre : this.store.findAll('genre')
		});

		return data;
	}, 
	setupController : function( controller, model ) {
		this._super.apply(this,arguments);
		controller.set('total_pages', this.store.metadataFor('search').total_pages );
	}
});
