// Your code here
const { expect } = require('chai');

const reverseString = require("../problems/reverse-string");

describe("reverseString(string)" , ()=>{
    it("it should return the string in reverse", ()=>{
        const string = "fun" ;
        const actual = reverseString(string);
        const expected = "nuf"
       
        expect(actual).to.eql(expected);
    })
    it("it should throw an error", ()=>{
        const string = 34567 ;
        const err = new Error("Error: please input words.")
        const badFn =function reverseString(string) {throw err}
        
        
        expect(badFn).to.throw(err);
    })

 
})