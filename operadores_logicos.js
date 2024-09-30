//OPERADOR && (y)

/*let continente, edad;
continente = prompt('INGRESE SU CONTINENTE');
edad = prompt('INGRESE SU EDAD');

if (continente == 'america' && edad >=18 ) {
    document.write('eres un adulto americano');
}else{

    document.write('o no eres adulto, o no eres americano')
}*/

let dia,mes,anio;
dia = prompt('Ingrese un dia...');
mes = prompt('Ingrese un mes...');
anio = prompt('Ingrese un año...');

if (mes == 1 || mes == 2 || mes == 3 ) {
    document.write('Pertenece al primer trimeste!');
} else{
       document.write('No pertenece al primer trimestre');
}