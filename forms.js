// defining a function to display the error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//defining a function to validate the form

function validateForm() {
    //get all the form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByTagName('hobbies[]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }

    }


    //define error variables with a defaul value
    var nameErr = emailErr = moileErr = countryErr = genderErr = true;


    //validate name
    if (name == " ") {
        printError("nameErr", "Please Enter a Valid Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    //validate email 
    if (email == " ") {
        printError("emailErr", "Please Enter a Valid email ");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //validate mobile

    if (mobile == "") {
        printError("mobileErr", "Please Enter a Valid mobile number");
    } else {
        // Regular expression for basic email validation
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit format");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }




    //validate country
    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;

    }




    //validategender
    if (gender == " ") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }


    //prevent the form from being submitted if there are any errors

    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }

};

