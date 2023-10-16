import axios from 'axios'

export const CANDIDATE_ID = 'd0ba06cb-0c61-4c05-973b-4ae293a45e71'

export const MEGAVERSE_CODE_TYPES = {
    SPACE: -1,
    POLYANET: 0,
}

export const MEGAVERSE_CODE_NAMES = {
    SPACE: 'SPACE',
    POLYANET: 'POLYANET',
    COMETH: 'COMETH',
    SALOON: 'SOLOON',
}

export class MegaverseApi {

    HOST_URL = 'https://challenge.crossmint.io/api'

    candidateId = ''

    constructor(candidateId) {
        this.candidateId = candidateId
    }

    shouldGoSlow() {
        return true
    }

    getGoal() {
        return axios.get(`${this.HOST_URL}/map/${this.candidateId}/goal`)
            .then((response) => {
                if(response && response.data && response.data.goal) {
                    return response.data.goal
                } else {
                    throw new Error({...response, errorMessage: 'Unexpected response structure from Metaverse API while getting the goal'})
                }
            })
    }

    createPolyanet(row, column) {
        return axios.post(`${this.HOST_URL}/polyanets`, {row, column, candidateId: this.candidateId}, {})
    }

    createSaloon(row, column, color) {
        return axios.post(`${this.HOST_URL}/soloons`, {color, row, column, candidateId: this.candidateId}, {})
    }

    createCometh(row, column, direction) {
        return axios.post(`${this.HOST_URL}/comeths`, {direction, row, column, candidateId: this.candidateId}, {})
    }

    deletePolyanet(row, column) {
        return axios.delete(`${this.HOST_URL}/polyanets`, {data: {row, column, candidateId: this.candidateId}})
    }

    getMap() {
        return axios.get(`${this.HOST_URL}/map/${this.candidateId}`)
            .then((response) => {
                if(response && response.data && response.data.map) {
                    return response.data.map
                } else {
                    throw new Error({...response, errorMessage: 'Unexpected response structure from Metaverse API while getting the map'})
                }
            })
    }

    async cleanMap() {
        try {
            const map = (await this.getMap()).content
            return map.forEach((row, rowIndex) => {
                return row.forEach(async (col, colIndex) => {
                    await this.deletePolyanet(rowIndex, colIndex)
                })
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }

}
