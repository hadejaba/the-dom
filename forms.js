// pattern="[A-Za-z]{3}"
//   pattern="[A-Za-z]{3}"
//    maxlength="10"
// pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
// A form with a password field that must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter
// pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
// email pattern



// Defining a function to display error message
function printError(elemID, hintMsg) {
    document.getElementById(elemID).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const mobile = document.contactForm.mobile.value;
    const country = document.contactForm.country.value;
    const gender = document.contactForm.gender.value;
    const hobbies = [];
    const checkboxes = document.getElementsByTagName('hobbies []');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value)
        }
    }
}



// Defining error variables with a default value

var nameErrr = emailErr = moileErr = countryErr = genderErr = false;
//validate name
if (name == " ") {
    printError("nameErr", "Please Enter a Valid Name")
} else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
    } else {
        printError("nameErr", "")
        nameErr = false;
    }
}



// Validate email address

var nameErrr = emailErr = moileErr = countryErr = genderErr = false;
//validate name
if (email == " ") {
    printError("emailErr", "Please Enter a Valid Name")
} else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(email) === false) {
        printError("emailErr", "Please enter a valid name");
    } else {
        printError("emailErr", "")
        emailErr = false;
    }
}


    // Validate mobile number


    // Validate country


    // Validate gender


    // Prevent the form from being submitted if there are any errors

        // Creating a string from input data for preview

        // Display input data in a dialog box before submitting the form