$(function () {

	var move = 1;
	var play = true;

	$(".box .container .item").click(function () {
		if ($(this).text() == "" && play) {
			if ((move % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "black");
			}
			else {
				$(this).append("O");
				$(this).css('color', "black");
			}
			move++;
		}
	});
});