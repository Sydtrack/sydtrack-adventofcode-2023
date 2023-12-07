import { start } from "repl";
import { Day } from "../day";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    isDigit(line: string, ix: number): boolean {
        const char = line[ix]
        return char >= '0' && char <= '9'
    }

    checkAround(grid: string[], x: number, y: number, startIx: number, endIx: number, length: number): boolean {
        const rows: string[] = []

        if (startIx > 0) {
            startIx -= 1
        }

        if (endIx < length) {
            endIx += 1
        }

        if (y > 0) {
            const row = grid[y - 1].substring(startIx, endIx + 1)
            rows.push(row)
        }

        const row = grid[y].substring(startIx, endIx + 1)
        rows.push(row)

        if (y < grid.length) {
            const row = grid[y + 1].substring(startIx, endIx + 1)
            rows.push(row)
        }

        const map = rows.join('').replace(/([0-9]|\.)/g, '')
        return map.length > 0
    }

    solveForPartOne(input: string): string {
        const grid = input.split('\n');
        let sum = 0;

        for (let y = 0; y < grid.length; y++) {
            let startIx: number
            let endIx: number
            let number: string

            const row = grid[y]

            // Find numbers in sequence
            const len = row.length
            for (let x = 0; x < len; x++) {
                number = ''
                startIx = x
                endIx = -1

                while (this.isDigit(row, x) && x < len) {
                    number += row[x]
                    endIx = x
                    x++
                }

                if (endIx !== -1) {
                    const symbolsAround = this.checkAround(grid, x, y, startIx, endIx, len)
                    if (symbolsAround) {
                        sum += parseInt(number)
                    }
                }
            }
        }

        return String(sum);
    }

    gears: Record<string, number[]> = {}

    mapAround(grid: string[], x: number, y: number, startIx: number, endIx: number, length: number, ratio: number): void {
        const rows: string[] = []

        if (startIx > 0) {
            startIx -= 1
        }

        if (endIx < length) {
            endIx += 1
        }

        for (let j = y - 1; j <= y + 1; j++) {
            const row = grid[j]
            if (!row) continue

            for (let i = startIx; i <= endIx; i++) {
                if (row[i] === '*') {
                    const key = `${j}:${i}`
                    this.gears[key] ??=[]
                    this.gears[key].push(ratio)
                }
            }
        }
    }


    solveForPartTwo(input: string): string {
        const grid = input.split('\n');
        let sum = 0;

        for (let y = 0; y < grid.length; y++) {
            let startIx: number
            let endIx: number
            let number: string

            const row = grid[y]

            // Find numbers in sequence
            const len = row.length
            for (let x = 0; x < len; x++) {
                number = ''
                startIx = x
                endIx = -1

                while (this.isDigit(row, x) && x < len) {
                    number += row[x]
                    endIx = x
                    x++
                }

                if (endIx !== -1) {
                    this.mapAround(grid, x, y, startIx, endIx, len, parseInt(number))
                }
            }
        }

        const validGears = Object.values(this.gears).filter((g) => g.length === 2)

        console.log(validGears)

        validGears.forEach((g) => {
            sum += g[0] * g[1]
        })

        return String(sum);
    }
}

export default new Day3;
