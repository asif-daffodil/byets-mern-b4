console.log("Mridol tar maa ke kotha diyechilo");
const mridolPromise = new Promise((resolve, reject) => {
    const success = true;
    const mridolFunc = s => {
        if(s){
            resolve("Mridol tar kotha rekheche!")
        }else{
            reject("Mridol tar kotha rakheni!")
        }
    }

    setTimeout(() => mridolFunc(success), 3000);
});

mridolPromise
    .then(msg => {
        console.log(msg);
        return "Tai shobai ekhon happy!";
    })
    .then(msg => {
        setTimeout(() => console.log(msg), 3000);
    })
    .catch(err => console.log(err))

console.log("Mridol tar ammu keo kotha diyechilo");
