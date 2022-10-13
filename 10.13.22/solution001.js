// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// given a url as a string

// return just the domain name

// examples below

function getDomain(url){
    let domainName = url.replace('https://', '') // replace all the https://
                        .replace('http://', '') // replace all the http://
                        .replace('www.', '') // replace all the wwww.
                        .split('.') // split it at '.' and return first element
    return domainName[0]
};

console.log(getDomain("http://github.com/carbonfive/raygun")) // github
console.log(getDomain("http://www.zombie-bites.com")) // zombie-bites
console.log(getDomain("https://www.cnet.com" )) // cnet