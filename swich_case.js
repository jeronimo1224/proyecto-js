let valor;
valor = parseInt(prompt('ingrese un vaor entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('ingreso uno');
        break;
    case 2:
        document.write('ingreso dos');
        break;
    case 3:
        document.write('ingreso tres');
        break;
        default:
            document.write('no es numero valido')
            break;
    
        
}
