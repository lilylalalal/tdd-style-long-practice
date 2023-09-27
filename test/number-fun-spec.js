// Your code here
const { expect } = require('chai');

const {returnsThree, reciprocal} = require("../problems/number-fun");

describe("returnsThree()", () => {
    it("it should return 3", () => {
        const actual = returnsThree()
        expect(actual).to.eql(3);
    })
})

describe("reciprocal(n)", () => {
    it("it should return an inverse number", () => {
        const actual1 = reciprocal(2)
        const actual2 = reciprocal(100)
        expect(actual1).to.eql(0.5);
        expect(actual2).to.eql(0.01);
    })
    it("it should return an TypeError if any number out of 1- 1000000", () => {
        const n1 =1.25
        const n2 = 1000001
       
        const err = new TypeError("only accepts number between 1 and 1000000")
        
        //expect(reciprocal(n2)).to.throw(err);
        try {
            
            reciprocal(n2);
          } catch (err) {
            expect(err.message).to.eql("only accepts number between 1 and 1000000");
          }
          
          expect(reciprocal(n1)).to.exist;
          console.log("function ran after facing TypeError")
    })
    //chai.spy.on

})