
function calculator(operator){
    let firstInput= document.getElementById("num1").value;
    let secondInput= document.getElementById("num2").value;

    if(firstInput==="" || secondInput===""){
         alert("Please fill the Remaining fields")
        return;
   } 
   let first = Number(firstInput);
   let second = Number(secondInput);
   let result;

   if(operator === '+'){
    result = first + second;
    document.getElementById("result").innerHTML= result;
   }
   if(operator === '-'){
    result = first - second;
    document.getElementById("result").innerHTML= result;
   }
   if(operator === '*'){
    result = first * second;
    document.getElementById("result").innerHTML= result;
   }
   if(operator === '/'){
    result = first / second;
    document.getElementById("result").innerHTML= result;
   }
   if(operator === '%'){
    result = first % second;
    document.getElementById("result").innerHTML= result;
   }
}
function table(){
      let firstInput= document.getElementById("num1").value;
    let secondInput= document.getElementById("num2").value;
     let result="";
    for(let i=1; i<=secondInput;i++){
        result += firstInput + " x " + i + " = " + (firstInput * i) +" <br>" ;
         document.getElementById('result').innerHTML = result;
    }
}
function del(){
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
    document.getElementById("result").innerHTML= "";
}
