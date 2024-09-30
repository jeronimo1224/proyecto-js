

/*let nombre,edad
nombre = prompt('INGRESE SU NOMBRE...');
edad = prompt('INGRESE SU EDAD...');
edad = parseInt(edad)


if (edad >=18 ) {
    document.write('eres una persona mayor de edad'); 
}
else if (edad <=18) {
    document.write('eres una persona menor de edad');
}
else {

document.write('no has ingresado datos');

}
//tuve un error en los codigos else y if y puse primero if en vez de poner else if*/

let mes, dia, anio;
mes = prompt('INGRESE SU MES DE NACIMIENTO...');
dia = prompt('INGRESE SU DIA DE NACIMIENTO...');
anio = prompt('INGRESE SU AÑO DE NACIMIENTO...');
if (anio <= 2005 ) {
    document.write('ERES MAYOR DE EDAD, BIENVENIDO!')
}else{

document.write('NO ERES MAYOR DE EDAD LO SENTIMOS')

}
