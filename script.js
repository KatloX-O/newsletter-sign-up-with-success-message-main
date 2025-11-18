const form = document.getElementById('subscription-form');
const submit = document.getElementsByClassName('submit');
const primary = document.querySelector('.primary');
const secondary = document.querySelector('.secondary');
const span = document.getElementById('emailThanks');
const dismiss = document.querySelector('.dismiss');

form.addEventListener('submit', (e) =>{
    const input = document.getElementById('email').value.trim();
    const error = document.getElementById('error-message');

    let isValid = true;

    console.log(error)

    if(input === ""  || !validateEmail(input)){
        error.textContent = "Valid email Required"
        isValid = false;
    }else{
        error.textContent = ""
        isValid = true;
    }
    
    if(isValid){
       console.log('valid')
       e.preventDefault();
       primary.style.display = 'none';
       secondary.style.display = "flex";
       span.textContent = input;
    }else{
        console.log('Not valid')
        e.preventDefault();
    }
    
})

dismiss.addEventListener('click', (e) =>{
    if(primary.style.display = 'flex'){
     secondary.style.display = "none";
    }else if(primary.style.display = 'none'){
        secondary.style.display = "flex";
    }    
}
)

function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
    }


