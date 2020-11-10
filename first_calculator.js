let operands = []

    window.addEventListener( "click", (e) => {
        // console.log(e)
        console.log(e.target.textContent)
        operand.push(e.target.textContent) 
        console.log(operand)
        
        
        let input_top = document.getElementById("input_top")
        let resultElement = document.getElementById("result")
        // let clear = document.getElementById("clear")
        // clear.addEventListener('click', (e) => {
            
        // })


        input_top.value = ""
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
            let operandOne = parseInt(operand[0])
            let operandTwo = parseInt(operand[2])
            
            let operation = operand[1]

            let result;

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
            else{"Operator not found"}
            resultElement.textContent = result
            
         }

        //input_top.value = e.target.textContent
        if(e.target.textContent == 'C'){
            input_top.value = ""
            operand = []
        }
            
    })

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
