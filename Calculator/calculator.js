 document.getElementById('calculate').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Cannot divide by zero.';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operation selected.';
                break;
        }
    }

    document.getElementById('result').innerText = result;
});
     