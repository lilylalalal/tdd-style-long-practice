const { expect } = require("chai")

class Person {
  // Your code here
  constructor(name ,age){
    this.name = name
    this.age = age

  }
  sayHello() {
    let greeting = `Hello ${this.name}.`
    return greeting
  }

  visit(otherPerson) {
    console.log(this)
    return (this.name + " visited "+ otherPerson.name)
  }

  switchVisit(otherPerson) {
    //invoke the visit function of the parameter (otherPerson),
    //passing in the current instance as the argument.
    //console.log(this)
    return otherPerson.visit.call(otherPerson,this)
 

  }
  update(obj){
    //A: If the incoming argument is not an object throw a new TypeError with a clear message
  if (obj instanceof Object == false){
    throw TypeError("This is not an object. Nothing can be updated.")
  }else{
    if(!obj.name && !obj.age){
      throw TypeError("There is no name and age detail. Nothing can be updated.")
    }
    else{
    this.name = obj.name
    this.age = obj.age
    }
  }
//B: If the incoming argument is an object then the instance's properties should be updated to match the passed-in object's values as shown below.
//C: If the incoming object does not have a name and an age property, throw a

  }
  static greetAll(...obj){
    let greeting = ''
    //intake an array of Person instances. 
    //The greetAll method will then call the sayHello() method on each Person
    obj.forEach((person) =>{
      //console.log(person.sayHello())
      greeting +=person.sayHello()+ " "
    })
    return greeting
  }
}


const person1 = new Person("william", 38)

const otherperson = new Person("Kim", 8)

//let actual = person1.visit(otherperson) 
console.log(Person.greetAll(person1,otherperson ))
//console.log("below is switch visit ...")


//let visitmore = person1.switchVisit
//console.log(person1.switchVisit(otherperson))
//console.log(visitmore.bind(otherperson))

module.exports = Person;