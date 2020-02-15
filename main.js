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
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height
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
class rectangle extends figure {
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
var rctng = new rectangle(2, 7);
console.log("El área del rectangulo es: " + rctng.area());
console.log("El perímetro del rectangulo es: " + rctng.perimeter());
//triangulo
class triangle extends figure {
    area() {
        return (this.width * this.height) / 2
    }
}
var trngl = new triangle(4, 8);
console.log("El área del triángulo es: " + trngl.area());


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
    static theorem(figure) {
        return Math.sqrt(Math.pow(figure.width, 2) + Math.pow(figure.height, 2)).toFixed(4);
    }
}
console.log(trigonometry.theorem(trngl));

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
class enhancedNumber extends Number {
    isNotPair(n) {
        return n % 2 === 0 ? false : true;
    }
    factorial(n) {
        if (n < 0) {
            return -1
        } else if (n === 0) {
            return 1;
        } else {
            return (n * this.factorial(n - 1));
        }
    }
}
var n = new enhancedNumber();
console.log("Este número es impar? " + n.isNotPair(6));
console.log("El factorial es: " + n.factorial(5))


/*------------------------------------------------------------------*/

/*-----------------------------Extra(Más no opcional)---------------*/
/*
Tomando como base el proyecto final que tiene asignado cada una,
hacer lo siguiente:

//Antes de codear.
1.- Definir al menos dos entidades (o más) que necesitaran para su proyecto.
2.- Definir las propiedades y métodos únic@s de cada entidad.
3.- Definir las propiedades y métodos en común entre las entidades.  
Todas mis clases tienen un id propio.
4.- En caso de que las entidades puedan o deban interactuar entre ellas,
hacer una de las siguientes opciones:
 a) Definir metodos dentro de cada entidad para interactuar con la otra entidad.
 b) (La solución "elegante") generar otra entidad diseñada para manejar la interacción,
    para esto pueden usar  una clase statica.

Una vez definidos todo esto, favor de generar el código de las funciones.

/*-----------------------------Solución------------------------------*/
class user {
    constructor(id, name, email, password) {
        this.id_user = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.comment = [];
        this.comic = [];
    }
    add_comment(obj) {
        let identify = user.comment;
        let array = [(identify.length + 1), obj.comment]
        user.comment.push(array);
    }
    add_comic(obj) {
        let identify = user.comic;
        let array = [(identify.length + 1), obj.title]
        user.comic.push(array);
    }
}

var user1 = new user();

class comic {
    constructor(id, title, description, image_url, created_by) {
        this.id_comic = id;
        this.title = title;
        this.description = description;
        this.image_url = image_url;
        this.created_by = created_by;
        this.likes = 0;
        this.created_at = new Date();
    }
    add_like() {
        return this.likes = this.likes + 1;
    }
    delete_like() {
        return this.likes === 0 ? "Error" : this.likes = this.likes--;
    }
}
class comment {
    constructor(id, id_commic, username, comment) {
        this.id_comment = id;
        this.id_comic = id_commic;
        this.username = username;
        this.comment = comment;
    }
}

/*------------------------------------------------------------------*/