const strJson = [
    {
        "index": 0,
        "name": "Dianne Emerson",
        "age": 32,
        "gender": "female",
        "email": "dianneemerson@comtrak.com",
        "isActive": true
    },
    {
        "index": 1,
        "name": "Dixie Blevins",
        "age": 29,
        "gender": "female",
        "email": "dixieblevins@comtrak.com",
        "isActive": false
    },
    {
        "index": 2,
        "name": "Higgins Kline",
        "age": 27,
        "gender": "male",
        "email": "higginskline@comtrak.com",
        "isActive": true
    },
    {
        "index": 3,
        "name": "Kaye Raymond",
        "age": 22,
        "gender": "female",
        "email": "kayeraymond@comtrak.com",
        "isActive": false
    },
    {
        "index": 4,
        "name": "Thompson Hernandez",
        "age": 26,
        "gender": "male",
        "email": "thompsonhernandez@comtrak.com",
        "isActive": false
    },
    {
        "index": 5,
        "name": "Buchanan Olson",
        "age": 34,
        "gender": "male",
        "email": "buchananolson@comtrak.com",
        "isActive": true
    },
    {
        "index": 6,
        "name": "Lidia Dillon",
        "age": 37,
        "gender": "female",
        "email": "lidiadillon@comtrak.com",
        "isActive": false
    },
    {
        "index": 7,
        "name": "Hartman Tran",
        "age": 36,
        "gender": "male",
        "email": "hartmantran@comtrak.com",
        "isActive": false
    },
    {
        "index": 8,
        "name": "Castaneda Jennings",
        "age": 31,
        "gender": "male",
        "email": "castanedajennings@comtrak.com",
        "isActive": true
    },
    {
        "index": 9,
        "name": "Kathy Hahn",
        "age": 30,
        "gender": "female",
        "email": "kathyhahn@comtrak.com",
        "isActive": true
    }
]

// for(let p of strJson) {
//     for(let k in p) {
//         console.log(`${k} = ${p[k]}`);
//     }
//     console.log("\n");
// }

// const fd = strJson.find(p => p.age < 30);
// console.log(fd);

const cityList = ["Bogura", "Bhrammonbaria", "Noakhali", "Barishal"];
// const rm = cityList.map(city => city);
// console.log(rm);
const fc = cityList.filter(c => c[0] === "B");
console.log(fc);