/*
const cityList = ["Dhaka", "Chittagong", "Cumilla", "Rongpur"];
console.log(cityList[0]);
cityList.push("Noakhali");
cityList.push("Barishal", "Bhrammonbaria");
cityList.pop();
cityList.unshift("Bhrmmonbaria");
cityList.unshift("Pabna", "Hemayetpur");
cityList.shift();
console.log(cityList.indexOf("Chittagong"));
console.log(cityList.length);
// console.log(cityList);

for (let i = 0; i < cityList.length; i++) {
    console.log(cityList[i]);
}

cityList.forEach(function(city, i){
    console.log(`${i} = ${city}`);
});


const numbers = [5, 3, 6, 10, 2, 20, 37, 1, 23, 13];
// Sort the numbers in ascending order
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);
// Sort the numbers in descending order
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

//  Max number from an array
console.log(Math.max(...numbers));

// Min number from an array
console.log(Math.min(...numbers));

// Sum of all number
const sum = numbers.reduce(function(t, n){
    return t + n;
}, 0)
console.log(sum);
*/

// Multidimensional Array
const studentList = [
    ["Mridol", 22, "Keraniganj", false], 
    ["Suma", 22, "Bhrmmonbaria", false], 
    ["Rian", 26, "Khulna", true], 
    ["Samia", 22, "Barishal", false]
];
console.log(studentList[0][0]);

for (let i = 0; i < studentList.length; i++) {
    for (let j = 0; j < studentList[i].length; j++) {
        console.log(studentList[i][j]);
    }
}

studentList.forEach(function (std){
    std.forEach(function(s) {
        console.log(s);
    })
})
