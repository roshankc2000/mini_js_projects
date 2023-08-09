//Guess the number Game...

//Version 1.1
do {
    var computer = Math.floor(Math.random() * 3);
    var player = prompt("Enter 0:Rock, 1:Paper, 2:Scissors ?");

    switch (player) {
        case '0':
            if (computer == 0) {
                alert("It's draw.");
            } else if (computer == 1) {
                alert("Computer Won.");
            } else {
                alert("You Won.");
            }
            break;
        case '1':
            if (computer == 0) {
                alert("You Won.");
            } else if (computer == 1) {
                alert("It's draw.");
            } else {
                alert("Computer Won.");
            }
            break;
        case '2':
            if (computer == 0) {
                alert("Computer Won.");
            } else if (computer == 1) {
                alert("You Won.");
            } else {
                alert("It's draw.");
            }
            break;
        default:
            alert("Invalid Choice!");
            break;
    }
    var choice = confirm("Do you wish to continue the game ?");
} while (choice);


//Version 1.0

// do {
//     var computer = Math.floor(Math.random() * 3);
//     var player = prompt("Enter 0:Rock, 1:Paper, 2:Scissors ?");

//     if (player == '0') {
//         if (computer == 0) {
//             alert("It's draw.");
//         } else if (computer == 1) {
//             alert("Computer Won.");
//         } else {
//             alert("You Won.");
//         }

//     } else if (player == '1') {
//         if (computer == 0) {
//             alert("You Won.");
//         } else if (computer == 1) {
//             alert("It's draw.");
//         } else {
//             alert("Computer Won.");
//         }

//     } else {
//         if (computer == 0) {
//             alert("Computer Won.");
//         } else if (computer == 1) {
//             alert("You Won.");
//         } else {
//             alert("It's draw.");
//         }
//     }
//     var choice = parseInt(prompt("Enter 0 if you wish to continue the game."));
// } while (choice == 0);