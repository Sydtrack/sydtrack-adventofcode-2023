import day1 from './index';

describe('On Day 1', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day1.partOneSampleContent()
        const result = await day1.partOneSampleResultContent()

        expect(day1.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day1.partTwoSampleContent()
        const result = await day1.partTwoSampleResultContent()

        expect(day1.solveForPartTwo(input)).toBe(result);
    })
});
