var form = document.getElementById('form');
var resumeDisplay = document.getElementById('resume');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fName = document.getElementById('fname').value;
    var contact = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeFields = "\n    \n    <center><h1><b>Resume</b></h1></center>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(fName, "</span></p>\n    <p><b>Contact:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>DOB:</b><span contenteditable=\"true\">").concat(dob, "</span></p>\n    <p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n    \n    <h3>Education Information</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h3>Professional Information</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeFields;
    }
    else {
        console.error('some fields are missing');
    }
    // working on reset
    var reset = document.getElementById('reset');
    reset === null || reset === void 0 ? void 0 : reset.addEventListener('click', function () {
        form.reset();
    });
    // working on pdf
    var pdf = document.getElementById('btn-pdf');
    pdf.addEventListener('click', function () {
        window.print();
    });
    // display on generate time
    var display = resumeDisplay.style.display = 'block';
    var pdfdisplay = pdf.style.display = 'block';
});
