class Juego {
    constructor(nombre, precio, disponible = true) {
      this.nombre = nombre;
      this.precio = precio;
      this.disponible = disponible;
    }
  
    comprar() {
      this.disponible = false;
      alert("Juego Comprado Exitosamente");
    }
  }
  
  const juegosps1 = [];
  juegosps1.push(new Juego("resident evil", 60));
  juegosps1.push(new Juego("megaman", 60));
  juegosps1.push(new Juego("castlevania", 60));
  
  const juegossnes = [];
  juegossnes.push(new Juego("final fantasy", 80));
  juegossnes.push(new Juego("mario", 80));
  juegossnes.push(new Juego("zelda", 80));
  
  const juegospc = [];
  juegospc.push(new Juego("fallout", 50));
  juegospc.push(new Juego("simcity", 50));
  juegospc.push(new Juego("xcom", 50));
  
  function comprar(juegos, nombre) {
    for (const juego of juegos) {
      if (juego.nombre === nombre) {
        juego.comprar();
        return;
      }
    }
    alert("El juego no esta disponible");
  }
  
  function comprarps1() {
    let nombre = prompt("Ingrese el juego que quiera comprar de la lista");
    comprar(juegosps1, nombre);
  }
  
  function comprarsnes() {
    let nombre = prompt("Ingrese el juego que quiera comprar de la lista");
    comprar(juegossnes, nombre);
  }
  
  function comprarpc() {
    let nombre = prompt("Ingrese el juego que quiera comprar de la lista");
    comprar(juegospc, nombre);
  }
  
  function Buscar() {
    const juegossemitotal = juegospc.concat(juegosps1);
    const JuegosTotal = juegossemitotal.concat(juegossnes);
    let nombre = prompt("Ingrese el nombre del juego a buscar");
    let encontrado = false;
  
    for (const juego of JuegosTotal) {
      if (juego.nombre === nombre) {
        encontrado = true;
        break;
      }
    } 

    if (encontrado) {
        alert("juego encontrado");
      } else {
        alert("juego no encontrado");
      }
}

