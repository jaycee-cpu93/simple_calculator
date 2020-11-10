let operand = []
//step 1:  create an event listener that will listen to the key
window.addEventListener( "click", (e) => {
    // console.log(e)
    console.log(e.target.textContent) // let us know that we have click maybe a number(1,2,3) or operator(+*), clear(c)

    //step 2: THIS STEP IS NOT CLEAR TO ME,
    if (e.target.textContent !== "=") {
        operand.push(e.target.textContent.trim()) 
    }

    
    console.log(operand)
    
    
    let input_top = document.getElementById("input_top")
    let resultElement = document.getElementById("result")
   


    input_top.value = "" //default screen display should be empty

        //another method the FOR-loop
    // for(let i = 0; i < operands.length; i++) {
    //     input_top.value += operands[i]

    // }
    operand.forEach(element => {
        input_top.value += element
    });


    if (e.target.textContent == "P"){
         operand = [ parseInt(input_top.value) ]
    }
            
    if(e.target.textContent == '='){
        
        console.log("The final answers")

        let firstNumber = 0
        let secondNumber = 0
    
        operand.forEach( item => {
            if ( isNaN( parseInt(item.trim()) ) ) {
                // console.log(item)
                firstNumber =  parseInt( operand.slice(0,operand.indexOf(item)).join(""))
                console.log(firstNumber)
                secondNumber = parseInt(operand.slice(operand.indexOf(item) +1, operand.length).join(""))
                console.log(secondNumber)
                let answer =  performOperation(item, firstNumber, secondNumber) 
                console.log ( answer)
                input_top.value = `${firstNumber} ${item} ${secondNumber} = ${answer}`
            }
        })
    }
         
    //input_top.value = e.target.textContent
    if(e.target.textContent == 'C'){
        input_top.value = ""
        operand = []
    }
        

    function performOperation(operation, operandOne, operandTwo) {

        let result = 0
        if (operation == "+"){
            result = addition(operandOne, operandTwo)
        }
        else if (operation == "-"){
            result = subtraction(operandOne, operandTwo)
        }
        else if (operation == "*"){
            result = multiplication(operandOne, operandTwo)
        }
        else if (operation == "/"){
            result = division(operandOne, operandTwo)
        }
        
        // resultElement.textContent = result
        return result
    }

    function addition (a, b){
        return a + b
    }

    function subtraction (a, b){
        return a - b
    }

    function multiplication (a, b){
        return a * b
    }

    function division (a, b){
        return a / b
    }

})
