function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let result;
    try {
        result = eval(document.getElementById("display").value);
    } catch (error) {
        result = "Erro";
    }
    document.getElementById("display").value = result;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
