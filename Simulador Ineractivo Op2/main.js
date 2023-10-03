function currencyConverter() {
  while (true) {
    let currency = prompt(
      "Indica a la moneda que quieres convertir a USD, ejemplo: (MXN, ARS, COL, VES, GTQ) o escribe 'salir' para terminar"
    );

    if (currency.toLowerCase() === "salir") {
      break;
    }

    let value = parseFloat(
      prompt("Indica el monto de dólares que quieres convertir")
    );

    let result = 0;

    switch (currency.toUpperCase()) {
      case "MXN":
        result = (value * 17.62).toFixed(2);
        break;
      case "ARS":
        result = (value * 350.04).toFixed(2);
        break;
      case "COL":
      case "COP":
        result = (value * 4153.65).toFixed(2);
        break;
      case "VES":
        result = (value * 34.2214).toFixed(2);
        break;
      case "GTQ":
        result = (value * 7.86).toFixed(2);
        break;
      default:
        result = "Moneda no Válida";
        break;
    }
    alert(`Tu conversion de dólares a tu moneda es: ${result}`);
  }
}

currencyConverter();
