/*-----------------------------Class--------------------------------*/
/*
Definir una clase llamada figura.
esta clase debe tener dos propiedades:
altura y base (entiendase como alto y ancho).
definir un constructor que reciba dos paramatros, los cuales se usaran para inicializar
las propiedades altura y base.
tener una método llamada area que como su nombre lo dice calcule el área de la figura.
*/

/*-----------------------------Solución------------------------------*/
class figure {
  constructor(height, width) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
console.log(new figure(10, 5).area());
/*------------------------------------------------------------------*/

/*-----------------------------Herencia--------------------------------*/
/*
1.- Definir una clase llamada rectangulo que herede de la clase figura.
*Hacer lo necesario para poder usar esta nueva clase para crear rectangulos
y poder calcular el area y el perímetro de estos (a traves del uso de métodos).

2.- Definir una clase llamada triangulo que herede de la clase figura.
*Hacer lo necesario para poder usar esta nueva clase para crear triangulos
y porder calcular el area de estos usando métodos.

*/

/*-----------------------------Solución------------------------------*/
//rectangulo
class rectangle extends figure{
  perimeter(){
    return 2*(this.width + this.height);
  }
}
var rec = new rectangle(14,7);
console.log(rec.area(),rec.perimeter());

//triangulo

class triangle extends figure{
  areaT(){
    return this.area()/2;
  }
}
console.log(new triangle(6,3).areaT())

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

class trigonometry {
  static hypotenuse(obj1,obj2){
    return Math.hypot(obj1,obj2)
  }
    static secondHeight = "another height"
}
var T = new triangle(12,3)
console.log(trigonometry.hypotenuse(T.width,T.height));

/*------------------------------------------------------------------*/

/*-----------------------------Extend--------------------------------*/
/*
Tomando en cuenta los built-in objects vistos en la clase anterior hacer
lo siguiente:

*Elegir el objeto que más les interesó (puede ser elegido en equipo).
*Definir una clase llamada Enhanced'(insertenombrebasedelobjetoaqui') que herede de este objeto. 
    EX: EnhancedString.

*Agregar al menos dos metodos con utilidad (y propiedades de ser necesario).

*Nota: el comportamiento y estructura del objeto original deben de persisitir en la
clase hija, en otras palabras deben de ser funcionando como hasta ahora.
*/

/*-----------------------------Solución------------------------------*/

let str = "once upon a time, there was a little boat";
class enhancedString extends String {
  punctuation(str) {
    return str + ".";
  }
  capitalize() {
    let newSt = str[0].toUpperCase();
    return str.replace(str[0],newSt);
  }
}
var chain = new enhancedString();
console.log(chain.punctuation(str), chain.capitalize(str));

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


//-----------------////// EJERCICIOS EN CLASE EN SANDBOX //////----------------//

// class rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }
// }

// var figure = new rectangle(12, 23);
// var figureArea = figure.area();

// console.log(figureArea);

// class triangle {
//   constructor(height, width) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return (this.width * this.height) / 2;
//   }
// }

// var triangleValues = new triangle(10, 10);
// var triangleValuesArea = triangleValues.area();

// console.log(triangleValuesArea);

///////

// class figure {
//   // clase padre
//   constructor(width, height) {
//     this.width = width; // definiri he inicializar propiedades
//     this.height = height; // definiri he inicializar propiedades
//   }
//   area() {
//     return this.width * this.height;
//   }
//   static getName() {
//     console.log("figure");
//   }
//   static secondHeight = "figure";
// }

// var newFig = new figure(10, 10);
// // console.log(newFig.getName());

// /////
// class triangle extends figure {
//   area() {
//     return (this.width * this.height) / 2;
//   }
// }
// var newTri = new triangle(15, 10);
// console.log(newTri.area());

// /// Rectangulo
// class rectangle extends figure {}
// var nuevoRec = new rectangle(15, 10);
// var areaNuevo = nuevoRec.area();
// console.log(areaNuevo);

// var newFig = new figure(10, 10);
