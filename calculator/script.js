//selecting the input fields
const inputField = document.querySelector('.input input');
//selecting the buttons
const buttons = document.querySelectorAll('.buttons button');
console.log(inputField);
console.log(buttons);

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                expression = eval(expression);
            } catch (error) {
                expression = 'Error';
            }
            inputField.value = expression;
        }
        else if(value === 'C'){
            expression = ''
            inputField.value = ''

        } 
        else {
            expression += value;
            inputField.value = expression;
        }
        
    });
});
