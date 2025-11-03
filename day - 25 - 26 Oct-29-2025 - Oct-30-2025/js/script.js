const myForm = document.querySelector("#myForm");
const countries = document.querySelector("#countries");
const err = document.querySelectorAll(".err");
const errName = document.querySelector(".errName");
const errEmail = document.querySelector(".errEmail");
const errPass = document.querySelector(".errPass");
const errCpass = document.querySelector(".errCpass");
const errGender = document.querySelector(".errGender");
const errSkill = document.querySelector(".errSkill");
const errCountry = document.querySelector(".errCountry");


err.forEach(e => {
    e.style.cssText = `
        color: red;
        font-size: 14px;
        font-style: italic;
        margin: 2px 0 6px;
    `;
});

const createOption = val => {
    const option = document.createElement("option");
    option.setAttribute("value", val);
    option.textContent = val;
    countries.appendChild(option);
}

let data;
const getCountries = async () => {
    const res = await fetch("./js/countryList.json");
    data = await res.json();
    data.forEach(d => {
        createOption(d.name)
    });
}
getCountries();

const genders = ["Male", "Female", "Others"];
const skillsArr = ["HTML", "CSS", "JS", "React.js", "Node.js", "Express.js", "MongoDB"];

myForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(myForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const pass = formData.get("pass");
    const cPass = formData.get("cPass");
    const gender = formData.get("gender");
    const skills = formData.getAll("skills");
    const country = formData.get("country"); 

    if (!name) {
        errName.textContent = "Please write your name";
    }else if(!/^[A-Za-z.\- ]*$/.test(name)) {
        errName.textContent = "Invalid name format";
    }else{
        errName.textContent = "";
    }

    if (!email) {
        errEmail.textContent = "Please write email address";
    }else if(!/^[a-zA-Z0-9._\-%]+@[a-zA-Z0-9\-]{2,}\.[a-zA-Z]{2,}$/.test(email)) {
        errEmail.textContent = "Invalid email address";
    }else{
        errEmail.textContent = "";
    }

    if (!pass) {
        errPass.textContent = "Please provide the password";
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pass)) {
        errPass.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }else{
        errPass.textContent = "";
    }

    if (!cPass) {
        errCpass.textContent = "Please confirm the password";
    }else if (pass !== cPass){
        errCpass.textContent = "Password didn\'t matched";
    }else{
        errCpass.textContent = "";
    }

    if (!gender) {
        errGender.textContent = "Please select your gender";
    }else if(genders.indexOf(gender) == -1){
        errGender.textContent = "Invalid gender";
    }else{
        errGender.textContent = "";
    }

    if (skills.length === 0) {
        errSkill.textContent = "Please select your skills";
    }else if(skills.some(e => !skillsArr.includes(e))){
        errSkill.textContent = "Invalid skills";
    }else{
        errSkill.textContent = "";
    }

    if (!country) {
        errCountry.textContent = "Please select your country";
    }else if (!data.find(d => d.name === country)) {
        errCountry.textContent = "Invalid country";
    }else{
        errCountry.textContent = "";
    }

})