var friends = ['Javi', 'Alvaro', 'Juan', 'Jesus', 'Alicia', 'Marta', 'Diego', 'Michael', 'Kevin', 'David'];

// $(document).ready(function () {
//     var button = $('<input id ="button" type="button" class="btn btn-primary" value="Button Load Auto"/>');
//     $("body").append(button);
//     var previusColor = '#000000';
//     $("div.color").mouseover(function () {
//         var randomRed = Math.floor(Math.random() * 255);
//         var randomGreen = Math.floor(Math.random() * 255);
//         var randomBlue = Math.floor(Math.random() * 255);
//         var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
//         $(this).css("background-color", randomColor);
//     });

//     $("div.color").mouseout(function () {
//         $(this).css("background-color", previusColor);
//     });

//     $("p").click(function () {
//         var randomRed = Math.floor(Math.random() * 255);
//         var randomGreen = Math.floor(Math.random() * 255);
//         var randomBlue = Math.floor(Math.random() * 255);
//         var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
//         $(this).css("color", randomColor);
//     });

// });

function showMessage() {
        var message =document.getElementById('fmessage').value
        alert(message);
}

// function addSpan() {
//     $("div.span").append('<span>Eduardo Lopez Anta</span>');
// }

// function addFriends() {
//     var cList = $('ul')
//     $.each(friends, function (i) {
//         var li = $('<li/>')
//             .addClass('ui-menu-item')
//             .attr('role', 'menuitem')
//             .appendTo(cList);
//         var a = $('<a/>')
//             .addClass('ui-all')
//             .text(this)
//             .appendTo(li);
//     });
// }

function addButton() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Button On Load";
    button.setAttribute("onclick", "alertMesage()");
    document.body.appendChild(button);

}

function alertMesage(){
    alert('test');
}