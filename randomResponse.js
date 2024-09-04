const startMessage = [" A"," B","C"," D","E","F","G"];
const randomStartPart = startMessage[Math.floor(Math.random()*startMessage.length)];

const middleMessage = ["1","2","3","4","5","6","7"];
const randomMiddlePart = middleMessage[Math.floor(Math.random()*middleMessage.length)];

const stopMessage = ["is cool.","is fancy.","is smart.","is badass.","is tha bomb.","is kay.","is mid."];
const randomStopPart = stopMessage[Math.floor(Math.random()*stopMessage.length)];


const randomStringGenerator = (startPart, middlePart, stopPart) => `${startPart} ${middlePart} ${stopPart}`;


console.log(randomStringGenerator(randomStartPart, randomMiddlePart, randomStopPart));