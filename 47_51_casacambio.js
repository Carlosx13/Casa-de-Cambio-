var opcion, tccomp = 0, tcvta = 0;
var siPesos = 0, siDlls = 0;
var pesosv = 0, dllsv = 0, pesosc = 0, dllsc = 0;
var incPesos = 0, incDlls = 0;
var saldodlls = 0;
var saldopesos = 0;
var nombre = '';
var password = '';
var bandera = 0;

pesosv = parseFloat(pesosv); pesosc = parseFloat(pesosc);
dllsv = parseFloat(dllsv); dllsc = parseFloat(dllsc);
saldopesos = parseFloat(saldopesos); saldodlls = parseFloat(saldodlls);

alert('Bienvenido a la casa de cambio "LA CHONA"');

inicio();
function inicio() {
    if (bandera == 0) {
        nombre = prompt('Usuario:');
    }
    password = prompt('Password:');
    if (nombre != 'Chona' || password != 'hola') {
        alert('El usuario o password ingresado es incorrecto.')
        inicio();
    } else {
        if (bandera == 0) {
            alert('Bienvenido ' + nombre);
        }
        bandera = 1;
    }
}

siDlls = parseFloat(prompt('Monto para iniciar Operaciones Dolares: \n', 0));
if (siDlls <= 0) {
    siDlls = 0;
    alert('Usted iniciara SIN SALDO en Cuenta de DOLARES')
}
saldodlls = siDlls

siPesos = parseFloat(prompt('Monto para iniciar Operaciones Pesos: \n', 0));
if (siPesos <= 0) {
    siPesos = 0;
    alert('Usted iniciara SIN SALDO en Cuenta de PESOS')
}
saldopesos = siPesos;

menu();
function menu() {
    opcion = prompt('Casa de Cambio "La Chona"\n' +
        'Seleccione el tipo de Operacion que desea realizar: \n' +
        '\n' + ' ' + 'MENU ' + ' ' + '\n' +
        '1) Saldo Inicial (Dolares/Pesos)\n' +
        '2) Incremento en Pesos \n' +
        '3) Incremento en Dolares\n' +
        '4) Tipo de cambio Compra (Dolares-Pesos)\n' +
        '5) Tipo de cambio Venta (Pesos-Dolares)\n' +
        '6) Cambiar Dolares a Pesos\n' +
        '7) Cambiar Pesos a Dolares\n' +
        '8) Consultar Saldo MXN y USD \n' +
        '9) Salir\n');

    switch (opcion) {
        case '1':
            sinicial();
            break;
        case '2':
            increPesos();
            break;
        case '3':
            increDlls();
            break;
        case '4':
            tcPesos();
            break;
        case '5':
            tcDlls();
            break;
        case '6':
            cantPesos();
            break;
        case '7':
            cantDlls();
            break;
        case '8':
            consulta();
            break;
        case '9':
            salir();
            break;
        default:
            alert("Dato invalido");
    }
    if (opcion != 9)
        menu();
}
// funcion 1 saldo inicial
function sinicial() {
    alert('Su saldo Inicial fue de:' +
        '\n - DOLARES:  '+ siDlls  +
        '\n - PESOS: ' + siPesos);
}
// funcion 2 incremento pesos
function increPesos() {
    inicio();
    incPesos = parseFloat(prompt('Capture nuevo monto:', 0))
    if (incPesos < 0) {
        incPesos = 0;
        alert('Ingreso no valido, es menor o igual "0"' + '\n \n Su saldo Pesos no sera afectado.')
    }
    alert('Incremento Saldo Pesos: ' + incPesos);
    saldopesos += incPesos;
}

// funcion 3 incremento dolares
function increDlls() {
    inicio();
    incDlls = parseFloat(prompt('Capture nuevo monto:', 0))
    if (incDlls <= 0) {
        incDlls = 0;
        alert('Ingreso no valido, es menor o igual "0"' + '\n \n Su saldo Dolares no sera afectado.')
    }
    alert('Incremento Saldo Dolares: ' + incDlls);
    saldodlls += incDlls;
}

// funcion 4 TC Compra
function tcPesos() {
    tccomp = prompt('Indique el tipo de cambio de COMPRA: ');
    if (tccomp <= 0) {
        tccomp = 0;
        alert('Dato no valido, su TC es menor o igual 0' + '\n \n Capture nuevamente.')
        tcPesos();
    }
    alert('TIPO DE CAMBIO:' + '\n' +
        'Compra: ' + ' ' + tccomp);
}

// funcion 5 TC Venta
function tcDlls() {
    tcvta = prompt('Indique el tipo de cambio de VENTA: ');
    if (tcvta <= 0) {
        tcvta = 0;
        alert('Dato no valido, su TC es menor o igual 0' + '\n \n Capture nuevamente.')
        tcDlls();
    }
    alert('TIPO DE CAMBIO:' + '\n' +
        'Venta: ' + ' ' + tcvta);
}

// funcion 6 cambiar dlls a pesos
function cantPesos() {
    dllsv = prompt('Cuantos dolares va a cambiar: ');
    pesosc = tccomp * dllsv;
    if (pesosc > saldopesos) {
        alert('No cuenta con saldo')
        increPesos();
        cantPesos();
    } else {
        pesosc = tccomp * dllsv;
        alert('Usted recibio: ' + ' ' + pesosc + ' ' + 'pesos');
        saldopesos -= pesosc;
        saldodlls += dllsv;
    }
}

// funcion 7 cambio pesos a dolares
function cantDlls() {
    pesosv = prompt('Cuantos pesos va a cambiar va a cambiar: ');
    dllsc = pesosv / tcvta;
    if (dllsc > saldodlls) {
        alert('No se cuenta con saldo')
        increDlls();
        cantDlls();
    } else {
        dllsc = pesosv / tcvta;
        alert('Usted recibio: ' + ' ' + dllsc + ' ' + 'dolares');
        saldodlls -= dllsc;
        saldopesos += pesosv;
    }
}

// funcion 8 Consultar creditos MXN y USD
function consulta() {
    alert('Su saldo es: ' +
        '\n - DOLARES: ' + saldodlls +
        '\n - PESOS: ' + saldopesos);
}

// funcion 9 salir
function salir() {
    alert('Usuario' + ' ' + nombre + ' ' + ' a salido del programa');
}
