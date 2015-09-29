import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
	host : "http://api.themoviedb.org",
	namespace : '3',
	pathForType: function(type) {
		return type + '/movie/list';
	},
	ajaxOptions: function(url, type, hash) {
		var key = 
		"281ba0bb74e6fe002b3d3e5687f51e5a";
		var lang = "ru";
		if ( hash === undefined ) {
			hash = {data: {api_key: key, language : lang}};
		} else {
			if(hash.data) {
                hash.data.api_key = key;
                hash.data.language = lang;
            } else {
                hash.data = {api_key: key, language: lang};
            }


            if ( hash.data.id !== undefined ) {
            	url = url + "/" + hash.data.id;
            	hash.data.id = null;
            }
		}


		
		return this._super(url, type, hash);
	},
/*	findAll: function(store, type, sinceToken) {
		return this._super(store,type,sinceToken);
	}*/
});
