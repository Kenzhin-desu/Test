
let myLeads = []
let oldLeads = []
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

 if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
 }

saveBtn.addEventListener("click", function(){
    console.log(tabs[0].url)
})
const tabs = [
    {url: "https://www.facebook.com"}
]



 function render(leads){
    let listItem = ""
    for (let i = 0; i< leads.length; i++) {
    
       // listItem += <li>" + "<a href='" + myLeads[i] + "' target='_black'>" + myLeads[i] + "</a>" + "</li>"
       listItem += `
        <li>
            <a href='${leads[i]}' target='_black'>
                ${leads[i]}
            </a>
        </li>`
        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)*/
        
    }
    ulEl.innerHTML =  listItem
    }
//localStorage.setItem("myleads", "www.awesomesauce.com")
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log( localStorage.getItem("myLeads") )
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

