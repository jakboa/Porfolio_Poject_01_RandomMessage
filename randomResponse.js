const stopMes = [" is cool."," is fancy."," is smart."," is badass."," is tha bomb."," is kay."," is mid."];

let why = "Sekiro"; 

function naem(rando,ending) {
    return `${rando}${ending}`;
};

console.log(naem(why,stopMes[Math.floor(Math.random()*stopMes.length)]));




