import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI : true,
	normalizeArrayResponse(store, clazz, payload) {
		//console.log(payload);
	    return this._super(store, clazz, {"searches" : payload['results'] });
	}
});