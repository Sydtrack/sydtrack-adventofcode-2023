import day4 from './index';

describe('On Day 4', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day4.partOneSampleContent()
        const result = await day4.partOneSampleResultContent()

        expect(day4.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day4.partTwoSampleContent()
        const result = await day4.partTwoSampleResultContent()

        expect(day4.solveForPartTwo(input)).toBe(result);
    })
});
