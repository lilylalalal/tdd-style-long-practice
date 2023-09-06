function myMap(inputArray, callback) {
  // Your code here
  let newArray =[]
  let change = inputArray.forEach((ele) => {newArray.push(callback(ele))})
  return newArray

}

module.exports = myMap;