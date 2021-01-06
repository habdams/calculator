
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#remainder').addEventListener('click', remainder);
document.querySelector('#multiply').addEventListener('click', multiply);

document.querySelector('#clear').addEventListener('click',clearScreen);


class operation{
    constructor(num1, num2){
      this.num1 = num1;
      this.num2 = num2;
  
    }
  
    add(){
      let result= this.num1+this.num2
      return result;
    }
  
    subtract(){
      let result = this.num1 - this.num2
      return result;
    }
  
     divide(){
      let result = this.num1 / this.num2
      return result;
    }
  
     multiply(){
      let result = this.num1 * this.num2
      return result;
    }

    remainder(){
        let result = this.num1 % this.num2
        return result;
      }
  }



function add(){
    num1 = Number(document.querySelector('#firstNumber').value)
    num2 = Number(document.querySelector('#secondNumber').value)
    result = new operation(num1,num2)
    finalResult = result.add()
   document.querySelector('#displayInput').innerHTML = `${num1} + ${num2}`
   document.querySelector('#displayResult').innerHTML = `${finalResult}`
   
    
}

function subtract(){
    num1 = Number(document.querySelector('#firstNumber').value)
    num2 = Number(document.querySelector('#secondNumber').value)
    result = new operation(num1,num2)
    finalResult = result.subtract()
   document.querySelector('#displayInput').innerHTML = `${num1} - ${num2}`
   document.querySelector('#displayResult').innerHTML = `${finalResult}`
  
    
}

function divide(){
    num1 = Number(document.querySelector('#firstNumber').value)
    num2 = Number(document.querySelector('#secondNumber').value)
    result = new operation(num1,num2)
   finalResult = result.divide()
   document.querySelector('#displayInput').innerHTML = `${num1} / ${num2}`
   document.querySelector('#displayResult').innerHTML = `${finalResult}`
   
    
}

function multiply(){
    num1 = Number(document.querySelector('#firstNumber').value)
    num2 = Number(document.querySelector('#secondNumber').value)
    result = new operation(num1,num2)
   finalResult = result.multiply()
   document.querySelector('#displayInput').innerHTML = `${num1} * ${num2}`
   document.querySelector('#displayResult').innerHTML = `${finalResult}`
  
    
}

function remainder(){
    num1 = Number(document.querySelector('#firstNumber').value)
    num2 = Number(document.querySelector('#secondNumber').value)
    result = new operation(num1,num2)
   finalResult = result.remainder()
   document.querySelector('#displayInput').innerHTML = `${num1} % ${num2}`
   document.querySelector('#displayResult').innerHTML = `${finalResult}`
   
    
}

function clearScreen(){
    document.querySelector('#displayInput').innerHTML = `0`
    document.querySelector('#displayResult').innerHTML = `0`
    document.querySelector('#firstNumber').value = ` `
   document.querySelector('#secondNumber').value = ` `
}