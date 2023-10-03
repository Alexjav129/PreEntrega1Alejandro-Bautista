function romanToNormalNumber() {
  while (true) {
    let numRomano = prompt(
      "Ingresa un Número Romano válido para convertirlo en un Número Árabigo, ej: MCMXCIX regresa 1999, o escribe 'salir' para terminar"
    ).toUpperCase();

    if (numRomano.toLowerCase() === "salir") {
      break;
    }

    let sum = 0;
    for (let i = 0; i <= numRomano.length; i++) {
      let before = numRomano[i - 1];
      switch (numRomano[i]) {
        case "I":
          sum += 1;
          break;
        case "V":
          sum = before === "I" ? sum + 3 : sum + 5;
          break;
        case "X":
          sum = before === "I" ? sum + 8 : sum + 10;
          break;
        case "L":
          sum = before === "X" ? sum + 30 : sum + 50;
          break;
        case "C":
          sum = before === "X" ? sum + 80 : sum + 100;
          break;
        case "D":
          sum = before === "C" ? sum + 300 : sum + 500;
          break;
        case "M":
          sum = before === "C" ? sum + 800 : sum + 1000;
          break;
      }
    }
    alert(`El valor de tu número romano es: ${sum}`);
  }
}

romanToNormalNumber();

/* 
Las unicas restricciones para crear el algoritmo son:
I se puede colocar antes de V (5) y X (10) para dar 4 y 9. 
X se puede colocar antes de L (50) y C (100) para dar 40 y 90. 
C se puede colocar antes de D (500) y M (1000) para dar 400 y 900.
*/
