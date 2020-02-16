/*-----------------------------Class--------------------------------*/
/*
Definir una clase llamada figura.
esta clase debe tener dos propiedades:
altura y base (entiendase como alto y ancho).
definir un constructor que reciba dos paramatros, los cuales se usaran para inicializar
las propiedades altura y base.
tener una método llamda area que como su nombre lo dice calcule el área de la figura.
*/

/*-----------------------------Solución------------------------------*/

class figure {  
    constructor (altura, base) {
      this.altura = altura,
      this.base = base
    }
  
    area () {
      return this.base * this.altura;
    }
  
  }
  
  console.log(new figure(9,4).area())

/*------------------------------------------------------------------*/


/*-----------------------------Herencia--------------------------------*/
/*
1.- Definir una clase llamada rectangulo que herede de la clase figura.
*Hacer lo necesario para poder usar esta nueva clase para crear rectangulos
y porder calcular el area y el perímetro de estos (a traves del uso de métodos).

2.- Definir una clase llamada triangulo que herede de la clase figura.
*Hacer lo necesario para poder usar esta nueva clase para crear triangulos
y porder calcular el area de estos usando métodos.

*/

/*-----------------------------Solución------------------------------*/
//rectangulo

class rectangle extends figure {
    perimetro() {
      return 2 * this.base + 2 * this.altura;
    }
  }
  
  var figRect = new rectangle(12, 8);
  console.log(figRect.area(), figRect.perimetro());

//triangulo
class triangle extends figure {
    triangleArea() {
      return this.area()/2;
    }
  }
  
  console.log(new triangle(7,4).triangleArea());

/*------------------------------------------------------------------*/

/*-----------------------------Static--------------------------------*/
/*
Definir una clase llamada trigonometría (o similar.)
Esta clase debe ser diseñada teniendo en cuenta que no se generaran
instancias de esta clase y será usada para interactuar con objetos de
clase figure (o sus derivados.)

*Reto:
*Definir al menos un método y una propiedad (o más) estáticas que puedan
interactuar con las clases antes mencionadas. 

Nota: los metodos y propiedades deben demostar tener una utilidad
en un escenario del mundo real.

*/

/*-----------------------------Solución------------------------------*/
class trigonometria {

  static hipotenusa(obj) {
    return Math.hypot(obj.base, obj.altura);
  }

  static getHipotenusa = "Esta es la hipotenusa";
}

let figT = new triangle(10,8);
console.log(trigonometria.hipotenusa(figT));


/*------------------------------------------------------------------*/


/*-----------------------------Extend--------------------------------*/
/*
Tomando en cuenta los built-in objects vistos en la clase anterior hacer
lo siguiente:

*Elegir el objeto que más les interesó (puede ser elegido en equipo).
*Definir una clase llamada Enhanced'(insertenombrebasedelobjetoaqui') que here de este objeto. 
    EX: EnhancedString.
*Agregar al menos dos metodos con utilidad (y propiedades de ser necesario).

*Nota: el comportamiento y estructura del objeto original deben de persisitir en la
clase hija, en otras palabras deben de ser funcionando como hasta ahora.
*/

/*-----------------------------Solución------------------------------*/

let str = "inserta una frase";

class enhancedString extends String{

    agregarPunto(str) {
      return str + ".";
    }

    mayuscula(str) {
        let m = str[0].toUpperCase();
        return str.replace(str[0], m )
    }
  }
  
  var enhanced = new enhancedString();
  console.log(enhanced.agregarPunto(str));
  console.log(enhanced.mayuscula(str));


/*------------------------------------------------------------------*/

/*-----------------------------Extra(Más no opcional)---------------*/
/*
Tomando como base el proyecto final que tiene asignado cada una,
hacer lo siguiente:

//Antes de codear.
1.- Definir al menos dos entidades (o más) que necesitaran para su proyecto.
2.- Definir las propiedades y métodos únic@s de cada entidad.
3.- Definir las propiedades y métodos en común entre las entidades.  
4.- En caso de que las entidades puedan o deban interactuar entre ellas,
hacer una de las siguientes opciones:
 a) Definir metodos dentro de cada entidad para interactuar con la otra entidad.
 b) (La solución "elegante") generar otra entidad diseñada para manejar la interacción,
    para esto pueden usar  una clase statica.

Una vez definidos todo esto, favor de generar el código de las funciones.

/*-----------------------------Solución------------------------------*/
//Entidades: announcement y pet.
// Propiedaes diferentes:
//     announcement = username, email
//     pet = name, breed
// Métodos diferentes:
//     addDataAnnou = agregar datos al anuncio.
//     getName = mostrar los nombres de perros que coincidan con la raza ingresada
// Propiedades en común: id

//PRIMERA ENTIDAD:
class announcement {
  constructor (username, email) {
    this.username = username,
    this.email = email
  }

  addDataAnnou() {
    if(this.username !== null && this.email !== null ){
        var description = "Mi nombre es " + this.username + " con email " + this.email;
        return description;
      }
    else {
     return "Favor de llenar todos los campos"
    } 
  }
}

var announ = new announcement("Nallely", "nalle@gmail.com")
console.log(announ.addDataAnnou());

//SEGUNDA ENTIDAD:
class pet {
  constructor(name, breed){
    this.name = name,
    this.breed = breed
  }

getName(dog){
 return this.name;
}
}

let dog = new pet("Fido","chihuahua");
console.log(dog.getName());


/*------------------------------------------------------------------*/






