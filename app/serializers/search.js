import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI : true,
	extractMeta: function(store, type, payload) {
	    if (payload && payload.total_pages) {
	    	var temp =  { "total_pages": payload.total_pages };
	    	delete payload.total_pages;
	    	return temp; 
	    }
	},
	normalizeArrayResponse: function(store, clazz, payload) {
	    return this._super(store, clazz, {
	    	"searches" : payload['results'],
	    	"total_pages" : payload['total_pages']
	    });
	}
});
