import fs from 'fs';

abstract class Day {

    id: number;

    constructor(id: number){
        this.id = id;
    }

    async getContent(filename: string): Promise<string> {
        const content = await fs.promises.readFile(`./inputs/day${this.id}/${filename}.txt`);
        return content.toString().trim();
    }

    async partOne(): Promise<string> {
        const content = await this.getContent('part1');
        const result = this.solveForPartOne(content.toString());
        return result;
    }

    async partOneSampleContent(): Promise<string> {
        return this.getContent('part1-sample');
    }

    async partOneSampleResultContent(): Promise<string> {
        return this.getContent('part1-sample-result');
    }

    abstract solveForPartOne(input: string) : string;

    async partTwo(): Promise<string> {
        const content = await this.getContent('part2');
        const result = this.solveForPartTwo(content.toString());
        return result;
    }

    async partTwoSampleContent(): Promise<string> {
        return this.getContent('part2-sample');
    }

    async partTwoSampleResultContent(): Promise<string> {
        return this.getContent('part2-sample-result');
    }

    abstract solveForPartTwo(input: string) : string;
}

export { Day };
