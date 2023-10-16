
// The rationale of this enum is that I wasn't able to quite catch the actual values until I passed the challenge
// Given that, I didn't want to mess around with the actual enum, so I created this one for testing purposes
export const MOCKED_MEGAVERSE_CODE_TYPES = {
    SPACE: -1,
    POLYANET: 0,
    COMETH: 1,
    SALOON: 2
}

const GOAL = [
    [
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE'
    ],
    [
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'RIGHT_COMETH', 'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE'
    ],
    [
        'SPACE',    'SPACE',     'POLYANET',
        'POLYANET', 'SPACE',     'SPACE',
        'SPACE',    'SPACE',     'SPACE',
        'SPACE',    'SPACE',     'SPACE',
        'SPACE',    'UP_COMETH', 'SPACE',
        'SPACE',    'SPACE',     'SPACE',
        'SPACE',    'SPACE',     'SPACE',
        'SPACE',    'SPACE',     'POLYANET',
        'POLYANET', 'SPACE',     'SPACE',
        'SPACE',    'SPACE',     'SPACE'
    ],
    [
        'SPACE',       'SPACE',    'POLYANET',
        'SPACE',       'POLYANET', 'POLYANET',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'WHITE_SOLOON',
        'POLYANET',    'POLYANET', 'SPACE',
        'POLYANET',    'SPACE',    'SPACE',
        'LEFT_COMETH', 'SPACE',    'SPACE'
    ],
    [
        'SPACE',    'SPACE',       'SPACE',
        'POLYANET', 'SPACE',       'BLUE_SOLOON',
        'POLYANET', 'POLYANET',    'PURPLE_SOLOON',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'LEFT_COMETH', 'SPACE',
        'SPACE',    'POLYANET',    'POLYANET',
        'SPACE',    'SPACE',       'POLYANET',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'RIGHT_COMETH'
    ],
    [
        'SPACE',        'SPACE',       'SPACE',
        'POLYANET',     'SPACE',       'SPACE',
        'WHITE_SOLOON', 'SPACE',       'POLYANET',
        'POLYANET',     'SPACE',       'SPACE',
        'DOWN_COMETH',  'SPACE',       'SPACE',
        'SPACE',        'SPACE',       'POLYANET',
        'POLYANET',     'BLUE_SOLOON', 'SPACE',
        'SPACE',        'SPACE',       'POLYANET',
        'SPACE',        'SPACE',       'SPACE',
        'SPACE',        'SPACE',       'SPACE'
    ],
    [
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'SPACE',    'SPACE'
    ],
    [
        'SPACE',      'SPACE',    'SPACE',
        'SPACE',      'POLYANET', 'SPACE',
        'SPACE',      'SPACE',    'SPACE',
        'SPACE',      'POLYANET', 'SPACE',
        'SPACE',      'SPACE',    'SPACE',
        'RED_SOLOON', 'POLYANET', 'SPACE',
        'SPACE',      'SPACE',    'SPACE',
        'SPACE',      'POLYANET', 'PURPLE_SOLOON',
        'SPACE',      'SPACE',    'SPACE',
        'SPACE',      'SPACE',    'SPACE'
    ],
    [
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'WHITE_SOLOON', 'POLYANET',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'BLUE_SOLOON',  'POLYANET',
        'SPACE',    'SPACE',        'SPACE',
        'POLYANET', 'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'POLYANET', 'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE'
    ],
    [
        'SPACE',         'SPACE', 'SPACE',
        'SPACE',         'SPACE', 'POLYANET',
        'PURPLE_SOLOON', 'SPACE', 'SPACE',
        'SPACE',         'SPACE', 'POLYANET',
        'RED_SOLOON',    'SPACE', 'SPACE',
        'POLYANET',      'SPACE', 'SPACE',
        'SPACE',         'SPACE', 'SPACE',
        'POLYANET',      'SPACE', 'SPACE',
        'SPACE',         'SPACE', 'SPACE',
        'UP_COMETH',     'SPACE', 'SPACE'
    ],
    [
        'SPACE',         'SPACE',    'UP_COMETH',
        'SPACE',         'SPACE',    'SPACE',
        'POLYANET',      'POLYANET', 'SPACE',
        'SPACE',         'SPACE',    'SPACE',
        'POLYANET',      'SPACE',    'POLYANET',
        'SPACE',         'SPACE',    'SPACE',
        'PURPLE_SOLOON', 'POLYANET', 'POLYANET',
        'SPACE',         'SPACE',    'SPACE',
        'SPACE',         'SPACE',    'SPACE',
        'SPACE',         'SPACE',    'SPACE'
    ],
    [
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'BLUE_SOLOON', 'POLYANET',
        'POLYANET', 'SPACE',       'SPACE',
        'POLYANET', 'SPACE',       'POLYANET',
        'SPACE',    'SPACE',       'POLYANET',
        'POLYANET', 'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE'
    ],
    [
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'POLYANET',    'POLYANET',
        'SPACE',    'POLYANET',    'SPACE',
        'POLYANET', 'POLYANET',    'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'SPACE',       'SPACE',
        'SPACE',    'LEFT_COMETH', 'SPACE',
        'SPACE',    'DOWN_COMETH', 'SPACE'
    ],
    [
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'RIGHT_COMETH', 'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'POLYANET', 'POLYANET',     'POLYANET',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'SPACE'
    ],
    [
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'WHITE_SOLOON', 'POLYANET', 'POLYANET',
        'SPACE',        'POLYANET', 'SPACE',
        'POLYANET',     'POLYANET', 'BLUE_SOLOON',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'SPACE',    'SPACE'
    ],
    [
        'SPACE',    'LEFT_COMETH',  'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'POLYANET',
        'POLYANET', 'SPACE',        'SPACE',
        'POLYANET', 'SPACE',        'POLYANET',
        'SPACE',    'SPACE',        'POLYANET',
        'POLYANET', 'WHITE_SOLOON', 'SPACE',
        'SPACE',    'SPACE',        'SPACE',
        'SPACE',    'SPACE',        'RIGHT_COMETH',
        'SPACE',    'SPACE',        'SPACE'
    ],
    [
        'SPACE',       'SPACE',    'SPACE',
        'DOWN_COMETH', 'SPACE',    'SPACE',
        'POLYANET',    'POLYANET', 'BLUE_SOLOON',
        'SPACE',       'SPACE',    'SPACE',
        'POLYANET',    'SPACE',    'POLYANET',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'POLYANET', 'POLYANET',
        'BLUE_SOLOON', 'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'SPACE'
    ],
    [
        'SPACE',     'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'POLYANET',
        'SPACE',     'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'POLYANET',
        'SPACE',     'SPACE', 'PURPLE_SOLOON',
        'POLYANET',  'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE',
        'POLYANET',  'SPACE', 'SPACE',
        'UP_COMETH', 'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE'
    ],
    [
        'SPACE',         'SPACE',      'SPACE',
        'SPACE',         'SPACE',      'POLYANET',
        'PURPLE_SOLOON', 'SPACE',      'SPACE',
        'SPACE',         'SPACE',      'POLYANET',
        'SPACE',         'SPACE',      'SPACE',
        'POLYANET',      'SPACE',      'SPACE',
        'SPACE',         'SPACE',      'SPACE',
        'POLYANET',      'RED_SOLOON', 'SPACE',
        'SPACE',         'SPACE',      'SPACE',
        'SPACE',         'SPACE',      'SPACE'
    ],
    [
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'WHITE_SOLOON',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'POLYANET', 'SPACE',
        'SPACE', 'SPACE',    'SPACE',
        'SPACE', 'SPACE',    'SPACE'
    ],
    [
        'RIGHT_COMETH', 'SPACE',    'SPACE',
        'SPACE',        'POLYANET', 'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'POLYANET', 'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'POLYANET', 'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'POLYANET', 'SPACE',
        'SPACE',        'SPACE',    'SPACE',
        'SPACE',        'SPACE',    'SPACE'
    ],
    [
        'SPACE',    'SPACE',         'SPACE',
        'POLYANET', 'SPACE',         'SPACE',
        'SPACE',    'SPACE',         'POLYANET',
        'POLYANET', 'RED_SOLOON',    'SPACE',
        'SPACE',    'SPACE',         'SPACE',
        'SPACE',    'WHITE_SOLOON',  'POLYANET',
        'POLYANET', 'PURPLE_SOLOON', 'SPACE',
        'SPACE',    'SPACE',         'POLYANET',
        'SPACE',    'SPACE',         'SPACE',
        'SPACE',    'SPACE',         'SPACE'
    ],
    [
        'SPACE',       'SPACE',    'SPACE',
        'POLYANET',    'SPACE',    'RED_SOLOON',
        'POLYANET',    'POLYANET', 'BLUE_SOLOON',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'SPACE',    'LEFT_COMETH',
        'SPACE',       'SPACE',    'SPACE',
        'SPACE',       'POLYANET', 'POLYANET',
        'SPACE',       'SPACE',    'POLYANET',
        'RED_SOLOON',  'SPACE',    'SPACE',
        'DOWN_COMETH', 'SPACE',    'SPACE'
    ],
    [
        'SPACE',    'SPACE',    'POLYANET',
        'SPACE',    'POLYANET', 'POLYANET',
        'SPACE',    'SPACE',    'SPACE',
        'SPACE',    'SPACE',    'SPACE',
        'SPACE',    'SPACE',    'SPACE',
        'SPACE',    'SPACE',    'SPACE',
        'SPACE',    'SPACE',    'SPACE',
        'POLYANET', 'POLYANET', 'SPACE',
        'POLYANET', 'SPACE',    'SPACE',
        'SPACE',    'SPACE',    'SPACE'
    ],
    [
        'SPACE',     'SPACE', 'POLYANET',
        'POLYANET',  'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE',
        'UP_COMETH', 'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'POLYANET',
        'POLYANET',  'SPACE', 'SPACE',
        'SPACE',     'SPACE', 'SPACE'
    ],
    [
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE'
    ],
    [
        'SPACE',       'SPACE', 'SPACE',
        'DOWN_COMETH', 'SPACE', 'SPACE',
        'SPACE',       'SPACE', 'SPACE',
        'SPACE',       'SPACE', 'SPACE',
        'SPACE',       'SPACE', 'SPACE',
        'DOWN_COMETH', 'SPACE', 'SPACE',
        'SPACE',       'SPACE', 'SPACE',
        'SPACE',       'SPACE', 'SPACE',
        'SPACE',       'SPACE', 'UP_COMETH',
        'SPACE',       'SPACE', 'SPACE'
    ],
    [
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'LEFT_COMETH',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE'
    ],
    [
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'RIGHT_COMETH', 'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'LEFT_COMETH',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE',
        'SPACE', 'SPACE',        'SPACE'
    ],
    [
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE', 'SPACE', 'SPACE',
        'SPACE', 'SPACE'
    ]
]

