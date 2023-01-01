// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here's an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

function listToArray(list) {
    let result = [] // empty arr to push to
    let head = list // setting a variable to list
    while (head !== null) { // if head doesnt equal null, do stuff
        result.push(head.value) // push head.value
        head = head.next // set head to head.next, so when its null, it stops the loop
    }
    return result
};

console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}})) // [1,2,3]
console.log(listToArray({value: "foo", next: {value: "bar", next: null}})) // ['foo', 'bar']