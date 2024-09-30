/*let f = 10;

while (f >= 0) {
    document.write('vuelta no. ', f);
    document.write('<br>');
    f--;

}
document.write('FIN DEL BUCLE');*/

let f = 1;
let suma = 0;
let valor;

while ( f <= 5) {
    valor = parseInt(prompt('INGRESE VALOR'));
    suma = suma + valor;
    f++;
}
document.write("La suma es: ", suma , '<br>'); 