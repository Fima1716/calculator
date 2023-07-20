
let x = ''
let y = ''
let calculationResult = ''
let operationSign = null


let displayResult = document.getElementById("result")
let buttonNumbers = document.querySelectorAll('[id ^= "btn_number_"]')

function numberClick(number) {
    if (!operationSign) {
        if ((number != '.') || (number == '.' && !x.includes(number))) { 
            x += number
        }
        displayResult.innerHTML = x
    } else {
        if ((number != '.') || (number == '.' && !y.includes(number))) { 
            y += number
            displayResult.innerHTML = y      
        }
    }
}


buttonNumbers.forEach(button => {
    button.onclick = function() {
        const digitValue = button.innerHTML
        numberClick(digitValue)
    }
})


document.getElementById("multiplication").onclick = function() { 
    if (x === '') return
    operationSign = 'x'
}
document.getElementById("sum").onclick = function() { 
    if (x === '') return
    operationSign = '+'
}
document.getElementById("minus").onclick = function() { 
    if (x === '') return
    operationSign = '-'
}
document.getElementById("division").onclick = function() { 
    if (x === '') return
    operationSign = '/'
}


document.getElementById("clear").onclick = function() { 
    x = ''
    y = ''
    operationSign = ''
    calculationResult = ''
    outputElement.innerHTML = 0
}


document.getElementById("equal").onclick = function() { 
    if (x === '' || y === '' || !operationSign)
        return
        
    switch(operationSign) { 
        case '*':
            calculationResult = (+x) * (+y)
            break;
        case '+':
            calculationResult = (+x) + (+y)
            break;
        case '-':
            calculationResult = (+x) - (+y)
            break;
        case '/':
            calculationResult = (+x) / (+y)
            break;
    }
    
    a = calculationResult.toString()
    b = ''
    operationSign = null

    displayResult.innerHTML = a
}