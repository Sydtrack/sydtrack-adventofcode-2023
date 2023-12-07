import day5 from './index';

describe('On Day 5', () =>{
    it(`Part 1 function works for sample`, async () => {
        const input = await day5.partOneSampleContent()
        const result = await day5.partOneSampleResultContent()

        expect(day5.solveForPartOne(input)).toBe(result);
    })

    it(`Part 2 function works for sample`, async () => {
        const input = await day5.partTwoSampleContent()
        const result = await day5.partTwoSampleResultContent()

        expect(day5.solveForPartTwo(input)).toBe(result);
    })
});
