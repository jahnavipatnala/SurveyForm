document.getElementById("submit").addEventListener("click", function () {
    // Get form input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    let selectedGender = "";
    for (const gender of genderElements) {
        if (gender.checked) {
            selectedGender = gender.value;
            break;
        }
    }
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Perform basic form validations
    if (
        firstName === "" ||
        lastName === "" ||
        dob === "" ||
        country === "" ||
        selectedGender === "" ||
        profession === "" ||
        email === ""
    ) {
        alert("Please fill out all required fields.");
        return; // Don't proceed if any required field is empty
    }

    // Validate email format using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display the form data in a popup
    const popupContent = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Country: ${country}</p>
        <p>Gender: ${selectedGender}</p>
        <p>Profession: ${profession}</p>
        <p>Email: ${email}</p>
        <p>Mobile Number: ${mobile}</p>
    `;

    document.getElementById("selected-values").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
});

document.getElementById("ok-button").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
document.getElementById("ok-button").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey-form").reset();
});

// Reset form and hide the popup
function reset() {
    document.getElementById("survey-form").reset();
    document.getElementById("popup").style.display = "none";
}
