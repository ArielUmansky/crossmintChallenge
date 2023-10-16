# Ariel Umansky
## Crossmint Challenge

### Getting started

This is a plain node project using babel to compile tests. This uses ecmascript 6 so a node version greater than 13 is required. 

A simple `npm install` + `npm test` should do it.

If for some reason a compilation is needed, just type:
`./node_modules/.bin/babel src --out-dir lib`

### Challenge Description

There are mainly two abstractions:
 - `MegaverseApi`: Which encapsules all the technical details necessary to deal with Challenge API
 - `MegaverseChallenge`: Which acts as a director of the challenge and execute the actions needed to pass it

On top of that, I **TDD'd** a **mocked version** of the `MegaveseApi`, that runs on memory, in order to be able to test the whole thing without actually pinging the real API. 

### Refactors

I considered a couple of refactors. For example, in the following snippet from the `MegaverseChallenge#executeCurrentGoal` method:
```
if(value === MEGAVERSE_CODE_NAMES.POLYANET) {
    createOperations.push(this.megaverseApi.createPolyanet(rowIndex, columnIndex))
}

const additionalParam = value.split('_')[0].toLowerCase()

if(value.includes(MEGAVERSE_CODE_NAMES.SALOON)) {
    createOperations.push(this.megaverseApi.createSaloon(rowIndex, columnIndex, additionalParam))
}

if(goal[rowIndex][columnIndex].includes(MEGAVERSE_CODE_NAMES.COMETH)) {
    createOperations.push(this.megaverseApi.createCometh(rowIndex, columnIndex, additionalParam))
}
``` 
in order to avoid the successive `if` (that could get cumbersome if there're more types of entities in the future), I could have delegated on specific classes for each type and have some sort of object composition in place. Those classes could also help with the condition in `MegaverseChallenge#passesGoal` method. However, I thought that this approach was a little over-engineered, and since **simplicity** was key, I left it as is. Also, for the size of the challenge, I think is more readable this way.

### Side notes

- I completed and validated the challenge while still implementing refactors, so I couldn't access the map API to figure out goal#2 response structure. I ended up assuming them. I commented accordingly in each place that happened.
- Integration tests are bypassed because the API stopped responding after completing the challenge.


And that's it. Feel free to ping me if you need further clarification!
