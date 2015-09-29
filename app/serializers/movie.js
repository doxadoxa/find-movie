import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI : true,
	normalizeFindRecordResponse(store, clazz, payload) {
		var data = {};
		console.log(payload);
	    return this._super(store, clazz, {"movie" : payload });
	}
});