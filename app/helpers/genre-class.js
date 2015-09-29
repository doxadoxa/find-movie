export default Ember.Helper.helper(function( genres ) {
  var genreString = "";
  genres[0].forEach(function(item,index){
  	genreString += " genre-" + item;
  });

  return genreString;
});
