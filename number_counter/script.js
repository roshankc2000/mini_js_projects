let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let message = document.getElementById('message');
increment.addEventListener('click', () => {
	let value = parseInt(message.innerText);
	value++;
	message.innerHTML = value;
})
decrement.addEventListener('click', () => {
	let value = parseInt(message.innerText);
	value--;
	message.innerHTML = value;
})