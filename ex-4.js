// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

for (let i = 0; i < restaurants.length; i++) {
    let name = restaurants[i];
    let newName = `Restaurant Name: ${name}`;
    newRestaurants.push(newName);
}
console.log(newRestaurants);
