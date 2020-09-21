// Challenge 2: Write your answers here
let newSection = document.createElement("section")
let newTitle = document.createElement("h2")
let newParagraph = document.createElement("p")

newTitle.innerText = "What do I think of JS ?"
newParagraph.innerText = "Javascript can be daunting but also rewarding."

newSection.appendChild(newTitle)
newSection.appendChild(newParagraph)

document.querySelector("article").appendChild(newSection)

let skillsListItem = document.createElement("li")
let educationListItem = document.createElement("li")

skillsListItem.innerText = "Cooking"
educationListItem.innerText = "Datacamp"

document.querySelector("#skills-list").appendChild(skillsListItem)
document.querySelector("#education-list").appendChild(educationListItem)

let newRow = document.createElement("tr")
let newPost = document.createElement("td")
newPost.innerText = "Chairman"

let newCompany = document.createElement("td")
newCompany.innerText = "M3 Corp"

let newYear = document.createElement("td")
newYear.innerText = "2020"

newRow.appendChild(newPost)
newRow.appendChild(newCompany)
newRow.appendChild(newYear)

document.querySelector("#employment-table").appendChild(newRow)

let newImage = document.createElement("img")
newImage.src = "https://frugalminimalistkitchen.com/wp-content/uploads/2019/02/3-768x644.png"

document.querySelector("#skill-images").appendChild(newImage)