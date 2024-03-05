// Construccion patron modulo
let iife = (function () {
    // Función privada para insertar el video en el documento HTML
    // CReo 2 Funciones, publico y otra privada (sumanumero, es un Obj.)
    function privada(url, id) {
      console.log("Url: ", url);
      console.log("Id: ", id);
      id.setAttribute("src", url);
    }
    // Función pública para insertar el video con parámetros (url, id)
    // Retorno de las funciones públicas
    return {
      publica: (url, id) => privada(url, id),
    };
  })();
  //Llamado al método público de la función iife
  // iife retorna un Objeto
  console.log("Valor de iife: ", iife);
  // iife.llamaSumaNumeros(4,2);
  
  // Definiendo la clase Padre
  
  class Multimedia {
    constructor(url) {
      this.url = url;
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      iife.publica(this.url, this.id);
    }
  
    setInicio(tiempo) {
      this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
  }
  
  //Vamos a instanciar una clase
  const idMusica = document.getElementById("musica");
  let musica = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY",
    idMusica
  );
  
  musica.playMultimedia();
  
  const idPelicula = document.getElementById("peliculas");
  let pelicula = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY",
    idPelicula
  );
  
  pelicula.playMultimedia();
  pelicula.setInicio(20);
  
  const idSeries = document.getElementById("series");
  let series = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY",
    idSeries
  );
  
  series.playMultimedia();
  