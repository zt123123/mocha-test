const assert = require("assert");

const sum = require("../hello")

describe("#hello", () => {
    describe("#sum()", () => {
        before(() => {
            console.log("before");
        })

        after(() => {
            console.log("after");
        })

        beforeEach(() => {
            console.log("befor each");
        })

        afterEach(() => {
            console.log("after each");
        })

        it("sum() should return 0", () => {
            assert.strictEqual(sum(), 0)
        })
        it("sum(1) should return 1", () => {
            assert.strictEqual(sum(1), 1)
        })
        it("sum(1,2) should return 3", () => {
            assert.strictEqual(sum(1, 2), 3)
        })
        it("sum(null) should return 0", () => {
            assert.strictEqual(sum(null), 0)
        })
    })
})