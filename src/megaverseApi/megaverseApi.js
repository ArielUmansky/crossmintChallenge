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

    getGoal() {
        return axios.get(`${this.HOST_URL}/map/${this.candidateId}/goal`)
            .then((response) => {
                if(response && response.data && response.data.goal) {
                    return response.data.goal
                } else {
                    return {...response, errorMessage: 'Unexpected response structure from Metaverse API'}
                }
            })
            .catch((error) => {
                return {...error, errorMessage: 'There was an error while requesting the goal from Metaverse API'}
            })
    }

    createPolyanet(row, column) {
        return axios.post(`${this.HOST_URL}/polyanets`, {row, column, candidateId: this.candidateId}, {})
            .then((response) => {
                if(response) {
                    return response
                } else {
                    return {...response, errorMessage: 'Unexpected response structure from Metaverse API'}
                }
            })
            .catch((error) => {
                return {...error, errorMessage: 'There was an error while setting a polyanet in Metaverse API'}
            })
    }

    createSaloon(row, column, color) {
        return axios.post(`${this.HOST_URL}/soloons`, {color, row, column, candidateId: this.candidateId}, {})
            .then((response) => {
                if(response) {
                    return response
                } else {
                    console.error()
                    return {...response, errorMessage: 'Unexpected response structure from Metaverse API'}
                }
            })
            .catch((error) => {
                return {...error, errorMessage: 'There was an error while setting a saloon in Metaverse API'}
            })
    }

    createCometh(row, column, direction) {
        return axios.post(`${this.HOST_URL}/comeths`, {direction, row, column, candidateId: this.candidateId}, {})
            .then((response) => {
                if(response) {
                    return response
                } else {
                    return {...response, errorMessage: 'Unexpected response structure from Metaverse API'}
                }
            })
            .catch((error) => {
                return {...error, errorMessage: 'There was an error while setting a cometh in Metaverse API'}
            })
    }

    deletePolyanet(row, column) {
        return axios.delete(`${this.HOST_URL}/polyanets`, {data: {row, column, candidateId: this.candidateId}})
            .then((response) => {
                if(response) {
                    return response
                } else {
                    return {...response, errorMessage: 'Unexpected response structure from Metaverse API'}
                }
            })
            .catch((error) => {
                return {...error, errorMessage: 'There was an error while deleting a polyanet in Metaverse API'}
            })
    }

    getMap() {
        return axios.get(`${this.HOST_URL}/map/${this.candidateId}`)
            .then((response) => {
                if(response && response.data && response.data.map) {
                    return response.data.map
                } else {
                    return {...response, errorMessage: 'Unexpected response structure from Metaverse API'}
                }
            })
            .catch((error) => {
                return {...error, errorMessage: 'There was an error while requesting the map from Metaverse API'}
            })
    }

    async cleanMap() {
        const map = (await this.getMap()).content
        return map.forEach((row, rowIndex) => {
            return row.forEach(async (col, colIndex) => {
                await this.deletePolyanet(rowIndex, colIndex)
            })
        })
    }



}
