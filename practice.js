console.log("wassup");

function myFunc() {
    let note = document.createElement("IMG");
    note.setAttribute("src", "https://images.unsplash.com/photo-1568299484622-c9ffd64093ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    note.setAttribute("width", "250");
    note.setAttribute("height", "215");
    note.setAttribute("border", "2px solid black");
    note.setAttribute("alt", "image of kpop girl group red velvet");
    document.body.appendChild(note);
}

function functionTwo() {
    let para = document.createElement("p");
    let text = document.createTextNode("so tell your boyfriend, if he says he's got beef, that i'm a vegetarian and i ain't f***in' scared of him");
    para.appendChild(text);
    document.getElementById("myDiv").appendChild(para);
}

function functionThree() {
    let node = document.createElement("li");
    let textOne = document.createTextNode("mountain dew");
    node.appendChild(textOne);
    document.getElementById("myList").appendChild(node);
}






// create form, get method, name form
// give it one value, text. ask the user a question
// add a button
// add two html attributes for user input and two pseudo classes
// the data should store in the url
// slack april the finished form