//to follow all
(function () {
	$('.js-follow-btn.follow-button.btn').each(function () {
		$(this).click();
	});
})();

//to add x users
(function (scrollTimes) {
	var scrolledCounter = 0;
	for (var i = 0; i < scrollTimes; i++) {
		setTimeout(function () {
			$('html, body').animate({ scrollTop: $(document).height() }, '50');
			scrolledCounter++;
		}, i * 2000);
	}

	var id = setInterval(function() {
		if (scrolledCounter == scrollTimes) {
			clearInterval(id);
			$('.js-follow-btn.follow-button.btn').each(function (idx) {
				if (idx < 500) {
					var elem = $(this);
					setTimeout(function () {
						elem.click()
					}, idx * 500);

				}
			});
		}
	}, 2000);


})(45);