export default Ember.Helper.helper(function( releaseDate ) {
  return new Date( Date.parse(releaseDate) ).getFullYear();
});
