import words from "../src/words.js";
import assert from "assert";
import { expect } from "chai";

describe("words", () => {
    it("should return the words of `string`.", () => {
        assert.deepStrictEqual(words("fred, barney, & pebbles"), [
            "fred",
            "barney",
            "pebbles",
        ]);
    });
    it("should return the words of `string`.", () => {
        assert.deepStrictEqual(words("fred, barney, & pebbles", /[^, ]+/g), [
            "fred",
            "barney",
            "&",
            "pebbles",
        ]);
    });
    it("should return typeError when called with integer", () => {
        assert.throws(() => {
            words(123);
        }, TypeError);
    });
});