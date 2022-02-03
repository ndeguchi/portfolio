
// navigation bar
const menu = document.querySelector('.menu');

menu.addEventListener('click', function() {
    this.classList.toggle('toggle');
});

//homepage effect
$('.fade').fadeIn(2000);



//the form and form control elements
const form          = document.querySelector("form");
const fname         = document.getElementById("firstname");
const lname         = document.getElementById("lastname");
const email         = document.getElementById("email");
const phone1        = document.getElementById("num1");
const phone2        = document.getElementById("num2");
const phone3        = document.getElementById("num3");
const MM            = document.getElementById("MM");
const DD            = document.getElementById("DD");
const YY            = document.getElementById("YYYY");
const partySize     = document.getElementById("partySize");
const time          = document.getElementById("time");


//interface HTML elements 
const errorMessagesfname       = document.getElementById("message1");
const errorMessageslname       = document.getElementById("message2");
const errorMessageEmail        = document.getElementById("message3"); 
const errorMessagesphone       = document.getElementById('message4');
const errorMessagesdate        = document.getElementById('message5');
const errorMessagespartysize   = document.getElementById("message6");
const errorMessagestime        = document.getElementById('message7');


form.addEventListener("submit", function( event ){
    
    let errorsDetected = false;
    errorMessagesfname.innerHTML = "";

   //validation for first name
    if( fname.value === ""){

        errorMessagesfname.innerHTML += `Please enter a first name`;        
        errorsDetected = true;
        fname.classList.add("error_highlight");

    }else{
        
        fname.classList.remove("error_highlight");
    }

    errorMessageslname.innerHTML = "";
    
    //validation for last name
    if( lname.value === ""){
      
        errorMessageslname.innerHTML += `Please enter a last name`;
        lname.classList.add("error_highlight");
        errorsDetected = true;

    }else{
        
        lname.classList.remove("error_highlight");
    }
   

    errorMessageEmail.innerHTML = "";

    //validation for email address
    if(email.value === ""){

        errorMessageEmail.innerHTML += `Please enter an email address`;
        email.classList.add("error_highlight");
        errorsDetected = true;

    }else{
        errorMessageEmail.innerHTML = "";

        const regexObject = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        if(regexObject.test(email.value.trim()) !== true){

            errorMessageEmail.innerHTML += `Please enter a valid email address`;
            email.classList.add("error_highlight");
            errorsDetected = true;

        }else{

            email.classList.remove("error_highlight");
            
        }    
    }   

    errorMessagesphone.innerHTML = "";

    const validNumber = new RegExp(/^\d{3}$/);
    const validNumber2 = new RegExp(/^\d{4}$/);

    //validation for phone number
    if(phone1.value === "" || validNumber.test(phone1.value) != true){

        errorMessagesphone.innerHTML += `Please enter a valid phone number`;
        phone1.classList.add("error_highlight");
        
        errorsDetected = true; 

    }else{

        phone1.classList.remove("error_highlight");
    }

    errorMessagesphone.innerHTML = "";

    if(phone2.value === "" || validNumber.test(phone2.value) != true){

        errorMessagesphone.innerHTML += `Please enter a valid phone number`;
        phone2.classList.add("error_highlight");
        errorsDetected = true; 
        console.log("error");

    }else{

        phone2.classList.remove("error_highlight");
    }

    errorMessagesphone.innerHTML = "";
    
    if(phone3.value === "" || validNumber2.test(phone3.value) != true){

        errorMessagesphone.innerHTML += `Please enter a valid phone number`;
        phone3.classList.add("error_highlight");
        errorsDetected = true; 

    }else{
       
        phone3.classList.remove("error_highlight");
    }

    errorMessagesdate.innerHTML = "";

    const validDD = RegExp(/^(0[1-9]|[12][0-9]|3[01])$/);
    const validMM = RegExp(/^(0[1-9]|1[0-2])$/); 

    //validation for date
    if(MM.value === "" || validMM.test(MM.value) != true){

        errorMessagesdate.innerHTML = `Please enter a valid date`;
        MM.classList.add("error_highlight");
        errorsDetected = true; 
    }else{
        MM.classList.remove("error_highlight");
    }

    errorMessagesdate.innerHTML = "";

    if(DD.value === "" || validDD.test(DD.value.trim()) != true){

        errorMessagesdate.innerHTML = `Please enter a valid date`;
        DD.classList.add("error_highlight");
        errorsDetected = true; 
    }else{
        DD.classList.remove("error_highlight");
    }

   
    errorMessagespartysize.innerHTML = "";

    //validation for party size
    if( partySize.value === "Choose number:"){       
       
        errorMessagespartysize.innerHTML += `Please choose a number of party  from the drop down list`;
        partySize.classList.add("error_highlight");
        errorsDetected = true;
    }else{
       
        partySize.classList.remove("error_highlight");
        errorMessagespartysize.style.display = "none";
    }


    errorMessagestime.innerHTML = "";

    //validation for time
    if( time.value === "Choose time:"){       
       
        errorMessagestime.innerHTML += `Please choose time from the drop down list`;
        time.classList.add("error_highlight");
        errorsDetected = true;
    }else{
        
        time.classList.remove("error_highlight");
        errorMessagestime.style.display = "none";
    }
    

    if(  errorsDetected ){        
    
        event.preventDefault();
    }
    
});



