jQuery('#query').change(function(event) {
	var query = jQuery(this).val();

	var baseURL = 'http://search.twitter.com/search.json?';
	baseURL += 'lang=en&';
	jQuery.getJSON(
		baseURL + 'q=' + query + '&callback=?',
		function(data) {
			jQuery('.tweet').remove();
			var tweets = data.results;
			var content = jQuery('.article');
			for (var i = tweets.length - 1; i >= 0; i--) {
				var tweet = tweets[i];
				var tweetDiv = '<p class="tweet" id="tweet' + tweet.id_str + '">';
				tweetDiv += '<img src="' + tweet.profile_image_url + '">'
				tweetDiv += tweet.from_user + ': ' + tweet.text;
				tweetDiv += '</p>';
				jQuery(tweetDiv).appendTo(content);
			};
		}
	);
});
