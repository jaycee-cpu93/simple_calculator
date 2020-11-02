let operand = [];   /* STEP 3:  Created an array called operand 
                                that we can store all values pressed on the buttton there */
                                 
//STEP 4: I created separate functions each that will returns all operations 
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

    /* let us assume that i have a simple Arithmetic stuff like this,
    EXAMPLE 1:
     let operand = ["5", "8", "0" ,"+", "6", "7", "9"] */

//STEP 5:to get the variables from field, that is numbers in the array firstNumber, secondNumber and the operatorIndex. 
    function getVariableFromField(){
//STEP 5(a): fetch out any of this operator +/-*
        let operator
        //loop through the imagined array in order to fetch out any of this operator +/-* .
        operand.forEach(element => {
            //if the element will have is not a number, 
            //then make operator to be equal to the element, then the expected output should be +/-*
            if (isNaN(element)) {
            operator = element //expected output is "+"" from EXAMPLE 1
            }
        });
//STEP 5(b): we are trying to get the index of the operator and it is always in numbers(3) from EXAMPLE 1:
        //don't forget indexOf() is a method, just like join()
        let operatorIndex = operand.indexOf(operator) // expected output is 3 from EXAMPLE 1
        
//step 5(c) and (d)
        //first number after we have joined the array
        let firstNumber = parseInt(operand.slice(0, operatorIndex).join(""))
        let secondNumber = parseInt(operand.slice(operatorIndex +1, operand.length).join(""))
       // let thirdNumber = parseInt(operand.slice(operatorIndex +1, operand.length).join(""))

        console.log([firstNumber, secondNumber, operatorIndex])

        return [firstNumber, secondNumber, operatorIndex]
        //it will return an array that i collect firstNUmber and secondNumber
    }

//STEP 1: create an event listener
window.addEventListener("click",(e) =>{
//STEP 2: fetch all the keys into the input field
    let input_field = document.getElementById("input_field")
//STEP 2(a):
            /* to know the exact key or numbers you have pressed,
            trim means you to avoid the space between the operands/numbers/signs */
    let key = e.target.textContent.trim() 

   /* when you press a key/value of the buttons below the input field, 
   then the key/value will display on the input_field. 
   input_field.value = key  */
   input_field.value = key

   //push(e.target.textContent) to the operand which is the empty array in line 1

//STEP 4(b): 
   /* Why do we have an if statement? because i do not want the "=" to be added to secondNumber part in the array.
   so i want the "=" to be out of the Array. simple as ABC, further explanation, so if key is not equal "=" then 
   push the firstNumber, Operator, secondNumber into the array excluding "=" */
   if(key !== "=") {
       operand.push(key)
   }
    
    //i console log the operand to see it on the console what i am pushing into the array
    console.log(operand)

    
    console.log(key)
   //console.log(e)

////STEP 3(b):
              /* so that when we want to add to the input field, it will add to the empty ""
                that is why the value is empty. */
    input_field.value = ""

//STEP 3(a): THIS WILL MAKE US HAVE MORE THAN ONE NUMBERS/SIGNS ON THE DISPLAY SCREEN.
    operand.forEach(element => {
        input_field.value += element
        
    });
    /* operand[0] //7
        operand[1] // +
        operand[2] // 2
        operand[3] // "=" */

//Previous step four: GOTO TO STEP 5 FOR Clarification 
        /* {//this ==> let firstOperand = operand[0] the value of result will be in string i.e "7" or "78" }, 
        so you have to convert the result(the string) into a real number by adding parseInt() 
        let firstOperand = parseInt(operand[0]) the same thing goes for secondOperand
        let firstOperand = parseInt(operand[0])
        let secondOperand = parseInt(operand[2]) */
        
        /* the values of the firstNUmber and secondNumber in the array above (in step 5(c)and(d))
        so firstNUmber and secondNumber will be stored in firstOperand, secondOperand */
//STEP 6: Continuation of step 5(c) and (d)
       /*  i am trying to store the array of firstNumber, secondNumber and the operatorIndex from STEP 5 
        into the variable of firstNumberSecondNumberOperator .*/

        let firstNumberSecondNumberOperator = getVariableFromField()

        console.log(firstNumberSecondNumberOperator)

        //e.g let us compute 768+300 = 
        /*  7 = index0, 6 = index1, 8 = index2
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
//STEP 6(a)
        //this is for + - / *
        let operation = operand[firstNumberSecondNumberOperator[2]]

//STEP 4(a): CREATED IF STATEMENT TO CALLBACK THE FUNCTIONS IN STEP 4
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
        
//STEP 6(b)
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

//STEP 7 Last(FINAL OUTPUT OF THE ARTHIMETIC BELOW): It will overwrite the previous result(in a sweet way)
        input_field.value = `${firstOperand} ${operation} ${secondOperand} = ${answer}` 
    }


//STEP 8: These line of code will clear the screen
 //Whenever i press the button C
 //i want to clear the input_field (calculator display)
 
    if (key ==="C") {
        //this will empty the input_field (calculator display), after i also need to empty/clear the array 
        input_field.value = "";
        //this will empty the array like this
        operand = []
    }
})



