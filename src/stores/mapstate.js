import { writable } from 'svelte/store'

export const enums = {
    PARTY: 0,
    CAREER: 1,
    CASUAL: 2,
}

export const states = {
    MAP_MODE_PARTY: {
        tag: enums.PARTY,
        class: 'party'
    },
    MAP_MODE_CAREER: {
        tag: enums.CAREER,
        class: 'career'
    },
    MAP_MODE_CASUAL: {
        tag: enums.CASUAL,
        class: 'casual'
    },
}

export const mapmode = writable(states.MAP_MODE_PARTY);