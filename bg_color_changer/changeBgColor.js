// let color = prompt("Which background color do you want?");
// document.body.style.backgroundColor = color;
const colorSet = ['grey','Red', 'green', 'yellow', 'lightblue', 'orange', 'pink', 'purple', 'violey'];
let i = 0;
//sets default color as Grey
document.body.style.backgroundColor = colorSet[i];
//gives you array lenght
let length = colorSet.length;
//main function
const changeBgColor = () => {
    //circular queue logic emplemented
    i = (i + 1) % length;
    document.body.style.backgroundColor = colorSet[i];
}