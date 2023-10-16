import {CANDIDATE_ID, MEGAVERSE_CODE_TYPES, MEGAVERSE_CODE_NAMES, MegaverseApi} from './megaverseApi'

const api = new MegaverseApi(CANDIDATE_ID)

// Integration tests using the actual API. That's why all of them are ignored by default
xdescribe('Megaverse API', () => {

    xdescribe('#getGoal', () => {

        test('returns the expected structure', async () => {
            const response = await api.getGoal()
            console.log(response)

            response.forEach((row) => {
                row.forEach(value => {
                    expect(Object.values(MEGAVERSE_CODE_NAMES).some(name => value.includes(name)))
                })
            })
        })

    })

    xdescribe('#getMap', () => {

        test('returns the expected structure', async () => {
            const response = await api.getMap()
            expect(response).toHaveProperty('_id')
            expect(response).toHaveProperty('content')
        })

    })

    xdescribe('#createPolyanet', () => {
        let column = 3
        let row = 3

        test('changes the value in the map', async () => {
            await api.deletePolyanet(row, column)
            map = await api.getMap()
            expect(map.content[row][column]).toEqual(null)

            await api.createPolyanet(row, column)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MEGAVERSE_CODE_TYPES.POLYANET)

        })

    })

    xdescribe('#deletePolyanet', () => {
        let column = 4
        let row = 2

        test('changes the value in the map', async () => {
            await api.createPolyanet(row, column)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MEGAVERSE_CODE_TYPES.POLYANET)

            await api.deletePolyanet(row, column)
            map = await api.getMap()
            expect(map.content[row][column]).toEqual(null)
        })

    })

    xdescribe('#deletePolyanet', () => {

        test('changes the value in the map', async () => {
            await api.createPolyanet(row, column)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MEGAVERSE_CODE_TYPES.POLYANET)

            await api.deletePolyanet(row, column)
            map = await api.getMap()
            expect(map.content[row][column]).toEqual(null)
        })

    })

    xdescribe('#cleanMap', () => {

        test('sets all values in map to SPACE', async () => {
            await api.cleanMap()
            const map = (await api.getMap())
            expect(map.every(row => row.every(col => col === null)))
        })

    })

    xdescribe('#executeCurrentGoal', () => {

        test('asks for the current goal, makes the necessary changes and checks it passes', async () => {
            //expect(await api.passesGoal1()).toEqual(false)
            await api.executeCurrentGoal()
            //expect(await api.passesGoal1()).toEqual(true)

        })
    }, 99999999999)



})