export class MockedMegaverseApi {

    candidateId = ''

    constructor(candidateId) {
        this.candidateId = candidateId
        this.map = this.initialMapValue()
    }

    initialMapValue() {
        return JSON.parse(JSON.stringify(Array(GOAL.length).fill(Array(GOAL.length).fill(null))))
    }

    shouldGoSlow() {
        return false
    }

    getGoal() {
        return Promise.resolve(GOAL)
    }

    getMap() {
        return Promise.resolve({_id: 'an id', content: this.map})
    }

    createPolyanet(row, column) {
        Promise.resolve(this.map[row][column] = {type: MOCKED_MEGAVERSE_CODE_TYPES.POLYANET})
    }

    createSaloon(row, column, color) {
        // Since I wasn't able to see the actual map structure before passing the challenge, I assume it was using anstructure like this one
        return Promise.resolve(this.map[row][column] = {type: MOCKED_MEGAVERSE_CODE_TYPES.SALOON, color: color})
    }

    createCometh(row, column, direction) {
        // Since I wasn't able to see the actual map structure before passing the challenge, I assume it was using anstructure like this one
        return Promise.resolve(this.map[row][column] = {type: MOCKED_MEGAVERSE_CODE_TYPES.COMETH, direction: direction})
    }

    deletePolyanet(row, column) {
        return Promise.resolve(this.map[row][column] = null)
    }

    async cleanMap() {
        return Promise.resolve(this.map = this.initialMapValue() )
    }
}
