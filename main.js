/*-----------------------------1 - Class--------------------------------*/
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
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
  }

var figureF = new figure(10, 5);
var figureFArea =  figureF.area();
console.log("Ex.1 Figure: ");
console.log("Area Figure:" + figureFArea);

/*------------------------------------------------------------------*/

/*-----------------------------2 - Herencia--------------------------------*/
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
    perimetro(){
        return 2*(this.width + this.height)
    }
  }
var rect = new rectangle(4, 9);
console.log("Ex.2.1 Rectangle: ");
console.log("Area Rec:" + rect.area(), 
"Perimetro Rec:" + rect.perimetro());

//triangulo
class triangle extends figure {
  area() {
    return (this.width * this.height) / 2;
  }
}
var trian = new triangle(5, 10);
console.log("Ex.2.2 Triangle: ");
console.log("Area Triangle:" + trian.area());

/*------------------------------------------------------------------*/

/*-----------------------------3 - Static--------------------------------*/
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
  static hypotenuse(obj) {
    return Math.hypot(obj.width, obj.height);
  }
  static rel = "This is the hypotenuse"
}
console.log("Ex.3 Trigonometry: ");

console.log(trigonometria.rel);
console.log(trigonometria.hypotenuse(trian));
/*------------------------------------------------------------------*/

/*-----------------------------4 - Extend--------------------------------*/
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
let str = "pepe pecas pica papas con un pico";
class enhancedString extends String {
  puntuacion(str) {
    return str + ".";
  }
  capitalizar(str) {
    let min = str[0].toUpperCase();
    return str.replace(str[0], min);
  }
}
var cadena = new enhancedString();
console.log("Ex.4 Extend: ");
console.log("Capitalizar: " + cadena.capitalizar(str));
console.log("Punto: " + cadena.puntuacion(str));

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

/*------------------------------------------------------------------*/
