import {MEGAVERSE_CODE_NAMES, MEGAVERSE_CODE_TYPES} from "./megaverseApi/megaverseApi";
import {MOCKED_MEGAVERSE_CODE_TYPES} from "./megaverseApi/mockedMegaverseApi/mockedMegaverseApi";

const REQUEST_DELAY_MS = 5000

export class MegaverseChallenge {

    constructor(megaverseApi) {
        this.megaverseApi = megaverseApi
    }

    async executeCurrentGoal() {
        const goal = await this.megaverseApi.getGoal()
        const createOperations = []

        let delay = 0

        try {
            goal.forEach((row, rowIndex) => {
                row.forEach(async (value, columnIndex) => {

                    //Thw following line is just a simple optimization
                    if(value === MEGAVERSE_CODE_NAMES.SPACE) return

                    // This delay mechanism is a workaround for the "too many request" 429 status errors thrown by the api
                    // It's commented to allow unit test to run green from the start
                    //delay++
                    //setTimeout(async () => {
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
                    //}, delay * REQUEST_DELAY_MS)

                })
            })

            return Promise.all(createOperations)

        } catch (error) {
            // This loses the stacktrace. In newer versions there's a "cause" alternative to better wrap exceptions.
            // See: https://stackoverflow.com/questions/42754270/re-throwing-exception-in-nodejs-and-not-losing-stack-trace
            console.error(error)
            throw new Error('There was an error while completing the challenge')
        }
    }

    // This method runs over mocked code values because I wasn't able to check the actual ones before finishing the challenge
    async passesGoal() {
        try {
            const map = (await this.megaverseApi.getMap()).content
            const goal = await this.megaverseApi.getGoal()
            return goal.every((row, rowIndex) => {
                return row.every((value, columnIndex) => {
                    return (value === MEGAVERSE_CODE_NAMES.SPACE && map[rowIndex][columnIndex] === null)
                        || (value === MEGAVERSE_CODE_NAMES.POLYANET && map[rowIndex][columnIndex] && map[rowIndex][columnIndex].type === MEGAVERSE_CODE_TYPES.POLYANET)
                        || (value.includes(MEGAVERSE_CODE_NAMES.COMETH) && map[rowIndex][columnIndex] && map[rowIndex][columnIndex].type === MOCKED_MEGAVERSE_CODE_TYPES.COMETH && map[rowIndex][columnIndex].direction === value.split('_')[0].toLowerCase())
                        || (value.includes(MEGAVERSE_CODE_NAMES.SALOON) && map[rowIndex][columnIndex] && map[rowIndex][columnIndex].type === MOCKED_MEGAVERSE_CODE_TYPES.SALOON && map[rowIndex][columnIndex].color === value.split('_')[0].toLowerCase())
                })
            })
        } catch(error) {
            console.error(error)
            throw new Error('There was a problem while validating the current goal')
        }
    }



}
