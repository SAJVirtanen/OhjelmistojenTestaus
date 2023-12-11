import capitalize from "../src/capitalize.js";
import assert from "assert";   
import { expect } from "chai";
describe("capitalize", () => {
    it("should return the capitalized string.", () => {
        assert.strictEqual(capitalize("fred"), "Fred");
    });
    it("Should return the capitalized string when called with all caps string.", () => {
        assert.strictEqual(capitalize("FRED"), "Fred");
    });
    it("should return the capitalized string when called with all lower case.", () => {
        expect(capitalize("fred")).to.deep.equal("Fred");
    });
    it("should return the capitalized string when called with empty string.", () => {
        expect(capitalize("")).to.deep.equal("");
    });
    it("should return the capitalized string when called with one letter string.", () => {
        expect(capitalize("f")).to.deep.equal("F");
    });
    it("should return the capitalized string when called with a sentence", () => {
        expect(capitalize("fRed is a dog.")).to.deep.equal("Fred is a dog.");
    });
});