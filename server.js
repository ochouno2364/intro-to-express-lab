// Import Dependencies
// Import Express
const express = require('express');

// Create an Express app
const app = express();

//middleware 

// Routes Here !!

app.get('/', (req, res)=> { // empty path '/'
console.log(`Hello world!`);
res.send(`Hello world!`);
})

// Exercise 1 Greeting Name req
app.get('/greetings/:name', (req, res)=> { // path to greeting and name
    const name = req.params.name; // name request the params name
    res.send(`Hello there, ${name}!`);
})

// Excersice 2 Rolling Dice
app.get('/roll/:number', (req, res)=> {
    const number = req.params.number // number = the url number path
    let numthree = parseInt(number); // parsenInt() converts the string into a number
    const numTwo = Math.floor(Math.random() * numthree); //numTwo  uses math.floor to find a number lower and math.random to find a random number


    if (isNaN(numthree)) { // isNaN check to see if numThree is not a number 
        console.log(`You must specify a number.`)
        res.send(`You must specify a number.`)
    } else {
        res.send(`You rolled a ${numTwo}`); // sends the client a random number lower than  params number but higher than 0
        console.log(`You rolled a ${numTwo}`);
    }
})

// Excersice 3 I Want THAT ONE
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res)=> {
   
const index = Number(req.params.index); //turns the index into a number
console.log(collectibles[index]); //logs the objects index
res.send(`So, you want the ${collectibles[index].name} For ${collectibles[index].price}, it can be yours!”`); // sends the name and price to the client based off the index given in the params

});



//Exercise 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req,res)=> {

    const min = Number(req.query.minprice); //makes min and max a number requested 
    const max = Number(req.query.maxprice);
    const type = req.query.type;

    let filterdShoes = shoes; 

    if (isNaN(min) && isNaN(max) && type === '') {
        return;
    } else if (!isNaN(min) && !isNaN(max) && typeof type !== 'string') {
        filterdShoes = filterdShoes.filter(shoe => shoe.price >= min && shoe.price <= max && shoe.type === type);
    }
    console.log(filterdShoes);
    res.send(filterdShoes)
    
    
})





// Listen for Request!
app.listen(3000, ()=> {
    console.log(`listening on port 3000`);
})
