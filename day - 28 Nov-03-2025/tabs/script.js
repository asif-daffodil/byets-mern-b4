const head = document.querySelector(".head");
const details = document.querySelector(".details");
const headArr = Array.from(head.children);
const detailsArr = Array.from(details.children);

headArr.forEach((hd, ind) => {
    hd.addEventListener("click", () => {
        headArr.forEach((h, i) => {
            if(ind === i){
                if(headArr.length - 1 > i){
                    h.classList = "w-full text-center text-2xl border-r leading-10 cursor-pointer bg-gray-300 font-bold";
                }else{
                    h.classList = "w-full text-center text-2xl leading-10 cursor-pointer bg-gray-300 font-bold";
                }
                detailsArr[i].classList = "px-3 py-3 italic transition-all duration-500 bg-gray-300";
            }else{
                if(headArr.length - 1 > i){
                    h.classList = "w-full text-center text-2xl border-b border-r leading-10 cursor-pointer hover:bg-gray-200";
                }else{
                    h.classList = "w-full text-center text-2xl border-b leading-10 cursor-pointer hover:bg-gray-200";
                }
                detailsArr[i].classList = "px-3 py-0 italic max-h-0 overflow-hidden transition-all duration-500 bg-gray-300";
            }
        })
    })
})