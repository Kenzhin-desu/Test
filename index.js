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


/* // purchase something wemt wrong
let errorEl = document.getElementById("error-el")

console.log(errorEl)

function purchase() {

    let errorMessage = "something went wrong"

    errorEl.textContent = errorMessage
}
*/
/*    // calculator
    let num1 = 8
    let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")


function add() {
    let add1 = num1 + num2 + " - "
    sumEl.textContent += add1

}

function subtract() {
    let sub1 = num1 - num2 + " - "
    sumEl.textContent += sub1
}

function divide() {
    let div1 = num1 * num2 + " - "
    sumEl.textContent += div1
}

function multiply() {
    let multi1 = num1 / num2 + " - "
    sumEl.textContent += multi1
}
*/ /*
let age = 50

if(age < 100) {
    console.log("You are not elegible")
} else if (age === 100) {
    console.log("here is your birthday card from  the king!")
} else {
    console.log("You've already gotten one")
}
*/
//"if" practic
let firstCard = 5
let secondCard = 2
let sum = firstCard +secondCard
let hasBlackJack = false
let isAlive = true //out of the game
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
// let sumEl = document.getElementById(".sum-el") // class tag
let sumEl = document.querySelector("#sum-el") //id tag
let cardEl = document.querySelector("#card-el")


function startGame() {
    cardEl.textContent += firstCard + " " + secondCard;
    sumEl.textContent += sum

    if (sum < 21) {
        message ="do you want to draw another card? "
    } else if (sum === 21) {
        message = "Naol! you've got BlackJack! "
        hasBlackJack = true
    } else if (sum > 21) {
        message = "I'm sorry, you've lost your money."
        isAlive = false
    }
    messageEl.textContent = message
    
}

function  newcard() {
    console.log("Drawing a new card")
}

