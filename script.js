let pantalla = document.getElementById("pantalla");

// Esta funcion toma el valor de los botones y los imprime en la pantalla
function mostrar(valor){
    pantalla.value += valor
}

// Esta funcion limpia la pantalla al mostrar un valor vacio
function CE(){
    pantalla.value = ""
}

// Esta es la funcion que tiene la lógica y calcula las operaciones aritméticas
function calcular(){
    // Se declaran las variables locales
    let resultado;
    let datos;
    datos = pantalla.value; //Se asigna el valor de la pantalla a la primera variable
    //Se hace un condicionante try..catch para validar si es que la calculadora llega a dar algun error
    console.log(datos);   
    try{ 
       

            resultado = eval(datos); //la funcion "eval" realiza el cálculo aritmético de los strings o cadenas que le pasemos y es nativa de JS
            //Se le asigna el resultado de la función "eval" a la variable resultado
            console.log(resultado);
            pantalla.value = resultado; //Se imprime el valor de resultado en la pantalla
       
        } catch(e) {//Si por alguna razon falla la funcion "eval" entraria en el catch
            if (e instanceof SyntaxError){ //Aquí nos explica que si e(error) se encuentra en un SyntaxError pasara lo siguiente
                if(resultado == undefined) {

                    let raizq;
                  
                    raizq = Math.sqrt(parseInt(datos,10));
                    console.log(raizq);

                    if (isNaN(raizq)){
                        pantalla.value = "Syntax Error"; //Se mostrara en la pantalla el mensaje de "Syntax Error"
                        alert("Si fallo la operación es porque: \n1.El √ va al final del numero\n2.Estas utilizando paréntesis con la raiz cuadrada")
                        console.log(resultado);
                    } else {
                    pantalla.value = raizq;
                }       
            }            
        }        
    }       
}


//Esta funcion se utiliza para quitar el ultimo caracter de la cadena de texto en la pantalla
function remover(){
    let data;
    let newdata;
    data = pantalla.value;//Se asigna el valor de la pantalla a la variable
    newdata = data.slice(0,-1);//La funcion slice() nos permite retirar el valor en la posicion que le indiquemos
    pantalla.value = newdata;//Se imprime la nueva cadena en la pantalla
    
}
