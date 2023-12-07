import { Day } from "../day";

type state = 'start' | 'seed-to-soil' | 'soil-to-fertilizer' | 'fertilizer-to-water' | 'water-to-light' | 'light-to-temperature' | 'temperature-to-humidity' | 'humidity-to-location'

class Day5 extends Day {

    constructor(){
        super(5);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n')

        let state: state | undefined = undefined
        let seeds: number[] = []
        const map: Record<state, { min: number, max: number, to: number }[]> = {
            'start': [],
            'seed-to-soil': [],
            'soil-to-fertilizer': [],
            'fertilizer-to-water': [],
            'water-to-light': [],
            'light-to-temperature': [],
            'temperature-to-humidity': [],
            'humidity-to-location': []
        }

        for (const line of lines) {
            if (!line) continue;

            // Getting seeds
            if (state === undefined) {
                state = 'start'
                seeds = line.split(' ').slice(1).map((s) => parseInt(s))
                continue
            }

            // Getting state
            const match = line.match(/^(.*) map:/)
            if (match) {
                state = match[1] as typeof state
                continue
            }

            // Getting maps
            const [destination, source, range] = line.split(/[ ]+/).map((s) => parseInt(s))

            map[state].push({
                min: source,
                max: source + range,
                to: destination
            })
        }

        let lowestLocation = Number.MAX_VALUE
        const states = Object.keys(map).slice(1) as state[]

        for (const seed of seeds) {
            let val = seed
            for (const state of states) {
                const list = map[state]
                const conv = list.find((c) => c.min <= val && c.max >= val)

                if (conv) {
                    val = conv.to + (val - conv.min)
                }
            }

            lowestLocation = Math.min(lowestLocation, val)
        }

        return String(lowestLocation);
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n')

        let state: state | undefined = undefined
        let seeds: number[] = []
        const map: Record<state, { min: number, max: number, to_min: number, to_max: number }[]> = {
            'start': [],
            'seed-to-soil': [],
            'soil-to-fertilizer': [],
            'fertilizer-to-water': [],
            'water-to-light': [],
            'light-to-temperature': [],
            'temperature-to-humidity': [],
            'humidity-to-location': []
        }

        for (const line of lines) {
            if (!line) continue;

            // Getting seeds
            if (state === undefined) {
                state = 'start'
                seeds = line.split(' ').slice(1).map((s) => parseInt(s))
                continue
            }

            // Getting state
            const match = line.match(/^(.*) map:/)
            if (match) {
                state = match[1] as typeof state
                continue
            }

            // Getting maps
            const [destination, source, range] = line.split(/[ ]+/).map((s) => parseInt(s))

            map[state].push({
                min: source,
                max: source + range - 1,
                to_min: destination,
                to_max: destination + range - 1
            })
        }

        const states = Object.keys(map).slice(1) as state[]

        let wantedSeeds: { min: number, max: number}[] = []
        for (let s = 0; s < seeds.length; s += 2) {
            const min = seeds[s]
            const range = seeds[s + 1]
            const max = min + range - 1

            wantedSeeds.push({ min, max })
        }

        let i = 0
        states.reverse()

        const minWantedSeed = Math.min(...wantedSeeds.map((s) => s.min))

        while (true) {
            let val = i
            for (const state of states) {
                const list = map[state]
                const conv = list.find((c) => c.to_min <= val && c.to_max >= val)

                if (conv) {
                    val = conv.min + (val - conv.to_min)
                }
            }

            if (val >= minWantedSeed) {
                const seed = wantedSeeds.find((c) => c.min <= val && c.max >= val)
                if (seed) {
                    console.log(i, val, seed)
                    return String(i)
                }
            }

            if (i % 1_000_000 === 0) {
                console.log(i);
            }
            i++
        }

        return String('');
    }
}

export default new Day5;
