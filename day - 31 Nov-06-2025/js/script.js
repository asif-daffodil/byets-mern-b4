const main = document.querySelector("#main");
const slider = document.querySelector("#slider");
const pre = document.querySelector("#pre");
const nxt = document.querySelector("#nxt");

const slides = Array.from(slider.children);
let ind = 0;
const totalSlides = slides.length;

const ctrlIndFunc = () => {
    if (ind == totalSlides - 1) {
        ind = 0;
        return ind;
    }
    return ind++;
}

const ctrlSlideFunc = () => {
    slides.forEach((e, i) => {
        if (ind == i) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    })
}

let runSlide = setInterval(() => {
    ctrlIndFunc();
    ctrlSlideFunc();
}, 1000);

main.addEventListener("mouseover", () => {
    clearInterval(runSlide);
})

main.addEventListener("mouseout", () => {
    runSlide = setInterval(() => {
        ctrlIndFunc();
        ctrlSlideFunc();
    }, 1000);
})

pre.addEventListener("click", () => {
    if(ind == 0) {
        ind = totalSlides - 1;
    }else{
        --ind;
    }
    ctrlSlideFunc();
})

nxt.addEventListener("click", () => {
    if(ind == totalSlides - 1) {
        ind = 0;
    }else{
        ++ind;
    }
    ctrlSlideFunc();
})