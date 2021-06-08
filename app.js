document.getElementById('greeting').innerHTML = 'hello, world';
var x = document.querySelectorAll("li");

for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "yellow";
}

var newImage = document.createElement('img');
newImage.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'
document.getElementById("greeting").appendChild(newImage);

var newLi = document.createElement('ul');
newLi.id = "to-do-items";
document.body.appendChild(newLi);

var li = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


newLi.appendChild(li);
li.appendChild(document.createTextNode("Make coffe "));

li1.appendChild(document.createTextNode("Take a Shower"));
newLi.appendChild(li1);

li2.appendChild(document.createTextNode("Breakfast"));
li1.appendChild(li2)

li3.appendChild(document.createTextNode("Go to work"));
li2.appendChild(li3)

li4.appendChild(document.createTextNode("Come Back Home"));
li3.appendChild(li4)

var removeDiv = document.getElementById("ghosting");
removeDiv.onmouseover = function () {
    removeDiv.remove();
}

var resizeDiv = document.getElementById("resize");
resizeDiv.onmouseover = function () {
    resizeDiv.style.width = "400px";
}


//part two

// Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.

// Change the image to be the most recently clicked food item.

// When the gray div is moused over, it's removed from the DOM.

// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.

// When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.

// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"

// BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"

