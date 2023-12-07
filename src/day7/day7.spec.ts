import day7 from './index';

describe('On Day 7', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day7.partOneSampleContent()
        const result = await day7.partOneSampleResultContent()

        expect(day7.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day7.partTwoSampleContent()
        const result = await day7.partTwoSampleResultContent()

        expect(day7.solveForPartTwo(input)).toBe(result);
    })
});
