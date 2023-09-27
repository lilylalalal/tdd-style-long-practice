// Your code here
const { expect } = require('chai');
var assert = require('chai').assert
const Person = require("../problems/person");

describe("Person- class", ()=>{
    let person1 ;
   beforeEach (() => {
    person1 = new Person("Betty",10)
   })
    it('should have a "Person" name property', function () {
     
      expect(person1.name).to.exist
    });
    it('should have a "Person" age property', function () {
      expect(person1.age).to.exist

    });
})
describe("Person - sayHello function", function () {
    let person1 ;
   beforeEach (() => {
    person1 = new Person("Betty",10)
   })
    it('should set the person.sayHello() created', function () {
        //person1.sayHello()
        let actual = person1.sayHello() 
        expect(actual).to.equal("Hello Betty.")
      
      });
    
})
describe("Person - visit(otherPerson) function", function () {
    let person1 ;
    let otherperson
   beforeEach (() => {
    person1 = new Person("Betty",10)
    otherperson = new Person("Kim", 8)
   })
    it('should set the person.visit(otherPerson) created', function () {
        //person1.sayHello()
        let actual = person1.visit(otherperson)
        expect(actual).to.equal("Betty visited Kim")
      
      });
})
describe("Person - switchVisit(otherPerson) function", function () {
    let person1 ;
    let otherperson
    let person2
   beforeEach (() => {
    person1 = new Person("Betty",10)
    otherperson = new Person("Kim", 8)
    person2 = new Person("Clare", 5)
   })
    it('person1 switchvisit(person2) should equal to person2 visit(person1) ', function () {
        //person1.sayHello()
        let actual = person1.switchVisit(otherperson)
        expect(actual).to.equal(otherperson.visit(person1))
        
      
      });

      it('switch visit function should have visit function ', function () {
        //person1.sayHello()
        let actual = person1.switchVisit(person2)
        expect(person2.visit).to.exist
        expect(actual).to.equal("Clare visited Betty")
      
      });
})
describe("Person - update(obj) function", function () {
    let person1 ;
    let otherperson
    let newinfo1
    let newinfo2
    let newlist
   beforeEach (() => {
    person1 = new Person("Betty",10)
    otherperson = new Person("Kim", 8)
    newinfo1 = { name: 'lulu', age: 5 }
    newinfo2 = {age: 15,name: "ken", }
    newlist= ["appple",20]
    newname = "ryan, 33"
   })
    it('test 1: new name: lulu and age: 5 should be updated', function () {
        
        let actual = person1.update(newinfo1)
        console.log(person1.name)
        expect(person1.name).to.equal("lulu")
        expect(person1.age).to.equal(5)
      
      });
      it('test 2: new name: ken and age: 15 should be updated', function () {
        //person1.sayHello()
        let actual = person1.update(newinfo2)
        console.log(person1.name)
        expect(person1.name).to.equal("ken")
        expect(person1.age).to.equal(15)
      
      });
      it('test 3:TypeError should be thrown when there is no name and age detail', function () {
        assert.throws(
          () => person1.update(newlist),
          TypeError
          
          );
      
      });
      it('test 4:TypeError should be thrown when there is not an object', function () {
        assert.throws(
          () => person1.update(newname),
          TypeError
  
          );
      
      });
})
describe("Person -greetAll(...obj) function", function () {
  let person1 ;
  let person2;
  let otherperson


 beforeEach (() => {
  person1 = new Person("Betty",10)
  otherperson = new Person("Kim", 8)
  person2 =new Person('lulu',5 )
 
 })
  it('test 1: say hello to Betty , Kim & Lulu', function () {
      
      let actual = Person.greetAll(person1,person2,otherperson)
      let expected = person1.sayHello()+' ' +person2.sayHello()+' '+ otherperson.sayHello()+' '
      //console.log(actual)
      //console.log("expected:",expected )
      expect(actual).to.equal(expected)
     
    
    });
  })