const studentList = {
    stdNo1 : "Mridol",
    stdNo2 : "Rian",
    stdNo3 : "Harun",
    stdNo4 : "Ammu",
    allStudent : ["Mridol", "Rian", "Harun", "Ammu"],
    stdFunc: () => "Student function",
    stdArea : {
        Mridol : "Keraniganj",
        Rian: "Khulna",
        Harun: "Shirajganj",
        Ammu: "Shatkhira"
    }
}

// console.log(studentList.stdNo1);
// console.log(studentList["stdNo2"]);
// console.log(studentList.stdNo1 + " " + studentList.stdNo2 + " " + studentList.stdNo3 + " " + studentList.stdNo4);
// console.log(`${studentList.stdNo1} ${studentList.stdNo2} ${studentList.stdNo3} ${studentList.stdNo4}`);

// for(let k in studentList) {
//     console.log(k + " = " + studentList[k]);
// }

// for (let val of studentList.allStudent) {
//     console.log(val);
// }

// console.log(studentList.stdFunc());
// console.log(studentList);
// const newStd = JSON.stringify(studentList);
// console.log(newStd);
// console.log(JSON.parse(newStd));
// isNaN
// parseInt("123")
// parseFloat("123.50")

console.log(studentList.stdArea.Harun);

