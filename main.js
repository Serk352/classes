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
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
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
    perimetro(){
        return (this.width*2) + (this.height*2);
    }
  }
  
  var rect = new rectangle(5,10);
  console.log(rect.area(), rect.perimetro());


//triangulo
class trangle extends figure {
    area(){
        return (this.width * this.height)/2;
    }
}
var tri = new triangle(5,10);
console.log(tri.area());


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
    static teorema(figure) {
     return Math.sqrt(Math.pow(figure.width, 2) + 
     Math.pow(figure.height, 2));
    }
  }

  console.log(trigonometria.teorema(tri));

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
  console.log(n.factorial(5));

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

creo mis entidades doctor y usuario, cada una tiene entre sus porpiedades un 
arreglo con objetos que contienen sus citas, como metodo cada entidad puede 
realizar una busqueda de sus citas, creo entonces la entidad appointment
donde le paso un arreglo de objetos con los datos de doctor , usuario y cita
creo dos metodos estaticos que interactuan con las entidades doctor y usuario.
dichas entidades, mandan llamar el metodo de appointments para realizar sus busquedas.



/*-----------------------------Solución------------------------------*/
class usuario {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
    username = "username";
    password = "password123";
    idUsuario = 1;
    appointments =  [{"date": "doctor"}];

    findAppointments(){
        return appointment.findAppbyUserId(this.idUsuario);
    }

}

class doctor {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
    idDoctor = 1;
    speciality = "general";
    appointments = [{"date": "usuario"}];

    findDoctorAppointments(){
      return appointment.findAppbyDocId(this.idDoctor);
    }

}

class appointment {
    static appointments = [
        {
            idUsuario: 1,
            idDoctor: 1,
            date: "date"
        },
        {
            idUsuario: 2,
            idDoctor: 1,
            date: "date"
        },
        {
            idUsuario: 1,
            idDoctor: 2,
            date: "date"
        },
    ];

    static findAppbyUserId = function(id){
        return this.appointments.filter(x => x.idUsuario === id);
    }
    static findAppbyDocId = function(id){
        return this.appointments.filter(x => x.idDoctor === id);
    }
}

var doc1 = new doctor("juan", "perez");
doc1.findDoctorAppointments();
var user1 = new usuario ("laura", "lujan");
user1.findAppointments();
/*------------------------------------------------------------------*/
