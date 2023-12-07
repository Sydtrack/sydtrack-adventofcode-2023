import day6 from './index';

describe('On Day 6', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day6.partOneSampleContent()
        const result = await day6.partOneSampleResultContent()

        expect(day6.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day6.partTwoSampleContent()
        const result = await day6.partTwoSampleResultContent()

        expect(day6.solveForPartTwo(input)).toBe(result);
    })
});
