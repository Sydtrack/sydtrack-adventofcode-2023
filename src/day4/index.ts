import { Day } from "../day";

class Day4 extends Day {

    constructor(){
        super(4);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n');
        let sum = 0;

        for (const line of lines) {
            if (!line) continue
            const [card, numbers] = line.split(/:[ ]+/g)
            const [left, right] = numbers.split(/[ ]+\|[ ]+/);

            const winningNumbers = left.split(/[ ]+/).map((n) => parseInt(n))
            const myNumbers = right.split(/[ ]+/).map((n) => parseInt(n))

            let count = 0
            for (const mine of myNumbers) {
                if (winningNumbers.includes(mine)) {
                    count++
                }
            }

            if (count) {
                sum += Math.pow(2, count - 1)
            }
        }

        return String(sum);
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n');
        const won = new Array(lines.length).fill(1)

        for (const [ix, line] of lines.entries()) {
            if (!line) continue
            const [card, numbers] = line.split(/:[ ]+/g)
            const [left, right] = numbers.split(/[ ]+\|[ ]+/);

            const winningNumbers = left.split(/[ ]+/).map((n) => parseInt(n))
            const myNumbers = right.split(/[ ]+/).map((n) => parseInt(n))

            let count = 0
            for (const mine of myNumbers) {
                if (winningNumbers.includes(mine)) {
                    count++
                }
            }

            while(count) {
                won[ix + count] += won[ix]
                count--
            }
        }

        let sum = 0;
        won.forEach((n) => sum += parseInt(n))

        return String(sum);
    }
}

export default new Day4;
