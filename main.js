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

    document.querySelector("#custom-tip").value =""

)
}

function reviveCustomTipPercentageValue(){
tipPecentage = document.querySelector("#custom-tip").valueAsNumber/100
removeClassButtonSelectted()
caculate()
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
else{
    console.log("Não é possível calcular")
    let tipAmountStrong = querySelector(".amoun strong")
    let tipAmountPerson = bill * tipPecentage/numberOfPeople
    tipAmountStrong.innerText = $${tipAmountPerson.toFixed(2)}

    let totalStong = document.querySelector(".total strong")
    let totalPerson = (bill/numberOfPeople) + tipAmountPerson

    totalStong.innerText = $${totalPerson.toFixed(2)}
}

}