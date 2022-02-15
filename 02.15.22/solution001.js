// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

//PREP
//P: Given a string, that could be capitalized, or not, or given nothing
//R: return "Hello, Name!" if a parameter is given, if none is given, return 'Hello, World!'
//E:

function hello(name) {
    return name ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : `Hello, World!`
  }