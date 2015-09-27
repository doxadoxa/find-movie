import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI : true,
	normalizeFindRecordResponse(store, clazz, payload) {
		var data = {};

		/*data = {
			"id" : payload.id,
			"title" : payload.title,
			"release_date" : payload.release_date,
			"poster_path" : payload.poster_path,
			"original_title" : payload.original_title,
			"overview" : payload.overview
		};*/

	    return this._super(store, clazz, {"movie" : payload });
	}
});