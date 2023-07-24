const changeBgColor = () => {
	let message = document.getElementById('messageBox');
	let output = document.getElementById('output');
	let messageSuccess = document.getElementById('messageSuccess');
	if (message.value == "")
		messageSuccess.innerHTML = "Please Enter a message first.";
		else
		messageSuccess.innerHTML = "";
		output.innerHTML = message.value;
}