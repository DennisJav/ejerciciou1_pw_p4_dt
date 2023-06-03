
var puntaje = 0;
var intento = 0;

function puntajes(){
    if(intento == 1){
        puntaje=5;
        document.getElementById('idPuntaje').value = 5;
        document.getElementById('idInteno').value = intento;
    }if(intento==2){
        puntaje=3;
        document.getElementById('idPuntaje').value = puntaje;
        document.getElementById('idInteno').value = intento;
    }if(intento==3){
        puntaje=1;
        document.getElementById('idPuntaje').value = puntaje;
        document.getElementById('idInteno').value = intento;
    }
}



function correcta(){
    document.getElementById('idImagenes').src = "../img/pcolor.jpg";
    document.getElementById('idRespuesta').value = 'Felicitaciones, has seleccionado la opción correcta' ;
    document.getElementById('idRespuesta').style.backgroundColor='blue';
    document.getElementById('idRespuesta').style.borderStyle='solid';
    document.getElementById('idRespuesta').style.fontFamily='"Times New Roman", Times, serif';
    document.getElementById('idRespuesta').style.color='white';
    intento++;
    puntajes();

}

function incorrecta(){
    document.getElementById('idImagenes').src = "../img/pnegro.jpg";
    document.getElementById('idRespuesta').value = 'Pokémon incorrecto, intentalo nuevamente';
    puntaje++;
    intento++;
    if(intento>3){
        reiniciar();
    }
}

function reiniciar(){
    document.getElementById('idImagenes').src = "../img/pnegro.jpg";
    document.getElementById('idRespuesta').style.backgroundColor=' #F0EEED';

    document.getElementById('idRespuesta').style.color='black';
    document.getElementById('idRespuesta').value = '';
    document.getElementById('idPuntaje').value = '';
    document.getElementById('idInteno').value = '';
    puntaje = 0;
    intento=0;
}