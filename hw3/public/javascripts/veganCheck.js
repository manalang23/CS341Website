function myFunction(){
    var textarea = document.getElementById('notes');
	var textValue=textarea.value;

	if (textValue.indexOf('vegan')!=-1)
	{
		alert('Warning! Cheesecake contains milk.')
	}
};   