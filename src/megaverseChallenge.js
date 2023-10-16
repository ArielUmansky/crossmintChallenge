import {MEGAVERSE_CODE_NAMES, MEGAVERSE_CODE_TYPES} from "./megaverseApi/megaverseApi";
import {MOCKED_MEGAVERSE_CODE_TYPES} from "./megaverseApi/mockedMegaverseApi/mockedMegaverseApi";

export class MegaverseChallenge {

    constructor(megaverseApi) {
        this.megaverseApi = megaverseApi
    }

    async executeCurrentGoal() {
        const goal = await this.megaverseApi.getGoal()
        const createOperations = []

        let delay = 0

        goal.forEach((row, rowIndex) => {
            row.forEach(async (value, columnIndex) => {
                delay++

                //Thw following line is just a simple optimization
                if(value === MEGAVERSE_CODE_NAMES.SPACE) return

                // This delay mechanism is a workaround for the "too many request" 429 status errors thrown by the api
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
                //}, delay * 0)

            })
        })

        return Promise.all(createOperations)
    }

    // This method runs over mocked code values because I wasn't able to check the actual ones before finishing the challenge
    async passesGoal() {
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
    }



}
