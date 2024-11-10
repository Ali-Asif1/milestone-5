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
    
    let resumeFields = `
    
    <center><h1><b>Resume</b></h1></center>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${fName}</span></p>
    <p><b>Contact:</b><span contenteditable="true">${contact}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>DOB:</b><span contenteditable="true">${dob}</span></p>
    <p><b>Address:</b><span contenteditable="true">${address}</span></p>
    
    <h3>Education Information</h3>
    <p contenteditable="true">${education}</p>
    
    <h3>Professional Information</h3>
    <p contenteditable="true">${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
    
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeFields
    } else {
        console.error('some fields are missing');
    }
    

    // resume display on generate time
    let display = resumeDisplay.style.display= 'block';


    // working on reset
    let reset =document.getElementById('reset');
    reset?.addEventListener('click', function(){
        form.reset();
    })
    
    
    // working on pdf
    let pdf= document.getElementById('btn-pdf') as HTMLButtonElement
    pdf.addEventListener('click', function(){
        window.print();
    })
    
    
})
