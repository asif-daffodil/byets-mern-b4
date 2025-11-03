const time = document.querySelector("#time");
const date = document.querySelector("#date");
const week = document.querySelector("#week");

const getTime = () => {
    const d = new Date();
    let h12 = d.getHours() % 12;
    h12 = h12 ? h12:12;
    h12 = String(h12).padStart(2, 0);
    const ampm = d.getHours() >= 12 ? "PM":"AM";
    const m = String(d.getMinutes()).padStart(2, 0);
    const s = String(d.getSeconds()).padStart(2, 0);
    time.textContent = `${h12}:${m}:${s} ${ampm}`;

    const mash = d.toLocaleString("en-US", {month: "short"});
    const tarikh = String(d.getDate()).padStart(2, 0);
    const y = d.getFullYear();
    date.textContent = `${mash}-${tarikh}-${y}`;
    
    const bar = d.getDay();
    const bars = week.children;
    for (let i = 0; i < 7; i++) {
        if(i == bar) {
            bars[i].classList.add("bg-red-600", "text-white", "font-bold", "border-blue-600", "border-4");
        }else{
            bars[i].classList.remove("bg-red-600", "text-white", "font-bold", "border-blue-600", "border-4");
        }
    }
} 

setInterval(getTime, 1000);
