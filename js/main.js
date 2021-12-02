var marginTop = 0;
var marginLeft = 0;
var velocidad = 10;
var pikachu = document.getElementById('pika');

document.addEventListener('keydown',funcion);

function funcion(event){
    if (event.keyCode == '37') {
        marginLeft -= velocidad;
        pikachu.style.marginLeft=marginLeft+'px';
        pikachu.style.backgroundColor = '#D6992F';
    }else if(event.keyCode == '39'){
        marginLeft += velocidad;
        pikachu.style.marginLeft=marginLeft+'px';
        pikachu.style.backgroundColor = '#87286D';
    }
    else if(event.keyCode == '38'){
        marginTop -= velocidad;
        pikachu.style.marginTop=marginTop+'px';
        pikachu.style.backgroundColor = '#722887';
    }
    else if(event.keyCode == '40'){
        marginTop += velocidad;
        pikachu.style.marginTop=marginTop+'px';
        pikachu.style.backgroundColor = '#422887';
    }
    
}

document.addEventListener('keydown', tec)
function tec(event){
    var x = event.keyCode;
    document.getElementById('tecla').innerText = 'Tecla precionada es:' + x;
}