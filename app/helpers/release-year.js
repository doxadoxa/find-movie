export default Ember.Handlebars.registerBoundHelper('release-year', function( releaseDate ) {
  return new Date( Date.parse(releaseDate) ).getFullYear();
});
