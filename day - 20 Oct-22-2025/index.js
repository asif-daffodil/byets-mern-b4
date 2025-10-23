const day = 50; 
if(day > 20 && day <= 30){
    console.log("1/3rd class is finished!");
}else if(day > 30 && day <= 40){
    console.log("1/2 class is finished!");
}else if(day > 40 && day <= 60){
    console.log("2/3 class is finished!");
}else{
    console.log("Ajek jatio nirapod shorok dibosh!");
}


const pa = 18;
const pg = "Female";

if(pg === "Male"){
    if(pa >= 21){
        console.log("The person is eligible for marriage");
    }else{
        console.log("The person is not eligible for marriage");
    }
}else if (pg === "Female") {
    if(pa >= 18){
        console.log("The person is eligible for marriage");
    }else{
        console.log("The person is not eligible for marriage");
    }
}

// Electric bill calculation (For first 50 units – 3.50 tk/unit For next 100 units – 4.00 tk/unit For next 100 units – 5.20 tk/unit For units above 250 – 6.50 tk/unit)

const unit = 275;
let totalBill = 0;

if (unit <= 50) {
    totalBill = unit * 3.50; 
    console.log(`Total bill is ${totalBill}`);
}else if (unit <= 150) {
    totalBill = (50 * 3.50) + ((unit - 50) * 4); 
    console.log(`Total bill is ${totalBill}`);
}else if (unit <= 250) {
    totalBill = (50 * 3.50) + (100 * 4) + ((unit - 150) * 5.20); 
    console.log(`Total bill is ${totalBill}`);
}else {
    totalBill = (50 * 3.50) + (100 * 4) + (100 * 5.20) + ((unit - 250) * 6.50); 
    console.log(`Total bill is ${totalBill}`);
}


const person = "Zihad";
const city = "Lokkhipur";

// const sentence = person + " lives in " + city + ".";
const sentence = `${person} lives in ${city}.`;
console.log(sentence);


const d = "Wednesday";
switch (d) {
    case "Sunday":
    console.log("Today is Sunday");
    break;

    case "Monday":
    console.log("Today is Monday");
    break;

    case "Tuesday":
    console.log("Today is Tuesday");
    break;

    case "Wednesday":
    console.log("Today is Wednesday");
    break;

    case "Thursday":
    console.log("Today is Thursday");
    break;

    case "Friday":
    console.log("Today is Friday");
    break;

    case "Saturday":
    console.log("Today is Saturday");
    break;

    default:
    console.log("You are not in this world!");
}