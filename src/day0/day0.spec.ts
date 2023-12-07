import day0 from './index';

describe('On Day 0', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day0.partOneSampleContent()
        const result = await day0.partOneSampleResultContent()

        expect(day0.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day0.partTwoSampleContent()
        const result = await day0.partTwoSampleResultContent()

        expect(day0.solveForPartTwo(input)).toBe(result);
    })
});
