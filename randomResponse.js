


const startMessage = ["Everbody agrees that","Nobody thinks that","And thus, no one foresaw that",
    "Why is it that","Hopefully, nobody notices that","Dont you hate it that","They yelled that",
    "It was foretold that","Dont you love it that","You always say that"];
const randomStartPart = startMessage[Math.floor(Math.random()*startMessage.length)];

const middleMessage = ["bears","turtles","pigeons","cats","dogs","elephants","tigers","rhinoceroses","whales","sharks"];
const randomMiddlePart = middleMessage[Math.floor(Math.random()*middleMessage.length)];

const stopMessage = ["are cool.","are fancy.","are smart.","are badass.","are tha bomb.","are okay.",
    "are mid.","are the bestest","are my favorite","are right behind you."];
const randomStopPart = stopMessage[Math.floor(Math.random()*stopMessage.length)];


const randomStringGenerator = (startPart, middlePart, stopPart) => `${startPart} ${middlePart} ${stopPart}`;


console.log(randomStringGenerator(randomStartPart, randomMiddlePart, randomStopPart));





