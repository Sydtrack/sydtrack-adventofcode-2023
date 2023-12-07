import day2 from './index';

describe('On Day 2', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day2.partOneSampleContent()
        const result = await day2.partOneSampleResultContent()

        expect(day2.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day2.partTwoSampleContent()
        const result = await day2.partTwoSampleResultContent()

        expect(day2.solveForPartTwo(input)).toBe(result);
    })
});
