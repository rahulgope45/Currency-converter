// const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json"
// const URL_Img = "https://flagsapi.com/IN/flat/64.png"
// const dropdowns = document.querySelectorAll(".dropdown select")
// const Fromwala_select = document.querySelector(".Fromwala select")
// const fromimg = document.querySelector(".Fromwala img")



// Fromwala_select.addEventListener("change" ,()=>{

//     fromimg.src = `https://flagsapi.com/${countryList[Fromwala_select.value]}/flat/64.png`

// })




const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json"

const dropdowns = document.querySelectorAll(".dropdown select")
const Fromwala_select = document.querySelector(".Fromwala select")
const fromimg = document.querySelector(".Fromwala img")
const Towala_select = document.querySelector(".Towala select")
const toimg = document.querySelector(".Towala img")






//populating option

for(let select of dropdowns){
    for(let countrycodes in  countryList){
        let newOption = document.createElement("option")
        newOption.innerText= countrycodes
        newOption.value = countrycodes

        if(select.name === "fromselect" && countrycodes === "USD"  ){
            newOption.selected = "selected"
            fromimg.src = `https://flagsapi.com/US/flat/64.png`
        }
        if(select.name === "toselect" && countrycodes === "INR"  ){
            newOption.selected = "selected"
            toimg.src = `https://flagsapi.com/IN/flat/64.png`
        }
        select.append(newOption)
    }

}

//changing Img on click
Fromwala_select.addEventListener("change" ,() =>{
    fromimg.src = `https://flagsapi.com/${countryList[Fromwala_select.value]}/flat/64.png`

})
//changing Img on click
Towala_select.addEventListener("change" ,() =>{
    toimg.src = `https://flagsapi.com/${countryList[Towala_select.value]}/flat/64.png`

})





