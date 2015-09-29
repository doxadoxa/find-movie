import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		var isLoadingStart = false;
		var controller = this.get('controller');
		if ( controller.get('total_pages') > 1 ) {
			$(window).on('scroll', function() {
				if ( !isLoadingStart && $(".load-more-btn").length > 0 && ( $(window).scrollTop() + $(window).height() > $(".load-more-btn").offset().top ) ) {
					controller.set('loadingMore', true);
				}
			})
		}
	}
});
