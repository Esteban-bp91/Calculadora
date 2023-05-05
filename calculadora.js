let screen = document.getElementById('screen');

function insert(value){
  screen.value += value;
}

function clearScreen(){
    screen.value = '';
}

function calcular(){
  try {
    screen.value = eval(screen.value.replace('^', '**'));
  } catch {
    screen.value = 'Error';
  }
}

  function longMax(){
    console.log('entra en longmax');
    if (screen.value.length === 11) {
      console.log('Mas de 10 digitos');
      screen.value = screen.value.slice(0, 10);
      alert('No se pueden introducir más de 10 dígitos');
    }
  }

  screen.addEventListener('input', longMax());

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