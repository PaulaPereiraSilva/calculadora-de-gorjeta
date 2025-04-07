let bill = 0
let TipPercentage = 0
let numberOfPeople = 0

let BillInput = document.querySelector ("#Bill")
BillInput.addEventListener("input", reciveBillVallue)

let numberOfPeopleInput = document.querySelector("#People")
numberOfPeople.addEventListener("input", reciveNumberOfPeopleValue)

function reciveBillVallue(){
bill = bill.valueasNumber
caculate()
}

function reciveNumberOfPeopleValue(){
numberOfPeople = numberOfPeopleInput.valueasNumber
caculate()
}

function caculate(){
if (bill !== 0 && tipPecentage !== 0 && numberOfPeople !== 0){
    console.log("Não é possível calcular")
}

}