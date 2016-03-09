var friends = ['Javi', 'Alvaro', 'Juan', 'Jesus', 'Alicia', 'Marta', 'Diego', 'Michael', 'Kevin', 'David'];

function showMessage() {
    var message = document.getElementById('fmessage').value
    alert(message);
}

function addSpan() {
    document.getElementById('add-span').innerHTML = '<span>Eduardo Lopez Anta</span>';
}

function changeColor() {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    document.getElementById('change-color').style.backgroundColor = randomColor;
}
function returnColor() {
    document.getElementById('change-color').style.backgroundColor = '#000000';
}
function changeColorPara() {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    document.getElementById('para').style.color = randomColor;
}


function addFriends() {
    
    var cList = document.getElementById('friendslist');
    for (var index = 0; index < friends.length; index++) {
        var friend = friends[index];
        cList.innerHTML += '<li>'+friend+'</li>';
    }
}

function addButton() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Button On Load";
    button.setAttribute("onclick", "alertMesage()");
    document.body.appendChild(button);

}

function alertMesage() {
    alert('test');
}