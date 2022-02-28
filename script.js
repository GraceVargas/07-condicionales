// <!-- if, else, else if
// 🔢 Número par o impar
// Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor 
// ingresado es par o impar.
// 💵 Cajero -->
// const parOImpar = (num: number) => {
//     return num % 2 === 0;
// } 
// console.log(parOImpar(8));
// Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto 
// se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del 
// disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir 
// retirando.
// const retirarDinero = (dinDisponible: number) => {
//     alert(`El dinero inicial es ${dinDisponible}`);
//     let dinARetirar = parseInt(prompt(`Ingrese saldo a retirar.`));
//     if (dinDisponible >= dinARetirar) {
//         alert(`El dinero restante es ${dinDisponible - dinARetirar}.`);
//     } else if (dinARetirar > dinDisponible && dinDisponible !== 0){
//         alert(`Se intenta retirar mas dinero del disponible.`)
//     } else {
//         alert(`No cuenta con dinero disponible`);
//     }
// }
// retirarDinero(600);
// 📆 Días del mes
// Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.
// 👵 A qué generación pertenece
// Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que 
// generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).
// 🍦 Heladería II
// Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un 
// mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
// 1/4kg: 2 sabores.
// 1/2kg: 3 sabores.
// 3/4kg: 4 sabores.
// 1kg: 5 sabores.
// Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al 
// finalizar un mensaje con la cantidad de kg y los gustos escogidos.
// let kgHelado = prompt("Ingrese kilo de helado");
// let gustoUno: string;    
// let gustoDos: string;
// let gustoTres: string;
// let gustoCuatro: string;
// let gustoCinco: string;
// switch(kgHelado) {
//     case "1/4" : 
//     alert("2 sabores disponibles."); 
//     gustoUno = prompt("ingrese el primer sabor");
//     gustoDos = prompt("ingrese el segundo sabor");
//     alert(`Su ${kgHelado} kg posee ${gustoUno} y ${gustoDos}.`);
//     break;
//     case "1/2" : 
//     alert("3 sabores disponibles."); 
//     gustoUno = prompt("ingrese el primer sabor");
//     gustoDos = prompt("ingrese el segundo sabor");
//     gustoTres = prompt("ingrese el tercer sabor");
//     alert(`Su ${kgHelado} kg posee ${gustoUno}, ${gustoDos} y ${gustoTres}.`);
//     break;
//     case "3/4" : 
//     alert("4 sabores disponibles."); 
//     gustoUno = prompt("ingrese el primer sabor");
//     gustoDos = prompt("ingrese el segundo sabor");
//     gustoTres = prompt("ingrese el tercer sabor");
//     gustoCuatro = prompt("Ingrese el cuarto sabor");
//     alert(`Su ${kgHelado} kg posee ${gustoUno}, ${gustoDos}, ${gustoTres} y ${gustoCuatro}.`);
//     break;
//     case "1" : 
//     alert("5 sabores disponibles."); 
//     gustoUno = prompt("ingrese el primer sabor");
//     gustoDos = prompt("ingrese el segundo sabor");
//     gustoTres = prompt("ingrese el tercer sabor");
//     gustoCuatro = prompt("Ingrese el cuarto sabor");
//     gustoCinco = prompt("Ingrese el quinto sabor");
//     alert(`Su ${kgHelado} kg posee ${gustoUno}, ${gustoDos}, ${gustoTres}, ${gustoCuatro} y ${gustoCinco}.`);
//     break;
// }
// 🎓 Examen aprobado
// Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el 
// examen está aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor 
// a 4 recupera y si es menor a 4 es un aplazo.
// let nota = parseInt(prompt("Ingresa la nota del examen"));
// const estadoExamen = (nota: number) => {
//     if (nota >= 7) {
//         return alert("Aprobado");
//     } else if (nota >= 4) {
//         return alert("Recupera");
//     } else {
//         return alert("Aplazado");
//     }
// }
// estadoExamen(nota);
// Grupo de letras
// Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo 
// pertenece.
// grupo A = {a, e, i, o ,u}
// grupo B = {b, c, d, f, g}
// grupo C = {h, j, k , l, m}
// grupo D = {n, p, q, r}
// grupo E = {s, t, v, w, x, y, z}
// let letra = prompt("ingrese una letra");
// if (letra.match(/[aeiou]/gi)) {
//     return "Grupo A";
// } else if ()
// 📚 Elige tu propia aventura
// Crear un programa que simule un juego de "Elige tu propia aventura". Debe describir un escenario y
//  presentar opciones disponibles para actuar. Luego, a partir de la opción elegida, repetir el proceso 
//  hasta llegar a un final. El juego debe tener 1 escenario inicial con 3 opciones posibles, cada opción 
//  debe llevar a un nuevo escenario (distinto de los demás) con 3 opciones disponibles también. Estas 
//  opciones deben llevar a un final (por lo tanto hay 9 finales posibles).
// const eligeTuAventura = () => {
//     const inicio = prompt("Seleccione la opcion deseada: Me levanto y voy a 1-Gym 2-Trabajar 3-la playa");
//     switch(inicio) {
//         case "1": let gym = prompt("Seleccione como quiere continuar: 1 - Hago yoga 2 - Hago ejercicio y me voy 3 - Me desvio y voy a tomar un helado");
//         if(gym ==="1"){
//             alert("Fui al gimnasio y fue un dia normal");
//         } else if (gym ==="2") {
//             alert("Fui al gimnasio y fue un dia normal");
//         } else if (gym ==="3") {
//             alert("No fui al gimnasio y arranque bien el dia");
//         }
//     break;
//         case "2": let trabajar = prompt("Seleccione como quiere continuar: 1 - Me preparo un café 2 - Me preparo mate 3 - Me desvio y voy al correo a renunciar");
//         if(trabajar ==="1"){
//             alert("Fui al trabajo y fue un dia normal");
//         } else if (trabajar ==="2") {
//             alert("Fui al trabajo y fue un dia normal");
//         } else if (trabajar ==="3") {
//             alert("Fui al correo y arranque excelente el dia");
//         }
//     break;
//         case "3": let playa = prompt("Seleccione como quiere continuar: 1 - Me meto al mar 2 - Me pongo a leer tomando solcito 3 - Me desvio y me voy a la montaña");
//         if(playa ==="1"){
//             alert("Fui al mar y me mori de frio");
//         } else if (playa ==="2") {
//             alert("Fui al mar y me mori de calor leyendo");
//         } else if (playa ==="3") {
//             alert("Fui a la montaña y escale el aconcagua");
//         }
//     break;
//     }
//     let seguir = confirm("Quiere volver a elegir?");
//     if(seguir) {
//         eligeTuAventura();
//     } 
// }
// eligeTuAventura();
// 🍁 Estación del año
// Crear un programa que pregunte por el día, el mes y devuelva la estación del año correspondiente
// const darEstacion = () => {
//     const dia = parseInt(prompt("Que dia es?"));
//     const mes = parseInt(prompt("Que numero de mes es?"));
//     switch(mes) {
//         case 1: alert("Verano"); break;
//         case 2: alert("Verano"); break;
//         case 3: dia <= 20 ? alert("Verano") :alert("Otono"); break;
//         case 4: alert("Otono"); break;
//         case 5: alert("Otono"); break;
//         case 6: dia <= 20 ? alert("Otono") :alert("Invierno"); break;
//         case 7: alert("Invierno"); break;
//         case 8: alert("Invierno"); break;
//         case 9: dia <= 20 ? alert("Invierno") :alert("Primavera"); break;
//         case 10: alert("Primavera"); break;   
//         case 11: alert("Primavera"); break;    
//         case 12: dia <= 20 ? alert("Primavera") :alert("Verano"); break;
//     }
// }
// darEstacion();
// Envido
// Crear un programa que permita ingresar 3 cartas de truco (mazo español, sin ochos y nueves) una 
// por una, ingresando número y palo por separado, y mostrar luego si se tiene puntos para hacer envido o 
// no, y cuántos. Las reglas para el mismo son:
// Si se tiene dos cartas del mismo palo, de las cuales una (A) es un 10, un 11 o un 12, y la otra (B) un número distinto, los puntos de envido son: 20 + el número de la carta (B)
// Si se tienen dos cartas del mismo palo, de las cuales ambas son cualquiera de los siguientes números: 10, 11 o 12 (no hace falta que sean iguales), los puntos de envido son 20.
// Si se tienen dos cartas del mismo palo, y ninguna de ellas es un 10, un 11, o un 12, los puntos de envido son la suma de ambas cartas + 20
// // Por ejemplo
// Ingrese número primera carta: 7
// Ingrese palo primera carta: espada
// Ingrese número segunda carta: 4
// Ingrese palo segunda carta: copa
// Ingrese número tercera carta: 3
// Ingrese palo tercera carta: espada
// Sus puntos de envido son: 30
// 🔐 Cambio de contraseña
// Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las 
// tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por 
// la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta 
// fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) 
// preguntas y respuestas.
// const respPerro = "flor";
// const respPadre = "hugo";
// const respTel = "42482410";
// const pregPerro = () => {return prompt("Como se llama su primer perro?")};
// const pregPadre = () => {return prompt("Como se llama su padre?")};
// const pregTel = () => {return prompt("Como es su numero de telefono fijo?")};
// let nuevaClave: string;
// const cambiarContrasenia = () => {
//     let perro = pregPerro();
//     let padre = pregPadre();
//     let tel = pregTel(); 
//     console.log(respPadre, respPerro, respTel, perro, tel, padre);
//     if(respPerro === perro && respPadre === padre && respTel === tel) {
//         nuevaClave = prompt("Ingrese una nueva clave");
//         alert("Su clave ha sido modificada");
//     } else {
//         alert("Una de las respuestas no es correcta");
//     }
// }
// cambiarContrasenia();
// 🏖 Agencia de viajes
// Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona 
// (ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, 
// preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle 
// si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, 
// permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.
// const marDelPlata = 2000;
// const costaDelEste = 3000;
// const bariloche = 4500;
// let editar;
// const obtenerPrecioFinal = () =>{
//     switch (promo) {
//         case '1': editar= confirm("Usted seleccionó la opcion 1 el precio final es de ${ dias * personas * marDelPlata} . Desea cambiar algun dato?" )
//             break;
//         case '2': editar= confirm("Usted seleccionó la opcion 2 el precio final es de ${dias * personas * costaDelEste}. Desea cambiar algun dato?")
//             break;
//         case '3': editar= confirm("Usted seleccionó la opcion 3 el precio final es de ${ dias *  personas * bariloche}. Desea cambiar algun dato?")
//             break;
//         default: alert("El dato ingresado no es correcto.")
//             break;
//     }
//     if (editar) {
//         const opcion= prompt("Cual de ellos quiere editar?  1: destino 2: personas 3: dias")
//         switch (opcion) {
//             case "1":
//                 promo = selecccionarPromo();
//                 break;
//             case "2":
//                 personas = seleccioanrPersonas();
//                 break;
//             case "3":
//                 dias = seleccionarDias();
//                 break;
//         }
//        obtenerPrecioFinal();
//     }
//     else {
//         alert("Buen viaje!");
//     }
// }
// const selecccionarPromo = () => {
//     return prompt("Promos x persona --> Promo 1: Mar del plata x dia $2000 Promo 2 : Costa del este x dia $3000 Promo 3 : bariloche x dia $4500. Cual desea elegir");
// }
// const seleccionarDias = () => {
//     return prompt("Cuantos dias?");
// }
// const seleccioanrPersonas = () => {
//     return prompt("Cuantos personas?")
// }
// let promo = selecccionarPromo();
// let dias = seleccionarDias();
// let personas = seleccioanrPersonas();
// obtenerPrecioFinal();
// if (editar) {
//     const opcion= prompt("Cual de ellos quiere editar?  1: destino 2: persona 3: dias")
//     switch (opcion) {
//         case "1":
//             promo = selecccionarPromo();
//             break;
//         case "2":
//             dias = seleccionarDias();
//             break;
//         case "3":
//             personas = seleccioanrPersonas();
//             break;
//     }
//    obtenerPrecioFinal();
// }
// else {
//     alert("Buen viaje!");
// }
// 🍳 Recetas
// Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, 
// mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 
// ingredientes. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5).
// Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se 
// tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que
// pueda hacerse también debe mostrarse un mensaje.
// let rec1Ing2 = "pan";
// let rec2Ing2 = "huevos revueltos";
// let rec1Ing3 = "chocotorta";
// let rec2Ing3 = "pancake";
// let rec1Ing4 = "arroz con verduras";
// let rec2Ing4 = "calabaza rellena";
// let rec1Ing5 = "burguer veggie";
// const preguntarCantIngredientes = () => {
//     let cantIngredientes = parseInt(prompt("Cuantos ingredientes posee?"));
//     if (cantIngredientes   === 2) {
//         alert(`Puedes hacer ${rec1Ing2} o ${rec2Ing2}.`);
//     } else if(cantIngredientes <= 3 && cantIngredientes > 1) {
//         alert(`Puedes hacer ${rec1Ing2}, ${rec2Ing2} o ${rec1Ing3}.`);
//     } else if(cantIngredientes <= 4 && cantIngredientes > 1) {
//         alert(`Puedes hacer ${rec1Ing2}, ${rec2Ing2}, ${rec1Ing3}, ${rec1Ing4} o ${rec2Ing4}.`);
//     } else if (cantIngredientes <= 5 && cantIngredientes > 1) {
//         alert(`Puedes hacer ${rec1Ing2}, ${rec2Ing2}, ${rec1Ing3}, ${rec1Ing4}, ${rec2Ing4} o ${rec1Ing5}.`);
//     } else {
//         alert("Con esa cantidad de ingredientes no tengo recetas");
//     }
// }
//     preguntarCantIngredientes();
// 📱 Marcas y modelos
// Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. Una vez elegida 
// la marca debe ofrecer elegir entre dos modelos distintos de la marca. Finalmente debe mostrar el producto
// elegido. Cada marca debe tener modelos distintos a los de otras marcas (no pueden tener el mismo nombre).
// P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.
// 🥪 Sandwich
// Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su 
// pedido. En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje 
// alertando que el pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. 
// Debe preguntar:
// Tipo de pan: blanco, negro, integral
// Ingrediente 1: tomate, lechuga, pimiento
// Ingrediente 2: cebolla, aceituna, pepino
// Aderezos: mostaza, mayonesa, picante
// Gaseosa: Coca Cola, Pepsi, Sprite
// 🏙 Departamento
// Crear un programa que pregunte por características de un departamento, y dependiendo de las 
// opciones defina qué tan recomendado es un departamento para alquilar. Preguntar por 3 o 4 
// características (ubicación, antigüedad, costo, etc). Cada característica debería tener al menos 
// 3 opciones posibles para elegir. Al final, debe mostrar un mensaje indicando cuánto se recomienda 
// (usar al menos 4 niveles de recomendación posible).
// Número aleatorio
// Podemos obtener un número aleatorio usando el método Math.random(). Esto nos devuelve un número 
// distinto entre 0 y 1 cada vez que lo utilizamos.
// Para que nos de un número aleatorio hasta cierto número X, tenemos que multiplicarlo por dicho número 
// X, Math.random() * 10 nos da un número aleatorio entre 0 y 10 (contando decimales)
// Para que nos devuelva números enteros, tenemos que usar Math.round(Math.random()) (Math.round() 
// redondea todo número que se le pasa entre paréntesis)
// Combinando ambos, p.ej.: Math.round(Math.random() * 10) nos da un número aleatorio entre 0 y 10
// Si queremos que el número empiece a contar a partir de 1, tenemos que usar 
// Math.ceil(Math.random() * 10)
// Si queremos que empiece a contar desde un cierto número, tenes que sumarle dicho número, 
// por ejemplo p.ej.: Math.round(Math.random() * 10) + 100 nos da un número entero entre 100 y 110
// Para usar un número aleatorio, tenemos que asignarlo a una variable
// const random = Math.round(Math.random() * 10) + 100;
// Usando valores aleatorios y condicionales, resolver los siguientes ejercicios:
// ✊🤚✌️ Piedra, papel o tijera
// Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria 
// la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.
// let piedra = 1;
// let papel = 2;
// let tijera = 3;
// let jugadaCompu = Math.round(Math.random() * 3);
// const jugarPiedraPapelOTijera = () => {
//     let jugada = parseInt(prompt("Ingrese 1 para piedra, 2 para papel y 3 para tijera"));
//     if (jugada === 1 && jugadaCompu === 3 || 
//         jugada === 2 && jugadaCompu === 1 ||
//         jugada === 3 && jugadaCompu === 2) {
//             alert(`Ganaste! Tu jugada fue ${jugada} y la compu saco ${jugadaCompu}`);
//         } else if (
//         jugada === 1 && jugadaCompu === 1 || 
//         jugada === 2 && jugadaCompu === 2 ||
//         jugada === 3 && jugadaCompu === 3) {
//         alert(`Empataron! Tu jugada fue ${jugada} y la compu saco ${jugadaCompu}`);
//         } else {
//             alert(`Gano la compu! Tu jugada fue ${jugada} y la compu saco ${jugadaCompu}`);
//             }    
// }
// jugarPiedraPapelOTijera();
// 🤔 Adivinanzas
// Crear un programa que muestre una adivinanza (entre 4 o 5 posibles) al azar, y permita 
// al usuario ingresar la respuesta. Mostrarle un mensaje indicándole si acertó o no.
// 🎨 Simón dice
// Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. 
// Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno,
//  y mostrar al finalizar si acertó la secuencia.
// // Ejemplo
// Simón dice: rojo, rojo, azul, verde, amarillo.
// Ingrese el primer color: rojo
// Ingrese el primer color: rojo
// Ingrese el primer color: azul
// Ingrese el primer color: verde
// Ingrese el primer color: amarillo
// Felicitaciones! Has ganado!
// let colorAleatorio: number;
// let colores= new Array(5);
// let color: string;
// const definirSecuencia = () => {
//     for (let i = 0; i < 5; i++) {
//     colorAleatorio = Math.round(Math.random() * 3)+1;
//     switch (colorAleatorio) {
//         case 1: return color = "rojo";
//         case 2: return color = "azul";
//         case 3: return color = "verde";
//         case 4: return color = "amarillo";
//     }
//         // colores[i] = colores.push(color);
//         colores[i] = color; 
//     }
// }
// definirSecuencia();
// console.log(colores);
// 🃏 Truco
// Crear un programa que permita ingresar una carta del truco (mazo español, sin ochos y nueves) 
// ingresando número y palo por separado. Hacer que el programa elija aleatoriamente otra carta. 
// Mostrar un mensaje con ambas cartas, indicando cuál gana a cuál (o si empatan).
// Orden de las cartas, de mayor valor a menor:
// 1 de espadas
// 1 de bastos
// 7 de espadas
// 7 de oros
// 3
// 2
// 1 de copa y 1 de oro
// 12
// 11
// 10
// 7 de copas y 7 de bastos
// 6
// 5
// 4
// // Ejemplo
// Ingrese el número de la carta: 7
// Ingrese el palo de la carta: espada
// Has elegido: 7 de espada
// Computadora eligió: 3 de copa
// ¡Has ganado!
// Condicional switch
// Para los siguientes ejercicios utilizar el condicional switch donde sea necesario.
// 🗓 Meses del año
// Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes 
// correspondiente.
// ❄️ Estaciones del año II
// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza 
// y termina
// 🧮 Calculadora
// Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, 
// y luego de elegida, ingresar dos números y hacer dicha operación con ella.
// 🐛 Tamagochi
// Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, 
// felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar 
// mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados
// aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican 
// los valores de la siguiente forma:
// ALIMENTAR: +3 energía, +2 felicidad
// JUGAR: +2 felicidad, -2 energía, -1 limpieza
// DORMIR: +5 energía, +2 salud, -2 limpieza
// VACUNAR: +5 salud, -6 felicidad
// BAÑAR: +3 salud
// RETAR: -3 felicidad
// ACARICIAR: +4 felicidad
// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
// let salud = Math.round(Math.random() * 9)+1; 
// let felicidad = Math.round(Math.random() * 9)+1; 
// let limpieza = Math.round(Math.random() * 9)+1;
// let energia = Math.round(Math.random() * 9)+1;
// let mensaje = parseInt(prompt(`Dino se encuentra de esta manera: 
//                     Salud: ${salud}
//                     Felicidad: ${felicidad}
//                     Limpieza: ${limpieza}
//                     Energia: ${energia}
//                     Elige la accion a realizar: 
//                     1-ALIMENTAR 2-JUGAR 3-DORMIR 4-VACUNAR 5-BAÑAR 6-RETAR 7-ACARICIAR`));
// switch(mensaje){
//     case 1: energia = energia +3, felicidad = felicidad +2; break;
//     case 2: felicidad = felicidad +2, energia = energia -2, limpieza = limpieza -1; break;
//     case 3: energia = energia +5, salud = salud +2, limpieza = limpieza -2; break;
//     case 4: salud = salud +5, felicidad = felicidad -6; break;
//     case 5: salud = salud +3; break;
//     case 6: felicidad = felicidad -3; break;
//     case 7: felicidad = felicidad +3; break;
// }
// alert(`Ahora Dino se encuentra asi: 
//         Salud: ${salud}
//         Felicidad: ${felicidad}
//         Limpieza: ${limpieza}
//         Energia: ${energia}`);
// 📺 Televisor
// Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, 
// el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el 
// nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
// CAMBIAR CANAL: permite ingresar un canal (0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.
// 💵 ATM
// Crear un programa que permita hacer las siguientes operaciones: EXTRAER, DEPOSITAR, TRANSFERIR, 
// CAMBIAR PIN, SALIR.  
// El programa debe tener un dinero inicial
// El programa debe tener un PIN inicial
// Para empezar a utilizarlo y llegar al menú de opciones, debe pedir ingresar el PIN. Si se lo ingresa 
// incorrectamente debe terminar el programa
// EXTRAER debe pedir cuánto se desea extraer y mostrar luego el dinero restante, sólo si la extracción
// es menor al dinero disponible
// DEPOSITAR debe pedir cuánto se desea ingresar y mostrar luego el dinero resultante
// TRANSFERIR debe pedir por un CBU (o alias) a transferir, preguntar cuánto se desea transferir y 
// mostrar el dinero restante, si la transferencia es menor al dinero disponible y si el CBU es válido. 
// Los CBU o alias válidos posibles (2 o 3) deben estar guardados en variables.
// CAMBIAR PIN debe pedir primero por la contraseña nueva y luego por la contraseña original para 
// confirmar el cambio
// SALIR debe mostrar un mensaje de despedida
// En cualquier situación mostrar mensajes de lo que esté pasando operaciones exitosas
// let pinInicial = 1234;
// let dineroDisponible = 150000;
// let cbuDisp1 = 12345678;
// let cbuDisp2 = 4567891011;
// const iniciarOp = () => {
//     let pin = parseInt(prompt("Ingrese el numero de PIN"));
//     if (pin === pinInicial) {
//         alert(`Su dinero disponible es ${dineroDisponible}`);
//         let opcion = parseInt(prompt("Ingrese la opcion a realizar: 1-Extraer 2-Depositar 3-Transferir 4-Cambiar PIN 5-Salir"));
//         switch(opcion) {
//             case 1: let extraccion = parseInt(prompt("Ingrese el dinero a extraer"));
//                     if (extraccion <= dineroDisponible) {
//                         dineroDisponible = dineroDisponible - extraccion;
//                         alert(`Su dinero disponible ahora es de ${dineroDisponible}`);
//                     } else {alert(`No es posible hacer esa extraccion`); 
//                 } break;
//             case 2: let deposito = parseInt(prompt("Ingrese el dinero a depositar"));
//                     dineroDisponible = dineroDisponible + deposito;
//                     alert(`Su dinero disponible ahora es de ${dineroDisponible}`);
//                     break;
//             case 3: let transferencia = parseInt(prompt("Ingrese el dinero a tranferir"));
//                     let cbu = parseInt(prompt("Ingrese el CBU para tranferir"));
//                     if (transferencia <= dineroDisponible) {
//                         if (cbu === cbuDisp1 || cbu === cbuDisp2) {
//                             dineroDisponible = dineroDisponible - transferencia;
//                             alert(`Su dinero disponible ahora es de ${dineroDisponible}`);
//                         } else {
//                             alert(`El CBU ingresado no esta disponible`);
//                         }
//                     } else { 
//                         alert(`No es posible hacer esa transferencia`); 
//                         } break;
//             case 4: let nuevoPin = parseInt(prompt("Ingrese un nuevo PIN"));
//                     let pinAnterior = parseInt(prompt("Ingrese el numero de PIN anterior"));
//                     if (pinAnterior === pin) {
//                         pin = nuevoPin;
//                         alert("El PIN se ha modificado");
//                     } else {
//                         alert("El PIN anterrior ingresado es incorrecto");
//                     } break;
//             case 5: alert("Gracias por operar con nosotros");        
//         }
//     } else {
//         alert("El pin es incorrecto");
//     }     
// }
// iniciarOp();
// 🎰 Ruleta
// Crear un programa que simule una apuesta de ruleta. El programa debe mostrar las opciones posibles 
// para apostar y preguntar qué se desea elegir:
// ROJO: gana si el número es rojo
// NEGRO: gana si el número es negro
// PAR: gana si número es par
// IMPAR: gana si el número es impar
// ALTA: gana si el número es menor o igual a 18
// BAJA: gana si el número es mayor a 18
// PRIMERA DOCENA: gana si el número está incluido en la primera docena (del 1 al 12)
// SEGUNDA DOCENA: gana si el número está incluido en la segunda docena (del 13 al 24)
// TERCERA DOCENA: gana si el número está incluido en la tercera docena (del 25 al 36)
// Una vez elegida la opción, el programa debe generar aleatoriamente un número entre 1 y 36, de color negro o rojo. Mostrar un mensaje con el número que salió y si se ganó o no la apuesta.
