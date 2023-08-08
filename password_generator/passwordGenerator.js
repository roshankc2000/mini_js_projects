class genPass {
    constructor() {
        this.pass = "";
    }
    weakPass(len) {
        let alpha = "abcdefghijklmnopqrstuvwxyz";
        let i = 0;
        while (i < len) {
            this.pass += alpha[Math.floor(Math.random() * alpha.length)];
            i++;
        }
        return this.pass;
    }
    strongPass(len) {
        let alpha = "abcdefghijklmnopqrstuvwxyz";
        let num = "0123456789";
        let char = "!@#$%^&*()";
        let i = 0;
        while (i < len) {
            this.pass += alpha[Math.floor(Math.random() * alpha.length)];
            this.pass += num[Math.floor(Math.random() * num.length)];
            this.pass += char[Math.floor(Math.random() * char.length)];
            i += 3;
        }
        return this.pass.slice(0,len);
    }
    emojiPass(len) {
        let emoji = "😂🤣😓😥🥺🤩🥰☺️😄😃🎅🔔😁😎🥰😙🤗";
        let i = 0;
        while (i < len) {
            this.pass += emoji[Math.floor(Math.random() * emoji.length)];
            i++;
        }
        return this.pass;
    }
}

const generatePassword = () => {

    let length = parseInt(prompt("Enter length of password,must be longer than 3 :"));
    if (length <= 3)
        generatePassword();

    let ch = parseInt(prompt("Enter type of password,1:Weak 2:strong 3:emoji."));

    switch (ch) {
        case 1: {
            let myPass = new genPass();
            alert(myPass.weakPass(length));
            break;
        }
        case 2: {
            let myPass1 = new genPass();
            alert(myPass1.strongPass(length));
            break;
        }
        case 3: {
            let myPass2 = new genPass();
            alert(myPass2.emojiPass(length));
            break;
        }
        default:
            if (ch != 1 && ch != 2 && ch != 3) {
                alert("please enter valid choice,try again!");
                generatePassword();
            }
    }
}
generatePassword();
