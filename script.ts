
let form = document.getElementById('form') as HTMLFormElement
let resumeDisplay = document.getElementById('resume') as HTMLDivElement


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let fName = (document.getElementById('fname') as HTMLInputElement).value
    let contact = (document.getElementById('phone') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let dob = (document.getElementById('dob') as HTMLInputElement).value
    let address = (document.getElementById('address') as HTMLTextAreaElement).value
    let education = (document.getElementById('education') as HTMLTextAreaElement).value
    let experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    let skills = (document.getElementById('skills') as HTMLTextAreaElement).value


    // working on image display

    let image = document.getElementById('image') as HTMLInputElement
    let imageFile = image.files?.[0]
    let imageURL = imageFile ? URL.createObjectURL(imageFile) : "";


    let resumeFields = `
    <h1 contenteditable="true">${fName}</h1>
    <div class="img-position">${imageURL ? `<img src="${imageURL}"  ` : ""}</div>
    <div class="content">
    <p><b>Contact:</b><span contenteditable="true"> ${contact}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Birth Date:</b><span contenteditable="true"> ${dob}</span></p>
    </div>
    

    <h5>Address:</h5>
    <textarea contenteditable="true" cols="20" rows="2">${address}</textarea>
    
    <h3>Education Information</h3>
    <textarea contenteditable="true" cols="30" rows="5">${education}</textarea>

    <h3>Professional Information</h3>
    <textarea contenteditable="true" cols="30" rows="5">${experience}</textarea>

    <h3>Skills</h3>
    <textarea contenteditable="true" cols="30" rows="5">${skills}</textarea>
    `;


    resumeDisplay.innerHTML = resumeFields


    // working on reset
    let reset = document.getElementById('reset');
    reset?.addEventListener('click', function () {
        form.reset();
    })




    // working on pdf
    let pdf = document.getElementById('btn-pdf') as HTMLButtonElement
    pdf.addEventListener('click', function () {
        print();
    })


    // display on generate time
    let display = resumeDisplay.style.display = 'block';
    let pdfdisplay = pdf.style.display = 'block';



})