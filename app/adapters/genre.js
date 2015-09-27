import DS from 'ember-data';
import Ember from 'ember';
import Genre from 'find-movie/models/genre';

export default DS.Adapter.extend({
	genreData : null,
	loadData : function( callback ) {
		if( this.genreData == null ) {
			Ember.$.get(
					'http://api.themoviedb.org/3/genre/movie/list', 
					{
						api_key : "281ba0bb74e6fe002b3d3e5687f51e5a",
						language : "ru"
					},
					function( result ) {
						var genres = {};

						for( var i = 0; i < result['genres'].length; ++i ) {
							genres[ result['genres'][i]['id'] ] = result['genres'][i];
						}

						this.genreData = genres;
						//console.log( genres );
						return callback( this.genreData );
					}
				)
		} else {
			return callback( this.genreData );
		}
	},
	findRecord : function( store, type, id, snapshot ) {
		return this.loadData(function( genres ){
			id = id.split(',')[0];

			var genre = { "genre" : genres[id] };
			return genre;
		})
	},
	createRecord : function() {
		return false;
	},
	updateRecord : function() {
		return false;
	},
	deleteRecord : function() {
		return false;
	},
	findAll : function() {
		return false;
	},
	query : function() {
		return false;
	}
})
