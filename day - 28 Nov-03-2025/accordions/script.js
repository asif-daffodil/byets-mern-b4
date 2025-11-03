const head = document.querySelectorAll(".head");
const details = document.querySelectorAll(".details");

head.forEach((h, i) => {
    h.addEventListener("click", () => {
        head.forEach((hd, ind) => {
            if (i === ind) {
                if (hd.classList === "head text-xl font-bold p-2 border-b cursor-pointer bg-black text-white relative before:content-['-'] before:absolute before:top-0 before:right-0 before:h-full before:aspect-square before:grid before:place-items-center") {
                    hd.classList = "head text-xl font-bold p-2 border-b cursor-pointer hover:bg-gray-300 relative before:content-['+'] before:absolute before:top-0 before:right-0 before:h-full before:aspect-square before:grid before:place-items-center";
                    details[ind].classList = "details italic px-2 py-0 max-h-0 overflow-hidden transition-all duration-500";
                } else {
                    hd.classList = "head text-xl font-bold p-2 border-b cursor-pointer bg-black text-white relative before:content-['-'] before:absolute before:top-0 before:right-0 before:h-full before:aspect-square before:grid before:place-items-center";
                    details[ind].classList = "details italic px-2 py-2 max-h-max overflow-hidden transition-all duration-500";
                }
            } else {
                hd.classList = "head text-xl font-bold p-2 border-b cursor-pointer hover:bg-gray-300 relative before:content-['+'] before:absolute before:top-0 before:right-0 before:h-full before:aspect-square before:grid before:place-items-center";
                details[ind].classList = "details italic px-2 py-0 max-h-0 overflow-hidden transition-all duration-500";
            }
        })
    })
})