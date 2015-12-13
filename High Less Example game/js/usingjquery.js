/**
 * Created by prasoon on 12/13/15.
 */
$("#submissionForm").on('submit', function(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }
    if(e.preventDefault){
        e.preventDefault();
    }
    var value = $("#inputBox").val();
    if(window.random == value){
        $("#resultContainer").html("You Win!!!!");
        $("#resultContainer").css('color', 'green');
    }else if(window.random > value){
        $("#resultContainer").html("Number is greater than the Input");
    }else{
        $("#resultContainer").html("Number is less than the Input");
    }

});
