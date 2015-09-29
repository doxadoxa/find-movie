export default Ember.Helper.helper( function( params ) {
	return new Date( Date.parse(params[0]) ).toLocaleString(
		"ru", 
		{
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
});