import { Day } from "../day";

class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n');
        let sum = 0;

        const max = {
            red: 12,
            green: 13,
            blue: 14
        }

        for (const line of lines) {
            if (!line) continue
            let valid = true

            const [id, game] = line.split(': ')
            const subsets = game.split('; ')

            for (const subset of subsets) {
                if (!valid) break
                const reveals = subset.split(', ')

                for (const reveal of reveals) {
                    const [num, color] = reveal.split(' ')
                    if (parseInt(num) > max[color as keyof typeof max]) {
                        valid = false
                        break
                    }
                }
            }

            if (valid) {
                const number = parseInt(id.split(' ')[1])
                sum += number
            }
        }

        return String(sum);
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n');
        let sum = 0;

        for (const line of lines) {
            if (!line) continue
            const min = {
                red: 0,
                green: 0,
                blue: 0
            }

            const [id, game] = line.split(': ')
            const subsets = game.split('; ')

            for (const subset of subsets) {
                const reveals = subset.split(', ')

                for (const reveal of reveals) {
                    const [num, color] = reveal.split(' ')
                    const count = parseInt(num)
                    const minForColor = min[color as keyof typeof min]

                    min[color as keyof typeof min] = Math.max(minForColor, count)
                }
            }

            const number = min.red * min.green * min.blue
            sum += number
        }

        return String(sum);
    }
}

export default new Day2;
