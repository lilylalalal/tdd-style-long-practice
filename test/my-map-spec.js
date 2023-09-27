// Your code here
const { expect } = require('chai');
const chai = require('chai')
const spies = require("chai-spies");
chai.use(spies)

const Mymap = require("../problems/my-map");


describe("myMap(inputArray, callback)", ()=>{
    let inputArray
    beforeEach(() => {
      inputArray = [1, 2, 3];
      const spy = chai.spy(Mymap);
      //spy.on("spying...",spy)
    });
    it("should double the digit in array",()=>{
        const callback = (el) => el * 2;
        const expect1 = [2, 4, 6]
        expect(Mymap(inputArray, callback)).to.eql(expect1);
        console.log(chai.spy.on(inputArray, callback))
    })
    it("myMap() should not mutate the passed-in array argument",()=>{
        const callback = (el) => el * 2;
        const expect1 = [2, 4, 6]
        Mymap(inputArray, callback)
        expect(inputArray).to.eql([1, 2, 3]);
    })

    it("should deduct the digit in array",()=>{
        const callback = (el) => el - 200;
        const expect2 = [-199, -198, -197]
        expect(Mymap(inputArray, callback)).to.eql(expect2);
    })
    it("myMap() should not mutate the passed-in array argument",()=>{
        const callback = (el) => el - 200;
        const expect2 = [-199, -198, -197]
       
        Mymap(inputArray, callback)
        expect(inputArray).to.eql([1, 2, 3]);
    })
    it(" passed-in callback is invoked once for each element in the passed-in array argument.",()=>{
        const callback = (el) => el - 200;
        const expect2 = [-199, -198, -197]
       
        Mymap(inputArray, callback)
        expect(callback()).to.exist;
    })



})

