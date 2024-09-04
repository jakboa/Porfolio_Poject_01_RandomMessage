const justCheck = 0;

const startMessage = ["Its looking like ","It all began ","Then there was ","Suprisingly it was ","Nobody saw that it was "];
let testVar = "Ello!";

const testsomething = (starter, stopper) => {
    if (1+ 2 === 4) {
        return "The world is ending";
    } else {return starter + stopper}
}

console.log(testsomething(startMessage[Math.floor(Math.random()*startMessage.length)],testVar))



let more = 65;
let texter = "Hello"


for (let i = 0; i < more ;i++) {
    texter = texter + "o";
}

console.log(texter)

