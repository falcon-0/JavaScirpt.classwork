// Q1 conts 1 to 20

for (let i = 1; i <= 20; i+=1) {
    console.log(i);
}

// Q2

let student = [ "Tunde", "Bola" , "Sola", "Ade"]

for(let i = 0; i < student.length; i++) {
    console.log(student[i] + " is present");
}
// using for of
for (let _students of student){
    console.log(_students + "is present")
}

// sum numbers

let numbers = [10,20,30,40,50];
let total = 0;
for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
}
console.log("Total is " + total);

// Q4 find the largest score

let scores = [45,67,89,34,90,12];
let max = scores[0];
for(let i=0; i < scores.length; i++){
    if(scores[i] > max){
        max = scores[i];
    }
}
console.log("The largest score is " + max);


// Q5 count occurence

let fruits = ["mango","orange","mango","banana","mango"];
let count = 0;
for(let j = 0; j < fruits.length; j++){
    if(fruits[j] === "mango"){
        count++;
    }
}
console.log("Mango appears " + count + " times");

// Q6 loop through object

let car = { brand: "Toyota", model: "Camry", year: 2020, color: "black" };
for (let key in car) {
    console.log(key + ": " + car[key]);
}

// Q7 array of objects

let products = [
    { name: "Shoe", price: 5000 },
    { name: "Bag", price: 3000 },
    { name: "Cap", price: 1500 }
];
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + " costs " + products[i].price);
}

// Q10 shopping cart total

let cart = [
    { name: "Bread", price: 1200, qty: 2 },
    { name: "Milk", price: 800, qty: 1 },
    { name: "Sugar", price: 500, qty: 3 }
];
let grandTotal = 0;
for (let i = 0; i < cart.length; i++) {
    grandTotal += cart[i].price * cart[i].qty;
}
console.log("You need to pay ₦" + grandTotal);