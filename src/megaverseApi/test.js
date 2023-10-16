import {CANDIDATE_ID, MEGAVERSE_CODE_TYPES, MEGAVERSE_CODE_NAMES, MegaverseApi} from './megaverseApi'

const api = new MegaverseApi(CANDIDATE_ID)

// Integration tests using the actual API. That's why all of them are ignored by default
xdescribe('Megaverse API', () => {

    const column = 3
    const row = 3

    xdescribe('#getGoal', () => {

        test('returns the expected structure', async () => {
            const response = await api.getGoal()

            response.forEach((eachRow) => {
                eachRow.forEach(value => {
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
            let map = (await api.getMap()).content
            expect(map[row][column]).toHaveProperty('type', MEGAVERSE_CODE_TYPES.POLYANET)

            await api.deletePolyanet(row, column)
            map = (await api.getMap()).content
            expect(map[row][column]).toEqual(null)
        })

    })

})
