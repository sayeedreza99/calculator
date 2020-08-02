function getHistory() {
    return document.getElementById('history-value').innerText;
}
function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}
function getOutPut() {
    return document.getElementById('output-value').innerText;
}
function printOutPut(num) {
    if (num == "") {
        document.getElementById('output-value').innerText = num;
    }
    else {
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    if (num == '-') {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}
function reverseNumberFormate(num) {
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == 'clear') {
            printHistory("");
            printOutPut("");
        }
        else if (this.id == 'backspace') {
            var output = reverseNumberFormate(getOutPut()).toString();
            if (output) {//if output has value
                output = output.substr(0, output.length - 1);
                printOutPut(output);
            }
        }
        else {
            var output = getOutPut();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                //condition ? true/false
                output = output == "" ?
                    output : reverseNumberFormate(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutPut(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutPut("")
                }
            }

        }
    })
}
var number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormate(getOutPut());
        if (output != NaN) {//if output is number
            output = output + this.id;
            printOutPut(output);
        }

    })
}