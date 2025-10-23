/* 
function mridol(name = "Ammu", gender = "girl") {
    console.log(`${name} is not a bad ${gender}!`);
}

mridol("Rian", "boy");
mridol("Harun", "man");
mridol("Mridol", "bolod");
mridol();
mridol("Samia"); 
*/

// Function Expression
const mridol = function(a){
    return `Mridol is a ${a} boy`;
}

console.log(mridol("cool"));

// Arrow Function =>
const myFunc = (p) => {
    return `This is a ${p}`;
}
console.log(myFunc("Sanda"));

const yourFunc = n => `This is a ${n}`;
console.log(yourFunc("Panda"));



