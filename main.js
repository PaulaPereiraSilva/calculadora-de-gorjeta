let bill = 0
let TipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

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
function reciveTipPercentageValue(value){
  tipPecentage = value/100

  removeClassButtonSelectted(

    buttonSelected = document.querySelector(#button-$(value
    buttonSelected.classList>addEventListener("button-selected")

)
}
function removeClassButtonSelectted(){
    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}
function caculate(){
if (bill !== 0 && tipPecentage !== 0 && numberOfPeople !== 0){
    console.log("Não é possível calcular")
}

}