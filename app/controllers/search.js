import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams : ["query","genre"],
	page : 1,
	genre : null,
	loadingMore : false,
	total_pages : null,
	selectedGenre : null,

	watchSelectedGenre : function() {
		this.set('genre', this.selectedGenre.id);
	}.observes('selectedGenre'),

	autoLoadingMore : function( controller ) {
		if( this.loadingMore == true ) {
			this.send('loadMore')
		}
	}.observes('loadingMore'),

	hasMore : (function() {
    	return this.get('page') < this.get('total_pages');
	}).property('page', 'total_pages'),

	actions : {
		loadMore : function() {
			var _this = this;

			var query = {
	        	page: this.get('page') + 1,
	        	query : this.get('query')
	      	};

	      	this.set('loadingMore', true);

	      	this.get('store').query('search', query).then(function(data) {
	      		var filtered = Ember.A();

				if ( _this.get('genre') != null ) {		
					 data.forEach(function(e,i) {
						if ( e.get('genre_ids').indexOf( parseInt( params.genre ) ) != -1 ) {
							filtered.pushObject(e);
						}
					})
				} else {
					filtered = data;
				}
				
	      		_this.set('loadingMore', false);
	      		_this.get('model').search.get('content').pushObjects( filtered.get('content') );
	      		_this.incrementProperty('page');
	      		_this.set('total_pages', data.get('meta.total_pages'));

	      	}, function() {
	      		_this.set('loadingMore', false);
	      	})
		},
		showFilters : function() {
			Ember.$('.filters__body').slideToggle();
		}
	}
});
