
// Natsu Deguchi

const form      = document.getElementById('form');
const message   = document.getElementById('message');
const output    = document.getElementById('output');

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const studentID = document.getElementById('studentID');
const password  = document.getElementById('password');
const courses = document.getElementById('courses');

const studentNumberRegEx = /^a0[0-9]{7}$/i;
                          
let regexObject = RegExp(studentNumberRegEx);



// message.style.display = "none";

form.addEventListener("submit", validateForm);

function validateForm( event ){


    let detectErrors = false;

    output.innerHTML  = "";
    message.innerHTML = "";

    
    if(firstname.value.trim().length === 0){

        message.style.display = "block";
        message.innerHTML += `<p><strong class="important2"> ERROR!! </strong> You must fill the Fisrt name.</p>`;

        firstname.classList.add("error_highlights");

        detectErrors = true;
    }else{
        firstname.classList.remove("error_highlights");
    }


    if(lastname.value.trim().length === 0){

        message.style.display = "block";
        message.innerHTML += `<p><strong class="important2"> ERROR!! </strong> You must fill the Last name.</p>`;

        lastname.classList.add("error_highlights");

        detectErrors = true;
    }else{
        lastname.classList.remove("error_highlights");
    }


    if(studentID.value.trim().length === 0){

        message.style.display = "block";
        message.innerHTML += `<p><strong class="important2"> ERROR!! </strong> You must fill the BCIT student ID.</p>`;

        studentID.classList.add("error_highlights");

        detectErrors = true;

    }else if(regexObject.test( studentID.value )){
     
        studentID.classList.remove("error_highlights");
    }else{

        message.style.display = "block";
        message.innerHTML += `<p><strong class="important2"> ERROR!! </strong> You must enter A0xxxxxxx number.</p>`;

        studentID.classList.add("error_highlights");

        detectErrors = true;
    }


    if(password.value.trim().length === 0){

        message.style.display = "block";
        message.innerHTML += `<p><strong class="important2"> ERROR!! </strong>You must fill the Password.</p>`;

        password.classList.add("error_highlights");

        detectErrors = true;
    }else{
        password.classList.remove("error_highlights");
    }


    if(courses.value == "Choose your course:"){

        message.style.display = "block";
        message.innerHTML += `<p><strong class="important2"> ERROR!! </strong>You must select at least one course.</p>`;

        courses.classList.add("error_highlights");

        detectErrors = true;   
        
    }else{

        courses.classList.remove("error_highlights");
    }


    if(detectErrors === true ){
        event.preventDefault();	
    }
}


const displayPassword= document.getElementById("displayPassword");

function showPassword() {

    if (password.type === "text") {
      password.type = "Password";
      displayPassword.value = "Show Password";
    } else {
      password.type = "text";
      displayPassword.value = " Hide Password ";
    }
}
    
