// document.getElementById("count-el").innerText

//let firstBatch = 5
//let secondBatch = 7

//let count = firstBatch * secondBatch
 


//convert dog age 
/*
let myAge = 15

let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)
*/
// create bonus points
/*
let BonusPoints = 50
console.log(BonusPoints)

BonusPoints = BonusPoints + 50
console.log(BonusPoints)

BonusPoints = BonusPoints - 25
console.log(BonusPoints)

BonusPoints = BonusPoints + 70


console.log(BonusPoints)
*/
//function
/*
function increment()   {
    console.log ("the button was clicked")
}
*/
/*
function theMeaningOfLife() {
    console.log(42)
}
theMeaningOfLife()
*/
/*
//create a function that increments the lapsCompeted variable by one
let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
    

}
incrementLap()
incrementLap()
incrementLap() //the output should be 3

console.log(lapsCompleted) */
/*
// DOM or Document object Model is how you use JavaScript to modify a website
    let saveEl = document.getElementById("save-el")
    let countEl = document.getElementById("count-el")
    let count = 0

    console.log(saveEl)

function increment()   {          
    count = count + 1 // or count += 1
    countEl.textContent = count // everytime you click the increment button in the app it adds one to the previous number

    }


function save() {
    let count1 = count + " - "
    saveEl.textContent += count1 // saveEl.innerText += count1
    countEl.textContent = 0
    count = 0
} */



let myPoints = 3

function add3Points() {

    myPoints += 3
}


function remove1Points() {

    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

console.log(myPoints)
