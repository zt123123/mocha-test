const assert = require("assert");

const hello = require("../async")

describe("#async", () => {
    describe("#async test", () => {
        it("#async await", async () => {
            let r = await hello()
            assert.strictEqual(r, 6)
        })
    })
})