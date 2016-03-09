$(document).ready(function () {
    var button = $('<input id ="button" type="button" class="btn btn-primary" value="Button Load Auto"/>');
    $("body").append(button);
    var previusColor = '#000000';
    
    $("div.color").mouseover(function () {

        var randomRed = Math.floor(Math.random() * 255);
        var randomGreen = Math.floor(Math.random() * 255);
        var randomBlue = Math.floor(Math.random() * 255);
        var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
        $(this).css("background-color", randomColor);
    });
    
     $("div.color").mouseout(function () {
        $(this).css("background-color", previusColor);
    });

});

$(document).on("click", "#button", function () {
    alert('button clicked!');
});


function showMessage() {
    $("#buttonTextArea").click(function () {
        var message = $("textarea#fmessage").val();
        alert(message);
    });
}
