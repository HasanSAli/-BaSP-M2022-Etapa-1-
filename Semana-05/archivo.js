/*1-A
var Uno = 4;
var Dos= 5;
var Tres = Uno+Dos;

console.log(Tres);

*/

/*1-B
var FraseUno = "Anakin";
var FraseDos = "no tuvo la culpa";
var FraseUnica = FraseUno+ " " + FraseDos;
console.log(FraseUnica)
*/

/*
1-C
var FraseUno = "Anakin";
var FraseDos = "no tuvo la culpa";
var FraseUnica = FraseUno+ " " + FraseDos;
console.log(FraseUnica.length)
*/


/*2-A
var Frase="todo lo que estas leyendo se va a transformar en mayuscula magicamente";

console.log("La Magia:"+" "+Frase.toUpperCase());
*/


/*2-B
var Frase="La frase esta se va a mostrar hasta la R";

var Fraseresumida= Frase.substring(0,5);
console.log(Fraseresumida);
*/


/*2-C
var Frase="La frase esta se va a mostrar hasta la R";

var Fraseresumida= Frase.substring(37,40);
console.log(Fraseresumida);
*/

/*2-D
var Frase="LA FRASE DE MAS DE 10 CARACTERES";
var Frasemodificada=Frase.substring(0,1).toUpperCase()+Frase.substring(1,40).toLowerCase();
console.log(Frasemodificada);
*/


/*
2-E
var Frase="LA FRASE DE MAS DE 10 CARACTERES"+"";
var Fraseespecial=Frase.indexOf("");
console.log(Fraseespecial);
*/

/*
2-F
Frase="rinoceronte plateado";

var Frasemodificada=  Frase.substring(0,1).toUpperCase()+Frase.substring(1,11)+" "+Frase.substring(12,13).toUpperCase()+Frase.substring(13,20);
console.log(Frasemodificada);

*/


/*
3-A
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(Año[4],Año[10]);
*/

/*
3-B
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(Año.sort());
*/


/*
3-C
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var Añoagregado= Año.unshift('Uno')&Año.push('Dos');
console.log(Añoagregado);
console.log(Año); 
*/

/*
3-D
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var AñoSacar=Año.shift()&Año.pop();
console.log(AñoSacar);
console.log(Año);
*/
/*
3-E
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(Año.reverse());

*/

/*

3-F
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(Año.join('-'));
*/

/*
3-G
var Año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var Añomodificacion=Año.slice(4,11);
console.log(Añomodificacion);
console.log(Año);
*/


/*
----------CONSULTAR-----------------------------------------
4-A
 var Num=Math.random();
console.log(Num);
if(Num >= 0.5){
alert("Es mas grande que 0,5")
}
else {
alert("Es mas chico que 0,5 ")    
}
*/





/*4-B
var edad= prompt("Intrdozuca su edad");

if(edad<=2){
 alert("Bebe");   
}

else if(edad>=2&&edad<=12){
  alert("Niño");  
}   else if(edad>=13&&edad<=19){
alert("Adolescente")
}       else if (edad>=20&&edad<=30){
    alert("Joven");
}           else if (edad>30&&edad<=60){
    alert("Adulto");
}               else if (edad>=61&&edad<=75){
    alert("Adulto Mayor");
}               else {
    alert("Anciano");
}
*/


/*5-A
var Dias=["lunes","Martes","Miercoles", "Jueves", "Viernes"];
var Recorrido= Dias.length;
for (var i=0;i<Recorrido;i++){
   console.log(Dias[i]); 
}
*/

/*
var Dias=["lunes","Martes","Miercoles", "Jueves", "Viernes"];
var Recorrido= Dias.length;
for (var i=0;i<Recorrido;i++){
   console.log(Dias[i]); 
}

/*
5-B
var Dias=["lunes","Martes","Miercoles", "Jueves", "Viernes"];
var Recorrido= Dias.length;
for (var i=0;i<Recorrido;i++){
   console.log(Dias[i].substring(0,1).toUpperCase()+Dias[i].substring(1)); 

}

*/



/*

5-c
var Sentence="";
for(var i=0;i<5;i++){
 Sentence=Sentence+Dias[i] ;  
}

*/


/*
5-D
var Cadena= [];
for (var i=0;i<10;i++){
    Cadena[i]=i;
}

console.log(Cadena);

*/ 

/*
6-A
function suma (x,y){
    return x+y
}
var resultado=suma(30,50);
console.log(resultado);
*/


/*
6-B
function suma(x,y){
  if(isNaN(x)||isNaN(y)){
    alert(message= "Error type")
    return NaN;
 } else{
     return x+y;
 } 
}

var resultado=suma (80,"caramelo");
console.log (resultado);

*/
/*



6-C
function validar(n){
    if (Number.isInteger(n)){
        return true;
    }else{
        return false;
    }
}
*/

/*

6-D
function add(x,y){
    if(isNaN(x)||isNaN(y)){
     alert("ALGO ESTÁ MAL")
     return NaN;   
    }else{
        if(!validar(x)||!validar(y)){
            alert("No Interger")
            x=Math.round(x);
            y=Math.round(y);
        }
        return x+y;
    }
}
console.log(add(2,2.5))
 */

/*

6-E
function  Ultima(n){
    if(!validar(n)){
     alert("No Integer") 
     n=Math.round(n);  
    }
    return n
}
function add(x,y){
    if (isNaN(X)||isNaN(Y)){
alert("Algo pusiste mal")
return NaN;
    }else{
      return Ultima(x)+Ultima(y);  
    }
}
console.log(add(2,2.5));

*/


