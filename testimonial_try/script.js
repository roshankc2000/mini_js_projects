let data = [
	{
		'image': 1,
		'naam': 'sulav jhaykni',
		'rating': `<span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,
		'description': 'Arey wha kya dami film thyo yrrr, full paisa wasul thiyo, double chasma lagako ni maja aaayo.'
	},
	{
		'image': 2,
		'naam': 'badri baniya',
		'rating': `<span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span>`,
		'description': 'great movie, it flet like falling from hevean.'
	},
	{
		'image': 3,
		'naam': 'roshan',
		'rating': `<span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,
		'description': 'zombie nai xa tara pani not a signle drop of blood in the multiversal movie, shit yrrr.'
	}
]

let image = document.getElementById('image');
let naam = document.getElementById('naam');
let rating = document.getElementById('rating');
let description = document.getElementById('description');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let counter = 0;
prev.addEventListener('click', () => {
	if (counter == 0)
		counter = 3;
	counter = (counter - 1) % 3;
	image.style.background = `url("images/${data[counter].image}.jpg") center/cover no-repeat`;
	naam.innerHTML = data[counter].naam;
	rating.innerHTML = data[counter].rating;
	description.innerHTML = data[counter].description;
})
next.addEventListener('click', () => {
	counter = (counter + 1) % 3;
	image.style.background = `url("images/${data[counter].image}.jpg") center/cover no-repeat`;
	naam.innerHTML = data[counter].naam;
	rating.innerHTML = data[counter].rating;
	description.innerHTML = data[counter].description;
})