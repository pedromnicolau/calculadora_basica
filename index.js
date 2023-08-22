function Calcular(o) {
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    if (o == "+") {Somar(n1, n2)}
    if (o == "-") {Subtrair(n1, n2)}
    if (o == "*") {Multiplicar(n1, n2)}
    if (o == "/") {Dividir(n1, n2)}
    if (o == "") {Limpar(n1, n2)}
}

function Somar(n1, n2){
    document.getElementById("resultado").innerHTML = (n1 + n2);
}

function Subtrair(n1, n2){
    document.getElementById("resultado").innerHTML = (n1 - n2);
}

function Multiplicar(n1, n2){
    document.getElementById("resultado").innerHTML = (n1 * n2);
}

function Dividir(n1, n2){
    document.getElementById("resultado").innerHTML = (n1 / n2);
}

function Limpar(n1, n2){
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("resultado").innerHTML = "0";
}
