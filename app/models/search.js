import DS from 'ember-data';

export default DS.Model.extend({
	title : DS.attr("string"),
	release_date : DS.attr("date"),
	poster_path : DS.attr("string"),
	original_title : DS.attr("string"),
	overview : DS.attr("string"),
	//genre_ids : DS.hasMany("genre", { async: true })
});