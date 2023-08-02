let imgArray = ['1', '2', '3'];
let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
let counter = 0;
left.addEventListener('click', () => {
	if (counter == 0)
		counter = 3;
	counter = Math.abs((counter - 1)) % 3;
	slider.style.background = `url('images/${imgArray[counter]}.jpg')  center/cover no-repeat`;
})
right.addEventListener('click', () => {
	counter = (counter + 1) % 3;
	slider.style.background = `url('images/${imgArray[counter]}.jpg')  center/cover no-repeat`;
})