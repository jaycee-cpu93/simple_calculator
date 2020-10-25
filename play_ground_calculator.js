let operand = [];

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
    //STET 5:to get the variables from field, that is numbers in the array firstNumber, secondNumber and the operatorIndex. 
    function getVariableFromField(){
        //step 5(a): 
        let operator
        //loop through the array of the number/signs we have.
        operand.forEach(element => {
            //if the element will have is not a number, 
            //then make operator to be equal to the element
            if (isNaN(element)) {
            operator = element 
            }
        });
        //step 5(b):
        let operatorIndex = operand.indexOf(operator)
        //step 5(c) and (d)
        //first number after we have joined the array

        let firstNumber = parseInt(operand.slice(0, operatorIndex).join(""))
        let secondNumber = parseInt(operand.slice(operatorIndex +1, operand.length).join(""))

        console.log([firstNumber, secondNumber, operatorIndex])

        return [firstNumber, secondNumber, operatorIndex]
        //it will return an array that i collect firstNUmber and secondNumber
    }

//STEP 1: create an event listener
window.addEventListener("click",(e) =>{
//STEP 2: fetch the keys to the input field
    let input_field = document.getElementById("input_field")

   /* to know the exact key or numbers you have pressed,
     trim means you to avoid the space between the operands/numbers/signs */
    let key = e.target.textContent.trim() 

   /*  when you press a key/value of the buttons, 
   then the key/value will display on the input_field. 
   input_field.value = key  */
   input_field.value = key

   //push(e.target.textContent) to the operand which is the empty array in line 1

   /* Why do we have an if statement? because i do not want the "=" to be added to secondNumber part in the array.
   so i want the "=" to be out of the Array. simple as ABC, further explanation, so if key is not equal "=" then 
   push the firstNumber, operate, secondNumber into the array excluding "=" */
   if(key !== "=") {
       operand.push(key)
   }
    
    //i console log the operand to see it on the console what i am pushing into the array
    console.log(operand)

    
    console.log(key)
   //console.log(e)

    
// so that when we want to add to the input field it will add to the empty ""
//that is why the value is empty.
    input_field.value = ""

//STEP 3: THIS WILL MAKE US HAVE MORE THAN ONE NUMBERS/SIGNS ON THE DISPLAY SCREEN.
    operand.forEach(element => {
        input_field.value += element
        
        
    });
    /* operand[0] //7
        operand[1] // +
        operand[2] // 2
        operand[3] // "=" */

//STEP 4: CREATED
        /* {//this ==> let firstOperand = operand[0] the value of result will be in string i.e "7" or "78" }, 
        so you have to convert the result(the string) into a real number by adding parseInt() 
        let firstOperand = parseInt(operand[0]) the same thing goes for secondOperand */
        /* let firstOperand = parseInt(operand[0])
        let secondOperand = parseInt(operand[2]) */
        
        /* the values of the firstNUmber and secondNumber in the array above (in step 5(c)and(d))
        so firstNUmber and secondNumber will be stored in firstOperand, secondOperand */

       /*  i am trying to store the array of firstNumber, secondNumber and the operatorIndex from STEP 5 
        into the variable of firstNumberSecondNumberOperator .*/
        let firstNumberSecondNumberOperator = getVariableFromField()
        console.log(firstNumberSecondNumberOperator)
        //e.g let us compute 768+300 = 

        /*  7 = index0
            6 = index1
            8 = index2
            so taking 768 as a big index then index 0 a.k.a firstOperand 
        */
        let firstOperand = firstNumberSecondNumberOperator[0]

        /*  3 = index4
            0 = index5
            0 = index6
            so taking 300 as a big index then index 1 a.k.a secondOperand because of the array in STEP 5,
            checkout the structure in ...return [firstNumber, secondNumber, operatorIndex]      
        */
        let secondOperand = firstNumberSecondNumberOperator[1]
        
        //this is for + - / *
        let operation = operand[firstNumberSecondNumberOperator[2]]

       /*  Below, I refactored all the variables in the Curly braces of each of If "Operation" statement 
       i.e i removed each of the variable, take a look this for example:
       FROM THIS(initial statement) ====> if(operation==="+"){
             let answer = addition(firstOperand, secondOperand)
            console.log(answer)
        }
       TO THIS(final Refactoring) ====> if(operation==="+"){
             answer = addition(firstOperand, secondOperand)
            console.log(answer)
        }
         so i created a single varibale //let answer = 0 below 
         that is going to handle all the operations one by one
         I assign it to Zero(0) because i don't have a value for the firstOperand, secondOperand
         I assume all values are equal to Zero. */
        
        let answer = 0
        /* If I press the = button on the screen then i should get the result of the operands provided they
         are added, subtracted, divided, multipled together,
        both the result and values of the operands are display on the console to test the stuff 
        but it is not really Compulsory...just testing testing testing */
    if (key ==="=") {
        console.log(firstOperand, secondOperand)

        /* When u press = button, you don't know if it is
         add, sub, div, mult button that u want to press, 
         so we need to check that is why we are writing another If statement below */
        if(operation==="+"){
             answer = addition(firstOperand, secondOperand)
        }
        if(operation==="-"){
             answer = subtraction(firstOperand, secondOperand)
        }
        if(operation==="*"){
             answer = multiplication(firstOperand, secondOperand)  
        }
        if(operation==="/"){
             answer = division(firstOperand, secondOperand) 
        }
        console.log(`The final result is ${answer}`) 
        //the below will overwrite the previous result(in a sweet way)
        input_field.value = `${firstOperand} ${operation} ${secondOperand} = ${answer}` 
    }
    //Whenever i press the button C
    //i want to clear the input_field (calculator display)
    
    if (key ==="C") {
        //this will empty the input_field (calculator display), after i also need to empty/clear the array 
        input_field.value = "";
        //this will empty the array like this
        operand = []
    }
})



