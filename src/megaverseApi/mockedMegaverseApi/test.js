import {MEGAVERSE_CODE_NAMES} from '../megaverseApi'
import {MockedMegaverseApi, MOCKED_MEGAVERSE_CODE_TYPES} from "./mockedMegaverseApi";

const api = new MockedMegaverseApi('a candidate id')

describe('Megaverse API', () => {

    const column = 4
    const row = 2

    describe('#getGoal', () => {

        test('returns the expected structure', async () => {
            const response = await api.getGoal()

            response.forEach((row) => {
                row.forEach(value => {
                    expect(Object.values(MEGAVERSE_CODE_NAMES).some(name => value.includes(name)))
                })
            })
        })

    })

    describe('#getMap', () => {

        test('returns the expected structure', async () => {
            const response = await api.getMap()
            expect(response).toHaveProperty('_id')
            expect(response).toHaveProperty('content')
        })

    })

    describe('#createPolyanet', () => {
        test('changes the value in the map', async () => {
            await api.deletePolyanet(row, column)
            let map = await api.getMap()
            expect(map.content[row][column]).toEqual(null)

            await api.createPolyanet(row, column)
            map = (await api.getMap()).content
            map.forEach((eachRow, rowIndex) => {
                eachRow.forEach((value, colIndex) => {
                    if(rowIndex === row && colIndex === column){
                        expect(map[rowIndex][colIndex]).toEqual({type: MOCKED_MEGAVERSE_CODE_TYPES.POLYANET})
                    } else {
                        expect(map[rowIndex][colIndex]).toEqual(null)
                    }
                })
            })
        })
    })

    describe('#deletePolyanet', () => {
        test('changes the value in the map', async () => {
            await api.createPolyanet(row, column)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MOCKED_MEGAVERSE_CODE_TYPES.POLYANET)

            await api.deletePolyanet(row, column)
            map = await api.getMap()
            expect(map.content[row][column]).toEqual(null)
        })
    })

    describe('#createSaloon', () => {
        const color = 'red'

        test('changes the value in the map', async () => {
            await api.createSaloon(row, column, color)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MOCKED_MEGAVERSE_CODE_TYPES.SALOON)
            expect(map.content[row][column]).toHaveProperty('color', color)
        })

    })

    describe('#createCometh', () => {
        const direction = 'left'

        test('changes the value in the map', async () => {
            await api.createCometh(row, column, direction)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MOCKED_MEGAVERSE_CODE_TYPES.COMETH)
            expect(map.content[row][column]).toHaveProperty('direction', direction)
        })

    })

    describe('#cleanMap', () => {

        test('sets all values in map to SPACE', async () => {
            await api.createPolyanet(row, column)
            let map = await api.getMap()
            expect(map.content[row][column]).toHaveProperty('type', MOCKED_MEGAVERSE_CODE_TYPES.POLYANET)

            await api.cleanMap()
            map = (await api.getMap())
            expect(map.content.every(row => row.every(col => col === null))).toBe(true)
        })

    })

})
