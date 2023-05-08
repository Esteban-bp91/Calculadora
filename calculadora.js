
// Guardamos la pantalla de la calculadora en la variable let screen
let screen = document.getElementById('screen');

// Funcion para insertar los resultados en la pantalla
function insert(value){
  screen.value += value;
}

// Funcion para el boton 'C' para borrar la pantalla
function clearScreen(){
    screen.value = '';
}

// Funcion calcular() para mostrar por pantalla el resultado del cálculo al pulsar el botón igual '='
function calcular(){
  try {
    screen.value = eval(screen.value.replace('^', '**'));
  } catch {
    screen.value = 'Error';
  }
}

// Funcion longMax() para restringir los cálculos de más de 10 dígitos. No funciona
  function longMax(){
    console.log('entra en longmax');
    if (screen.value.length === 11) {
      console.log('Mas de 10 digitos');
      screen.value = screen.value.slice(0, 10);
      alert('No se pueden introducir más de 10 dígitos');
    }
  }

  screen.addEventListener('input', longMax());

  // Funcion calcularLN() para el cálculo del logaritmo neperiano
  function calcularLn(){
    let num;
    try {
      num = screen.value;
      if (num <= 0) {
        alert("Error: el número debe ser mayor que cero");
        screen.value = '';
      }
      screen.value = Math.log(num);
    } catch {
      screen.value = 'Error';
    }
  }

  // Funcion calcularLog() para el cálculo del logaritmo en base 10
  function calcularLog(){
    let num;
    try {
      num = screen.value;
      if (num <= 0) {
        alert("Error: el número debe ser mayor que cero");
        screen.value = '';
      }
      screen.value = Math.log(num) / Math.log(10);
    } catch {
      screen.value = 'Error';
    }
  }

  // Funcion calcularRaiz() para el cálculo de raíces cuadradas
  function calcularRaiz(){
    let num;
    try {
      num = screen.value;
      if (num < 0) {
        alert("Error: el número no puede ser negativo");
        screen.value = '';
      }
      screen.value = Math.sqrt(num);
    } catch {
      screen.value = 'Error';
    }
  }