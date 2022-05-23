const { sum, inOneHour, multiplyAllNumbers, generateDir, isNumber } = require('./my-code');

describe("math functions", () => {
    beforeAll(() => {
        console.log("before all");
    })

    it('sums 2 numbers', () => {
        expect(sum(1,2)).toBe(3);
    })

    it('sums 2 numbers', () => {
       expect(sum(1,2)).toBe(3);
    })

})


describe('time functions', () => {
    it("returns the timestamp for one hour ahead", () => {
        const realDateNow = Date.now.bind(global.Date);
        global.Date.now = jest.fn(() => 0);
        expect(inOneHour()).toBe(3600000);
        global.Date.now = realDateNow;
    })
})

describe("test, multiply all arrays", () => {
    it("returns all numbers", () => {
        expect(multiplyAllNumbers()).toEqual([18, 16, 8]); //Verifica se array é igual (toEqual)
    })
})


describe("test a function for create new dir", () => {
    it("returns a new dir created", async () => {
        expect(generateDir()).toBe(true);
    });
})

describe("test a async function", () => {
    it("test async func", async () => {
        return isNumber(34).then(data => {
            expect(data).toBe("number");
        })
    })
}) //Teste com funções assincronas