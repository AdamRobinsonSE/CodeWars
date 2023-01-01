// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
// If an object is missing the property, you should just leave it as undefined/None in the output array.

//PREP

//PARAMETERS: Given an array of objects, and a property

//RETURN: return the value of the properties in an array, if the object has a property not asked to be plucked, leave it as undefined in the array

//EXAMPLES:
// console.log(pluck([{a:1}, {a:2}], 'a')) // [1,2]
// console.log(pluck([{a:1, b:3}, {a:2}], 'b')) // [3,undefined]

//fast way

function pluck(objs, name) {
    return objs.map(item => item[name])
}

//long
function pluck(objs, name) {
  let result = [];

  for(var i = 0; i < objs.length; i++){
    let hasProp = false;
    let obj = objs[i];
    for(prop in obj){
      if(prop == name){
        hasProp = true;
        result.push(obj[prop]);
      }
    }
    if(!hasProp){
      result.push(undefined);
    }
  }
  return result;
}

console.log(pluck([{a:1}, {a:2}], 'a'))
console.log(pluck([{a:1, b:3}, {a:2}], 'b'))