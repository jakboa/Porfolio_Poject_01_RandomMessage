const stopMes = [" is cool."," is fancy."," is smart."," is badass."," is tha bomb."," is kay."," is mid."];

let why = "Sekiro"; 

function naem(rando,ending) {
    return `${rando}${ending}`;
};

console.log(naem(why,stopMes[Math.floor(Math.random()*stopMes.length)]));

const justCheck = 0;

const startMessage = ["Its looking like ","It all began ","Then there was ","Suprisingly it was ","Nobody saw that it was "];
let testVar = "Ello!";

const testsomething = (starter, stopper) => {
    if (1+ 2 === 4) {
        return "The world is ending";
    } else {return starter + stopper}
}

console.log(testsomething(startMessage[Math.floor(Math.random()*startMessage.length)],testVar))
