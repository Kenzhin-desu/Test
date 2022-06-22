
let myLeads = []


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//localStorage.setItem("myleads", "www.awesomesauce.com")
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log( localStorage.getItem("myLeads") )
})

function renderLeads(){
let listItem = ""
for (let i = 0; i< myLeads.length; i++) {

   // listItem += <li>" + "<a href='" + myLeads[i] + "' target='_black'>" + myLeads[i] + "</a>" + "</li>"
   listItem += `
    <li>
        <a href='${myLeads[i]}' target='_black'>
            ${myLeads[i]}
        </a>
    </li>`
   console.log(listItem)
    /*const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/
    
}
ulEl.innerHTML =  listItem
}