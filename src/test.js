import {MockedMegaverseApi} from "./megaverseApi/mockedMegaverseApi/mockedMegaverseApi";
import {MegaverseChallenge} from "./megaverseChallenge";

let api
let challenge


describe('MegaverseChallenge', () => {

    beforeEach(() => {
        api = new MockedMegaverseApi('a candidate id')
        challenge = new MegaverseChallenge(api)
    })

    test('#passes the goal returns true when executing the current challenge', async () => {
        let map = (await api.getMap()).content

        // Double checks the state not passes the goal and not passes it in the right way (all null values)
        expect(await challenge.passesGoal()).toEqual(false)
        expect(map.every(row => row.every(value => value === null))).toEqual(true)

        await challenge.executeCurrentGoal()

        expect(await challenge.passesGoal()).toEqual(true)
    })

})
