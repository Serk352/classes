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
class figure{
    constructor(h,w){
        this.height = h;
        this.width = w;
    }

    area(){
        return this.height * this.width;
    }
}
//console.log(new figure(10,5).area());


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
class rectangle extends figure{

    perimeter(){
        return 2(this.height+this.width);
    }
}
var rectang1 = new rectangle(15,9);
console.log(rectang1.area(), rectang1.perimeter());

//triangulo
class triangle extends figure{

    area2(){
        return this.area()/2;
    }
}
console.log(new triangle(4,4).area2());

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

class trigonometria{

    static hypotenuse(obj){
        return Math.hypot(obj.w,obj.h)
    }

    static relation = "This is the hypotenuse";
}
var t = new triangle(9,9);
console.log(trigonometria.hypotenuse(t));

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
let str = "había una vez un barco chiquito";
class enhancedString extends String {
  puntuacion(str) {
    return str + ".";
  }
  capitalizar(str) {
    let m = str[0].toUpperCase();
    return str.replace(str[0], m);
  }
}
var cadena = new enhancedString();
console.log(cadena.puntuacion(str), cadena.capitalizar(str));
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

class station{
    constructor(id, gen){
        this.id =id;
        this.genre=gen;
    }
  
    show(){
      let arrayTot = [this.id, this.genre];
      return arrayTot;
    }
  
    add(i,g){
      let arrayTot = [this.id,this.genre];
      arrayTot.push(i,g);
      return arrayTot;
    }
    nowListening(){
      return this.genre;
    }
  }
  console.log(new station(1,"pop").add(2,"rock"));
  
  class user{
    constructor(n, p){
        this.name = n;
        this.password = p;
    }
    logIn(){
        return "Inicio de sesion exitoso BIENVENIDO: "+this.name;
    }
    logOut(){
      return this.name + " esperamos verte pronto!"
    }
    sesion(){
      return this.name;
    }
    
  }
  let user1 = new user("Mariana", "123m")
  console.log(user1.logOut());
  
  class favoriteStations extends user{
    static favoriteSt(id){
      let ID = id.toUpperCase();
      return this.name + ": has agregado "+ ID + " como estación favorita";
    }
  }
  console.log(favoriteStations.favoriteSt("pop"));


/*------------------------------------------------------------------*/
