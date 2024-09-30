let nombre,edad
nombre = prompt('INGRESE SU NOMBRE...');
edad = prompt('INGRESE SU EDAD...');
edad = parseInt(edad);
if (edad >= 18) {
    document.write('BIENVENIDO ', nombre);
    
}else{
    if (edad < 18) {
        document.write(nombre, ' ERES MENOR DE EDAD');   
    }
      else{
      
        document.write('NO HAS INGRESADO DATOS');

      }


}
