// Integrantes: Pablo Troncoso, Romina Valenzuela

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
      this._url = url;
    }
  
    //Función closure para poner privada la url (hay que ponerla privada y aparte con un closure)
    //el concepto de closure es que es un funcion que no tiene variables
    //entonces ella no tiene variables pero puede ser una funcion que este declarada fuera de ella
    //esto es un concepto de closure basado en su estructura
    get url() {
      return this._url;
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
    "https://www.youtube.com/embed/nNgIMdc6wqU?si=Ch07spmESuxnhJMv",
    idMusica
  );
  
  musica.playMultimedia();
  
  const idPelicula = document.getElementById("peliculas");
  let pelicula = new Reproductor(
    "https://www.youtube.com/embed/vKQi3bBA1y8?si=wlNUnK-SFYMOVXTg",
    idPelicula
  );
  
  pelicula.playMultimedia();
  pelicula.setInicio(20);
  
  const idSeries = document.getElementById("series");
  let series = new Reproductor(
    "https://www.youtube.com/embed/NNRQaDkQ7F8?si=EFs7SexYrmJIac05",
    idSeries
  );
  
  series.playMultimedia();
  // series.setInicio(100);
  