const takaDibe = new Promise((resolve, reject) => {
    const takaDise = false;
    const checkFunc = s => s === true ? resolve("Shey amake taka dise"):reject("Shey taka deynai");
    setTimeout(() => checkFunc(takaDise), 3000);
})


const getMoney = async () => {
    try{
        const res = await takaDibe;
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

// const getMoney = async () => {
//     await takaDibe.then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     })
// }

getMoney();
