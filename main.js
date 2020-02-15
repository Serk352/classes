//1...-----------------------------Class--------------------------------*/
//Definir una clase llamada figura.
//esta clase debe tener dos propiedades:
//altura y base (entiendase como alto y ancho).
//definir un constructor que reciba dos paramatros, los cuales se usaran para inicializar
//las propiedades altura y base.
//tener una método llamda area que como su nombre lo dice calcule el área de la figura.
console.log("Defining class figure")
class figure{
    constructor (height,width){
        this.height=height;
        this.width=width;
    }
    arearect(){
        return this.height*this.width;
    }    
}

console.log(new figure(5,4).arearect())

//2..-----------------------------Herencia--------------------------------*/
//Definir una clase llamada rectangulo que herede de la clase figura.
//Hacer lo necesario para poder usar esta nueva clase para crear rectangulos
//y porder calcular el area y el perímetro de estos (a traves del uso de métodos).
//Definir una clase llamada triangulo que herede de la clase figura.
//Hacer lo necesario para poder usar esta nueva clase para crear triangulos
//y porder calcular el area de estos usando métodos.
/*-----------------------------Solución------------------------------*/
//rectangulo
//triangulo
/*------------------------------------------------------------------*/
console.log("Result of class rectangle extending class figure")
class rectangle extends figure{
    constructor(height,width){
        super (height,width);
        this.height=height;
        this.width=width;
    }
    
    perirect(){
     return (this.height+this.width)*2
    }
}
var rectanglearea=new rectangle(5,4).arearect();
console.log(rectanglearea);
var rectangleperi=new rectangle(5,4).perirect();
console.log(rectangleperi);
console.log("Result of class triangle extending class figure")
class triangle extends figure{
    constructor (height,width){
        super(height,width);
        this.height=height;
        this.width=width
    }
    areatriangle(){
        return this.arearect()/2
    }
}
console.log( new triangle(5,4).areatriangle());

//3..-----------------------------Static--------------------------------*/
/*
Definir una clase llamada trigonometría (o similar.)
Esta clase debe ser diseñada teniendo en cuenta que no se generaran
instancias de esta clase y será usada para interactuar con objetos de
clase figure (o sus derivados.)*Reto:
*Definir al menos un método y una propiedad (o más) estáticas que puedan
interactuar con las clases antes mencionadas. 
Nota: los metodos y propiedades deben demostar tener una utilidad
en un escenario del mundo real.
*//*-----------------------------Solución------------------------------*/
/*------------------------------------------------------------------*/
class trigonometria {
    static teorema(width,height) {
     return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    }
  }
  console.log(trigonometria.teorema(5,4));


/*-----------------------------Extend--------------------------------*/
/*Tomando en cuenta los built-in objects vistos en la clase anterior hacer
lo siguiente:
*Elegir el objeto que más les interesó (puede ser elegido en equipo).
*Definir una clase llamada Enhanced'(insertenombrebasedelobjetoaqui') que here de este objeto. 
    EX: EnhancedString.
*Agregar al menos dos metodos con utilidad (y propiedades de ser necesario).
*Nota: el comportamiento y estructura del objeto original deben de persisitir en la
clase hija, en otras palabras deben de ser funcionando como hasta ahora.
*/
/*-----------------------------Solución------------------------------*/
/*------------------------------------------------------------------*/
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


/*-----------------------------Extra(Más no opcional)---------------*/
/*Tomando como base el proyecto final que tiene asignado cada una,
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
console.log("WORK TRACK")
//Inicializando 
const user = {
    id: 0,
    name: ""
  };
  const workTrack = function(obj) {
    return {
      id: obj.id || 0,
      name: obj.name || "",
      shortDescription: obj.shortDescription || 200,
      taskContent: obj.taskContent || 1,
      piority: obj.piority || 1,
      category: obj.category || ""
    };
  };
  const getTasks = function(taskContent) {
    const array = [];
    for (let i = 0; i < taskContent; i++) {
      array.push(
        new workTrack({
          id: i + 1,
          name: `TaskNo.${i + 1}`,
          shortDescription: Math.random().toString(5).substring(2, 15),
          taskContent: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          piority: parseInt(Math.random() * (5 - 1) + 1).toFixed(0),
          category:   Math.random().toString(36).substring(2, 15)
        })
      );
    }
    return array;
  };
  
  console.log(getTasks(2));
  console.log("Holi")
  const taskPrint = function(id, name,shortDescription,taskContent,piority) {
    let item = {
      id: id,
      name: name,
      shortDescription:shortDescription,
      taskContent:taskContent,
      piority:piority,
      articulos: getTasks(10),
      totaltasks: function() {
        return this.articulos
          .map(x =>"Task"+ " :"+ x.shortDescription+"Task content"+" :"+ x.taskContent+"Task piority"+" :"+x.piority)
          .reduce((current, x) => current + x, 0);
         return this.totaltasks()
       }
    };
    item._proto_ = taskPrint;
    return item;
  };
  console.log("The user has the following tasks  :" + new taskPrint(2, "Enero").totaltasks());
 
  

