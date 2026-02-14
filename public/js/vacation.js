document.getElementById('vacation-form').onsubmit = () => {

    clearErrors();

    let isValid = true;

    //validate number of travelers
    let travels = document.getElementById('travels').value;
    if(!travels || travels < 1){
        document.getElementById('err-travels').textContent = 'Please enter a valid number of travelers.';
        isValid = false;
    }

    //validate destination
    let destination = document.getElementById('destination').value;
    if(!destination){
        document.getElementById('err-destination').textContent = 'Please select a destination.';
        isValid = false;
    }

    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i = 0; i < errors.length; i++){
        errors[i].textContent = '';
    }
}