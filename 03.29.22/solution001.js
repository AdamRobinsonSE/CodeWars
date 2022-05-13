// Rewrite this following code using a Switch

// const weather = prompt("What's the weather like?");
// if (weather === "sunny") {
//   console.log("T-shirt time!");
// } else if (weather === "windy") {
//   console.log("Windbreaker life.");
// } else if (weather === "rainy") {
//   console.log("Bring that umbrella!");
// } else if (weather === "snowy") {
//   console.log("Just stay inside!");
// } else {
//   console.log("Not a valid weather type");
// }

const weather = prompt('What\'s the weather like?');
    switch (weather) {
        case "sunny":
            console.log('T-shirt time!')
            break;
        case "windy":
            console.log('Windbreaker life')
            break;
        case "snowy":
            console.log('Just stay inside!')
            break;
        case "rainy":
            console.log("Bring an umbrella!")
        case "random":
            console.log("Not a valid weather type")
            break;
    }
    