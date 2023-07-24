function calcularSerie() {
    const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    const razon = parseInt(document.getElementById("razon").value);
    const enesimoNumero = parseInt(document.getElementById("enesimoNumero").value);

    let multiplicacion = numeroInicial;
    let resultados = 0;

    for (let i = 1; i <= enesimoNumero; i++) {
        resultados = resultados + multiplicacion;
        multiplicacion *= razon;
    }

    document.getElementById("resultados").innerHTML = resultados;
    document.getElementById("total").innerHTML = "La multiplicación total de la serie es: " + multiplicacion;
}