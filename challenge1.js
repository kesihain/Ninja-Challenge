// Challenge 1: Write your answers here
let body = document.querySelector("body");
let header = document.querySelector("header");
let h2 = document.querySelectorAll("h2");

body.style.backgroundColor = "darkslategray";
header.style.backgroundImage = "url('https://www.escapistmagazine.com/v2/wp-content/uploads/2020/06/thelastofuspart2-632x395.jpg.webp')";

for (let ele of h2){
    ele.style.color = "darkslategray"
}

document.getElementById("name").innerHTML = "Kesihain Selvarajoo";

let myDescriptions = [
    "I'm a bootcamp attendee at Next Academy",
"I like football and video games"];
let currentDescriptions = document.querySelectorAll(".descriptions");   

for (i=0;i<currentDescriptions.length;i++){
    currentDescriptions[i].innerText = myDescriptions[i]
}

let mySkills = ["Coding", "Engineering", "Football"];

let currentSkills = document.querySelector("#skills-list");
currentSkills.innerHTML = "";

for (let skill of mySkills){
    let listItem = document.createElement("li")
    listItem.innerText = skill
    currentSkills.appendChild(listItem)
}

let myEducation = [ "SMK Ibrahim", "Kolej Matrikulasi Perak", "Monash University", "Next Academy"];

let currentEducation = document.querySelector("#education-list");
currentEducation.innerHTML = "";

for (let education of myEducation){
    let listItem = document.createElement("li")
    listItem.innerText = education
    currentEducation.appendChild(listItem)
}

let myEmployments = [
    {
        position: "Engineering Intern",
        company: "HSS Engineers Bhd",
        period: "Nov-Feb '18",
    },
    {
        position: "Technician",
        company: "Industrial Machine Cutters Sdn Bhd",
        period: "Feb-June '19",
    }
]

let employmentsList = document.querySelector("#employment-table");
employmentsList.innerHTML = "";

for (let employment of myEmployments){
    let row = document.createElement("tr")

    let col1 = document.createElement("td")
    col1.innerText = employment.position

    let col2 = document.createElement("td")
    col2.innerText = employment.company

    let col3 = document.createElement("td")
    col3.innerText = employment.period

    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    employmentsList.appendChild(row)
}

document.getElementById("my-face").src = "https://i.pinimg.com/564x/a9/36/bb/a936bb3fd1177eb5760f94fba0316b53.jpg"
document.querySelector("#skill-images img").src = "https://i.pinimg.com/564x/38/6d/03/386d036922584cc047ad8dbb8af0cfa7.jpg"