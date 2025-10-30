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

const getCountries = async () => {
    const res = await fetch("./js/countryList.json");
    const data = await res.json();
    data.forEach(d => {
        createOption(d.name)
    });
}
getCountries();

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
    }

    if (!email) {
        errEmail.textContent = "Please write email address";
    }

    if (!pass) {
        errPass.textContent = "Please provide the password";
    }

    if (!cPass) {
        errCpass.textContent = "Please confirm the password";
    }

    if (!gender) {
        errGender.textContent = "Please select your gender";
    }

    if (skills.length === 0) {
        errSkill.textContent = "Please select your skills";
    }

    if (!country) {
        errCountry.textContent = "Please select your skills";
    }
    
})