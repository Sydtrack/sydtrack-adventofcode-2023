import day3 from './index';

describe('On Day 3', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day3.partOneSampleContent()
        const result = await day3.partOneSampleResultContent()

        expect(day3.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day3.partTwoSampleContent()
        const result = await day3.partTwoSampleResultContent()

        expect(day3.solveForPartTwo(input)).toBe(result);
    })
});
