'use strict'

/**
 * 
 *  Clase numero 1.
 * 
 */

var texto_resultado = 'El resulado es: '; //string
var numero1 = 11; //
var numero2 = 9;
var numero3 = -8;

var resultado = numero1 + numero2 - numero3;
//imprima en consola el valor de la variable resultado.  
console.log(texto_resultado + resultado);

// Operadores Matematicos: 
/*
    + Suma
    - Resta
    * Multiplicacion
    / Division
    % modulo o Resto.
        Eje: 
            3 / 2 = 1 + resto : 1
            8 / 2 = 4 + resto : 0
            16 / 8 = 2 + resto : 0
            3%2=1
    ABS : VALOR ABSOLUTO
*/
numero1=7;
numero3=4;
texto_resultado = 'Operacion Resto: ';
resultado = numero1%numero3;
console.log(texto_resultado + resultado);

numero3 = Math.abs(-9);
console.log('El valor absoluto es: '+numero3);

texto_resultado = 'Division: ';
resultado = numero1/numero3;
console.log(texto_resultado + resultado);

texto_resultado = 'Multiplicacion: ';
resultado = numero1*numero3;
console.log(texto_resultado + resultado);

// operaciones complejas. 
texto_resultado = 'Operaciones con varios signos: ';
resultado = numero1+numero3*numero2
console.log(texto_resultado + resultado);

/**
 * Operadores matematicos simples
 * incrementos y decrementos. 
 */
texto_resultado = 'Incrementos: ';
resultado = 0;
resultado = resultado + 1 ;
resultado ++;
console.log(texto_resultado + resultado);

texto_resultado = 'Decrementos: ';
resultado = 0;
resultado = resultado -1 ;
resultado --;
console.log(texto_resultado + resultado);

/** OPERADORES LOGICOS 
 *    && AND 
 *    || OR 
 *    == EQUAL
 *    ! NO
 *    != DIFERENTE (<>)
 *    < MENOR QUE 
 *    > MAYOR QUE
 *    >= MAYOR O IGUAL QUE
 *    <= MENOR O IGUAL QUE 
 *    
*/

var a = true;
var b = false;



/**
 *  A && AND B
 *  VERDAD Y VERDAD =  VERDAD
 *  VERDAD Y FALSO  = FALSO
 *  FALSO Y VERDAD  = FALSO
 *  FALSO Y FALSO   = FALSO
 */
console.log(a&&b);   //FALSO
console.log(!a&&!b); //FALSO
console.log(a&&!b);  
/**
 *  A || OR  B
 *  VERDAD O VERDAD =  VERDAD
 *  VERDAD O FALSO  = VERDAD
 *  FALSO O VERDAD  = VERDAD
 *  FALSO O FALSO   = FALSO
 */
console.log(a||b);   //VERDADERO
console.log(!a||b); //FALSO
console.log(a||!b);  //VERDADERO

b = true;
console.log('Resultado b: '+b);
b = (1==2); //uno es igual a 2? = SI, NO
console.log('Resultado b: '+b);
b = (1<2); //uno es igual a 2? = SI, NO
console.log('Resultado b: '+b);
b = (1>2); //uno es igual a 2? = SI, NO
console.log('Resultado b: '+b);
b = (!(1>2)); //uno no es mayor que 2? = SI, NO
console.log('Resultado b: '+b);




/*
Ejercicios : 
Tomar 4 numeros asignarles los valores de : 
    a = 5
    b = 9
    c = 35
    d = -56

    1. Realizar todas las operaciones matematicas con ellos. 
    2. identificar entre 2 numeros cual es mayor. 
    3. incrementar la variable a hasta que sea igual a la b.
    4. validar si a es menor que c
    5. validar si d es mayor que b
    6. validar si la suma de a b y c es mayor que el valor absoluto de d.



*/


