import { match } from "assert";
import { Day } from "../day";

class Day1 extends Day {

    constructor() {
        super(1);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n');
        let calibration = 0;

        for (const line of lines) {
            if (!line) {
                continue
            }

            const digits = line.split('').filter((d) => d >= '0' && d <= '9')

            const number = digits.at(0) + '' + digits.at(-1)
            // console.log(line, number)
            calibration += parseInt(number)
        }

        return String(calibration);
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n');
        let calibration = 0;

        const map = {
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9
        }

        const items = Object.keys(map).join('|')
        const regexp = new RegExp(`(${items})`)

        const itemsReverse = items.split('').reverse().join('')
        const regexpReverse = new RegExp(`(${itemsReverse})`)

        for (const line of lines) {
            if (!line) {
                continue
            }

            const match = line.match(regexp)
            const matchReverse = line.split('').reverse().join('').match(regexpReverse)
            if (!match || !matchReverse) {
                continue
            }

            const firstT = match[0] as keyof typeof map
            const lastT = matchReverse[0].split('').reverse().join('') as keyof typeof map

            const first = map[firstT]
            const last = map[lastT]

            const number = parseInt(`${first}${last}`)
            const stepOneNumber = parseInt(this.test(line))

            if (number !== stepOneNumber) {
                console.log(line, number, stepOneNumber)
            }

            calibration += number
        }

        return String(calibration);
    }

    test(input: string): string {
        const replaced = input
            .replace(/one/gm, '1')
            .replace(/two/gm, '2')
            .replace(/three/gm, '3')
            .replace(/four/gm, '4')
            .replace(/five/gm, '5')
            .replace(/six/gm, '6')
            .replace(/seven/gm, '7')
            .replace(/eight/gm, '8')
            .replace(/nine/gm, '9')

        return this.solveForPartOne(replaced);
    }
}

export default new Day1;
