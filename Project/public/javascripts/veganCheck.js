//Aron Miguel Manalang
$(document).ready(function() {
	$('a').click(function() {
		var monthClicked = $(this).text();
		$('.dropbtn').html(monthClicked);
		//write code here
		$.post('http://localhost:3000/orders', function(JSONdata) {
			var actualData = JSON.parse(JSONdata);
			$('#amountOne').html(actualData.data[0].quantity + " " + actualData.data[0].topping);
			$('#amountTwo').html(actualData.data[1].quantity + " " + actualData.data[1].topping);
			$('#amountThree').html(actualData.data[2].quantity + " " + actualData.data[2].topping);
		});
	});
});

function myFunction(){
    var textarea = document.getElementById('notes');
	var textValue=textarea.value;

	if (textValue.indexOf('vegan')!=-1)
	{
		alert('Warning! Cheesecake contains milk.')
	}
};   

function orderFound() {

}