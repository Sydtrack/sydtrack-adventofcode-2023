import { Day } from "../day";

class Day6 extends Day {

    constructor(){
        super(6);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n')

        const times = lines[0].split(/[ ]+/).slice(1).map((n) => parseInt(n))
        const distances = lines[1].split(/[ ]+/).slice(1).map((n) => parseInt(n))

        let ways = 1
        for (let i = 0; i < times.length; i++) {
            const raceTime = times[i]
            const raceDistance = distances[i]

            // distance = time + time * (total - time)
            // distance = time + time * total - time * time
            // distance = -time^2 + total*(time + 1)
            // y - x2 + (total * x) + (total - distance)

            // distance = time * (total - time)
            // distance = -time2 + total*time

            // 0 = -time2 + total * time - distance


            const a = -1
            const b = raceTime
            const c = -raceDistance

            const sqrDelta = Math.sqrt((b * b) - (4 * a * c))

            let x1 = ( -b + sqrDelta) / (2 * a)
            let x2 = ( -b - sqrDelta) / (2 * a)

            x1 = (Math.ceil(x1) === Math.floor(x1)) ? x1 + 1 : Math.ceil(x1)
            x2 = (Math.ceil(x2) === Math.floor(x2)) ? x2 - 1 : Math.floor(x2)

            const options = x2 - x1 + 1

            ways *= options
        }

        return String(ways);
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n')

        const times = lines[0].replace(/ /g, '').split(':').slice(1).map((n) => parseInt(n))
        const distances = lines[1].replace(/ /g, '').split(':').slice(1).map((n) => parseInt(n))

        let ways = 1
        for (let i = 0; i < times.length; i++) {
            const raceTime = times[i]
            const raceDistance = distances[i]

            // distance = time + time * (total - time)
            // distance = time + time * total - time * time
            // distance = -time^2 + total*(time + 1)
            // y - x2 + (total * x) + (total - distance)

            // distance = time * (total - time)
            // distance = -time2 + total*time

            // 0 = -time2 + total * time - distance


            const a = -1
            const b = raceTime
            const c = -raceDistance

            const sqrDelta = Math.sqrt((b * b) - (4 * a * c))

            let x1 = ( -b + sqrDelta) / (2 * a)
            let x2 = ( -b - sqrDelta) / (2 * a)

            x1 = (Math.ceil(x1) === Math.floor(x1)) ? x1 + 1 : Math.ceil(x1)
            x2 = (Math.ceil(x2) === Math.floor(x2)) ? x2 - 1 : Math.floor(x2)

            const options = x2 - x1 + 1

            ways *= options
        }

        return String(ways);
    }
}

export default new Day6;
