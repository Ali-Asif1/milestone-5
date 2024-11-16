var form = document.getElementById('form');
var resumeDisplay = document.getElementById('resume');
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var fName = document.getElementById('fname').value;
    var contact = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // working on image display
    var image = document.getElementById('image');
    var imageFile = (_a = image.files) === null || _a === void 0 ? void 0 : _a[0];
    var imageURL = imageFile ? URL.createObjectURL(imageFile) : "";
    var resumeFields = "\n    <h1 contenteditable=\"true\">".concat(fName, "</h1>\n    <div class=\"img-position\">").concat(imageURL ? "<img src=\"".concat(imageURL, "\"  ") : "", "</div>\n    <div class=\"content\">\n    <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Birth Date:</b><span contenteditable=\"true\"> ").concat(dob, "</span></p>\n    </div>\n    \n\n    <h5>Address:</h5>\n    <textarea contenteditable=\"true\" cols=\"20\" rows=\"2\">").concat(address, "</textarea>\n    \n    <h3>Education Information</h3>\n    <textarea contenteditable=\"true\" cols=\"30\" rows=\"5\">").concat(education, "</textarea>\n\n    <h3>Professional Information</h3>\n    <textarea contenteditable=\"true\" cols=\"30\" rows=\"5\">").concat(experience, "</textarea>\n\n    <h3>Skills</h3>\n    <textarea contenteditable=\"true\" cols=\"30\" rows=\"5\">").concat(skills, "</textarea>\n    ");
    resumeDisplay.innerHTML = resumeFields;
    // working on reset
    var reset = document.getElementById('reset');
    reset === null || reset === void 0 ? void 0 : reset.addEventListener('click', function () {
        form.reset();
    });
    // working on pdf
    var pdf = document.getElementById('btn-pdf');
    pdf.addEventListener('click', function () {
        print();
    });
    // display on generate time
    var display = resumeDisplay.style.display = 'block';
    var pdfdisplay = pdf.style.display = 'block';
});
