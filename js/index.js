console.log('Promt commected.');




const showAlert = () => {
    alert('This is alert!')
}

const showConfirmation = () => {
    const decission = confirm('Are you going?');
    console.log(decission);
}
const showPromt = () => {
    const getInput = prompt('Are you ready to go?');
    console.log(getInput);
}

showAlert();
showConfirmation();
showPromt();