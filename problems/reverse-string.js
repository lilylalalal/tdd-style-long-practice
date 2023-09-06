module.exports =  function reverseString(string) {
  // Your code here
  
  if (typeof string != "string" ){
    throw Error("please input words.")}
else { 
  let newstring = ''
  for (i=string.length-1; i>= 0; i--){
    let char = string[i]
    newstring += char

  }
  return newstring}

};

