jQuery('#query').change(function(event) {
	var query = jQuery(this).val();

	var baseURL = 'http://search.twitter.com/search.json?';
	var baseURL = baseURL + 'lang=en&';
	jQuery.getJSON(
		baseURL + 'q=' + query + '&callback=?',
		function(data) {
			var tweets = data.results;
			var resultsList = jQuery('#results');
			for (var i = tweets.length - 1; i >= 0; i--) {
				var tweet = tweets[i];
				jQuery(
					'<li id="tweet' + tweet.id_str + '">' + tweet.from_user + ': ' + tweet.text + '</li>'
				).appendTo(resultsList);
			};
		}
	);
});
