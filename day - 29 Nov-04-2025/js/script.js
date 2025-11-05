let n = 0;
const show = document.querySelector(".show");
show.textContent = n;

const nums = document.querySelectorAll(".num");
nums.forEach(num => {
    num.addEventListener('click', e => {
        const reqVal = String(e.target.textContent);
        let preVal = String(show.textContent);

        if (preVal == 0 && reqVal != "."){
            preVal = "";
        }

        if (reqVal == "." && preVal.includes(".")){
            return;
        }

        const newVal = preVal + reqVal;
        show.textContent = newVal;
    })
})

const c = document.querySelector(".c");
c.addEventListener('click', () => {
    show.textContent = 0;
})

const pm = document.querySelector(".pm");
pm.addEventListener('click', () => {
    let preVal = show.textContent;
    if(preVal[0] == "-"){
        preVal = preVal.slice(1);
    }else{
        preVal = "-" + preVal;
    }
    show.textContent = preVal;
})

const back = document.querySelector(".back");
back.addEventListener('click', () => {
    let preVal = show.textContent;
    if(preVal == 0){
        return;
    }

    if(preVal.length == 1){
        preVal = 0;
    }

    if(preVal != 0 && preVal.length > 1){
        preVal = preVal.slice(0, -1);
    }

    show.textContent = preVal;
})

const math = document.querySelectorAll(".math");
math.forEach(m => {
    m.addEventListener('click', e => {
        const reqVal = String(e.target.textContent);
        const preVal = show.textContent;
        const lastCarr = preVal.slice(-1);
        console.log(lastCarr);
        if(["+", "-", "*", "/"].includes(lastCarr)){
            return;
        }
        show.textContent += reqVal;
    })
})

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    const preVal = show.textContent;
    const result = eval(preVal);
    show.textContent = result;
})