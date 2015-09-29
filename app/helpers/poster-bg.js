import Ember from 'ember';

export function posterBg(params) {
	if ( params[0] != null ) {
		return "background-image: url(http://image.tmdb.org/t/p/w500" + params[0] + ")";
	} else {
		return "background-image: url(http://amt-russia.ru/images/no-image.jpg);"
	}
}

export default Ember.Helper.helper(posterBg);
