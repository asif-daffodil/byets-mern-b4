const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = "<b>Hello World!</b>";
// myDiv.innerText = "<b>Hello World!</b>";
myDiv.textContent = "Hello World!";

const testFunc = () => {
    const myClass = document.getElementsByClassName("myClass")[0];
    myClass.textContent = "This is a text from js";
}
testFunc();

const myClass2 = document.getElementsByClassName("myClass")[1];
myClass2.textContent = "This is a text from js 2";
myClass2.addEventListener("click", () => alert("ha ha ha"));

const p = document.getElementsByTagName("p")[0];
p.textContent = "This is a paragraph";
p.addEventListener("mouseover", () => {
    p.textContent = "Class e attendance kom";
});
p.addEventListener("mouseout", () => {
    p.textContent = "This is a paragraph";
});




const myOtherId = document.querySelector("#myOtherId");
myOtherId.textContent = "This is a text for my other id";
myOtherId.addEventListener("mouseover", () => {
    myOtherId.style.color = "red";
    myOtherId.style.fontSize = "24px";
    myOtherId.style.fontStyle = "italic"
})
myOtherId.addEventListener("mouseout", () => {
    myOtherId.style.color = "black";
    myOtherId.style.fontSize = "16px";
    myOtherId.style.fontStyle = "normal"
})


const myOtherClass = document.querySelectorAll(".myOtherClass")[0];
myOtherClass.textContent = "This is a text for myOtherClass";

myOtherClass.style.cssText = `
    color: blue;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
`;

const myOtherClass2 = document.querySelectorAll(".myOtherClass")[1];
myOtherClass2.textContent = "This is a text for myOtherClass 2";

const dhaka = document.querySelectorAll(".dhaka");
const areas = ["Dhanmondi", "Mohammadour", "Mirpur", "Farm gate"];
dhaka.forEach((d, i) => {
    d.textContent = areas[i];
});

const bd = document.querySelector("#bd");
bd.style.cssText = `
    width: 300px;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 6px 6px 6px #000;
    background: linear-gradient(to top right, lightgrey, lightblue, lightgreen);
    margin-bottom: 30px;
`;
const h1 = document.createElement("h1");
h1.textContent = "This is a Heading";
const para = document.createElement("p");
para.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit repellendus aliquam recusandae iure magni perferendis ea nulla debitis quasi ullam minus unde tenetur omnis, id quas qui. Adipisci libero, praesentium, magni totam a aperiam, repellat atque enim commodi velit nulla!";
const button = document.createElement("button");
button.textContent = "Go There";
bd.appendChild(h1);
bd.appendChild(para);
bd.appendChild(button);


document.querySelector("#addPara").addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit repellendus aliquam recusandae iure magni perferendis ea nulla debitis quasi ullam minus unde tenetur omnis, id quas qui. Adipisci libero, praesentium, magni totam a aperiam, repellat atque enim commodi velit nulla!";

    document.querySelector("#paraList").appendChild(p);
})

const img = document.querySelector("#img");
const rohi = document.querySelector("#rohi");
const bhram = document.querySelector("#bhram");

rohi.addEventListener("click", () => {
    img.src = "./images/rohinga.jpg";
})
bhram.addEventListener("click", () => {
    img.src = "./images/bbaria.jpg";
})

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const num = document.getElementById("num");

increment.addEventListener("click", () => {
    let val = parseInt(num.textContent)
    num.textContent = ++val;
})
decrement.addEventListener("click", () => {
    let val = parseInt(num.textContent)
    if (val > 0){
        num.textContent = --val;
    }
})

