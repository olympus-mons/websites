/**
 * Created by prasoon on 12/13/15.
 */
var submitBox = document.getElementById("submitVal");
var resultContainer = document.getElementById("resultContainer");
submitBox.addEventListener("click", function(){
    var inputVal = document.getElementById("inputBox").value;
    if(inputVal == ""){
        resultContainer.innerHTML = "Please Provide a Value";
        return;
    }
    if(window.random == inputVal){
        resultContainer.innerHTML = "You Win!!!!";
        resultContainer.style.color = 'green';
    }else if(window.random > inputVal){
        resultContainer.innerHTML = "Number is greater than the Input";
    }else{
        resultContainer.innerHTML = "Number is less than the Input";
    }
});