let n = 0;

while (n < 10) {
    console.log(n);
    n++;
}

let m = 9;
while(m >= 0) {
    console.log(m--);
}

let y = 2000;
while(y < 2100){
    if(y % 400 == 0){
        console.log(`${y} is a leap-year`);
    }else if(y % 100 == 0) {
        y++;
        continue;
    }else if(y % 4 == 0){
        console.log(`${y} is a leap-year`);
    }
    y++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}