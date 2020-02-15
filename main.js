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
class Figure {

    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    area() {
      return this.height * this.width;
    }
  }

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
class Rectangle extends Figure {
    perimeter(){
        return 2 * (this.width + this.height);
    }
}
//triangulo
class Triangle extends Figure {

    area() {
      return  this.height * this.width  / 2;
    }
  }


var pruebaR = new Rectangle(9, 15);
var pruebaT = new Triangle(9, 8);

console.log(pruebaR.perimeter());
console.log(pruebaT.area());
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
class Trigonometria {
    static hypotenuse(object){
        return Math.hypot(object.width, object.height);
    }
    static res = "Esta es la hipotenusa. ";
}

console.log(Trigonometria.hypotenuse(pruebaT));

/*------------------------------------------------------------------*/
/*OTRO EQUIPO
class trigonometria {
    static teorema(figure) {
     return Math.sqrt(Math.pow(figure.width, 2) + 
     Math.pow(figure.height, 2));
    }
  }
  console.log(trigonometria.teorema(tri));  */

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
class EnhancedString extends String {

    punctuation(str) {
    return str + ".";
  }

    toCapitalize(str) {
    let m = str[0].toUpperCase();
    return str.replace(str[0], m);
  }
}

var charChain = new EnhancedString();
console.log(charChain.punctuation(str), charChain.toCapitalize(str));

/*OTRO EQUIPO
class enhancedNumber extends Number{
    isNotPair(x){
        if(x % 2 === 0){
            return false;
        }
        return true;
    }
    factorial(x){
        if(x < 0){
            return -1
        }else if (x === 0){
            return 1;
        }else{
            return(x * this.factorial(x-1));
        }
    }
  }
  var n = new enhancedNumber;
  console.log(n.isNotPair(6));
  console.log(n.factorial(5));  */

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
class User {
    constructor(idUser, email, password, nickName, portfolio, sUser, status){
        this.idUser = idUser;
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.portfolio = portfolio;
        this.sUser = sUser;
        this.status = status;
    }

    login(){
        if (this.status == false){
            this.status = true;
        }
        return ("Cool ", this.nickName, ", your in!");      //No me imprime el nickName :(
    }

    logout(){
        if (this.status == true){
            this.status = false;
        }
        return ("See you soon ", this.nickName, "!")        //No me imprime el nickName :(
    }
}

var userIsis = new User(0, "isis@gmail.com", "isispassboot", "Pi", 5, true, false);
console.log(userIsis.login());
//console.log(userIsis);
//console.log(userIsis.logout());
//console.log(userIsis);
/*------------------------------------------------------------------*/

class Tutorial{
    constructor (idTutorial, idUser, category, title, description, imageurl, date){
        this.idTutorial = idTutorial;
        this.idUser = idUser;
        this.category = category;
        this.title = title;
        this.description = description;
        this.imageurl = imageurl;
        this.date = date;
    }

    permission(){
        //Quiero checar si Usuario en sUser tiene un "true" si no, no tendrá habilitada esta funcion
        //Me gustaría hacer un método que busque los datos del usuario y se traiga el user Id para que el tutorial quede registrado con el
    }

    edit(){

    }

    delete(){

    }
}
