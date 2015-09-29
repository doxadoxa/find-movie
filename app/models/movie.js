import DS from 'ember-data';

export default DS.Model.extend({
	title : DS.attr("string"),
	release_date : DS.attr("date"),
	poster_path : DS.attr("string"),
	original_title : DS.attr("string"),
	overview : DS.attr("string"),
	imdb_id : DS.attr("string"),
	original_language : DS.attr("string"),
	genres : DS.attr(),
	production_countries : DS.attr(),
	vote_average : DS.attr("string")
});