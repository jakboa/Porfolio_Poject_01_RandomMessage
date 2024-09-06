
const phraseMethod = (partArray) => {
    return {
        partInfo : partArray,
        partLength : partArray.length,
        randomPart() {
            return this.partInfo[Math.floor(Math.random()*this.partLength)];
        },
        AddMore(textToAdd) {
            this.partInfo.push(textToAdd);
        }

    }
}

const combinedParts = [];


const startMessage2 = phraseMethod(["Everbody agrees that","Nobody thinks that","And thus, no one foresaw that",
    "Why is it that","Hopefully, nobody notices that","Dont you hate it that","They yelled that",
    "It was foretold that","Dont you love it that","You always say that"]);

const middleMessage2 = phraseMethod(["bears","turtles","pigeons","cats","dogs","elephants","tigers","rhinoceroses","whales","sharks"]);

const stopMessage2 = phraseMethod(["are cool.","are fancy.","are smart.","are badass.","are tha bomb.","are okay.",
    "are mid.","are the bestest.","are my favorite.","are right behind you."]);

combinedParts.push(startMessage2.randomPart())
combinedParts.push(middleMessage2.randomPart())
combinedParts.push(stopMessage2.randomPart())    

console.log(combinedParts.join(" "));

stopMessage2.AddMore("THIS IS TEST TEXT!");

console.log(stopMessage2.partInfo)


