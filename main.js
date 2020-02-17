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
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
   
    area(){
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
   class rectangle extends figure{
       perimeter(){
           return (this.width * 2) + (this.height *2);
       }
   }
   //triangulo
   class triangle extends figure{
       areatriangle(){
           return (this.area()) / 2;
       }
   }
   
   var rec = new rectangle(4,2);
   console.log("area:",rec.area());
   console.log("perimeter:",rec.perimeter());
   
   var trian = new triangle(5,3);
   console.log("area:",trian.areatriangle());
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
   class trigonometry{
       static Hypotenuse(a,b){
           return Math.sqrt(Math.pow(a,2)+Math.pow(b,2)).toFixed(2);
       }
       static internAngle = 180;
   }
   
   console.log(trigonometry.Hypotenuse(trian.width,trian.height));
   console.log(trigonometry.internAngle);
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
   class enhancedString extends String{
       noSpace(str){
           var arr = str.split(" ");
           var res="";
           arr.forEach(function(item){
               res += item;
           })
           return res;
       }
   
       likeOrNot(str){
           var b = str.toLowerCase().includes("sushi");
           return b ? "Si le gusta el sushi" : "no le gusta el sushi";
       }
   
   }
   
   var str = new enhancedString();
   console.log(str.noSpace("A n d r e a"),str.likeOrNot("Sushi"));
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
   class Hotel{
       constructor(id,name,city,state,rooms){
           this.id = id;
           this.name = name;
           this.city = city;
           this.state = state;
           this.rooms = rooms;
       }
      
   }
   
   class User{
       constructor(id,name,email,pass){
           this.id = id;
           this.name = name;
           this.email = email;
           this.pass = pass;
           this.reservation = [];
       }
   
       reservar(objH){
           this.reservation.push(objH);
       }
   
   }
   
   var objH = new Hotel(1,"Casa Blanca","Guadalajara","Jalisco",[{id:1,tipo:"sencilla",vacancy: 1}])
   console.log(objH);
   var x = objH.rooms[0];
   var objU = new User(1,"Andrea","andrea@email.com","pass123");
   console.log(objU);
   objU.reservar(x);
   console.log(objU);
   
   
   /*------------------------------------------------------------------*/
