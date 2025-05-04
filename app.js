const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"


const dropdowns = document.querySelectorAll(".dropdown select")
const Fromwala_select = document.querySelector(".Fromwala select")
const fromimg = document.querySelector(".Fromwala img")
const Towala_select = document.querySelector(".Towala select")
const toimg = document.querySelector(".Towala img")

const amounts =document.querySelector(".amount input")
const resultmsg = document.querySelector(".msg #msg")
const convertButton = document.querySelector(".button button")





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


//adding Convert Function
convertButton.addEventListener("click" , async(e) =>{
    e.preventDefault()

    const amount = parseFloat(amounts.value)
    const fromcurr = Fromwala_select.value.toLowerCase()
    const tocurr = Towala_select.value.toLowerCase()




    if(isNaN (amount) || amount<= 0){
        resultmsg.innerText = "Please enter valid amount"
        return
    }
    
        try{
            const response = await fetch(`${BASE_URL}/${fromcurr}.json`)
        const data = await response.json()
        const rate = data[fromcurr][tocurr]

        const result = (amount * rate).toFixed(2)

        resultmsg.innerText = `${amount} ${Fromwala_select.value} = ${result} ${Towala_select.value}`

        }catch(error)
        {
            resultmsg.innerText = "Failed to fetch exchange rate. Please try again.";
        console.error("Error fetching exchange rate:", error);

        }
    
        


    
})








