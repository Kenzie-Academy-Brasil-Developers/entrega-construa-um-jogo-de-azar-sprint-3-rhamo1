
let jogadorEscolha = 0;
let computadorEscolha = 0;
let resultado = -1;

//escolhas
// 1 pedra
// 2 papel
// 3 tesoura

function jogada(escolha){


    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
    console.log(computadorEscolha)

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    if(computadorEscolha == 1){
       const corPedra = document.getElementById('pedraPc');
       corPedra.style.backgroundColor = "#" + randomColor;

    }
    if(computadorEscolha == 2){
        const corPapel = document.getElementById('papelPc');
        corPapel.style.backgroundColor = "#" + randomColor;


    }
    if(computadorEscolha == 3){
        const corTesoura = document.getElementById('tesouraPc');
        corTesoura.style.backgroundColor = "#" + randomColor;

    }

    //jogos

    //pedra - pedra
    if(jogadorEscolha == 1 && computadorEscolha == 1){
        resultado = 0;
    }
    //pedra - papel
    else if(jogadorEscolha == 1 && computadorEscolha == 2){
        resultado = 2
    }
    //pedra - tesoura
    else if(jogadorEscolha == 1 && computadorEscolha == 3){
        resultado = 1
    }

    //papel - pedra
    else if(jogadorEscolha == 2 && computadorEscolha == 1){
        resultado = 1
    }
    //papel - papel
    else if(jogadorEscolha == 2 && computadorEscolha == 2){
        resultado = 0
    }
    //papel - tesoura
    else if(jogadorEscolha == 2 && computadorEscolha == 3){
        resultado = 2
    }
    //tesoura - pedra
    else if(jogadorEscolha == 3 && computadorEscolha == 1){
        resultado = 2
    }    

    //tesoura - papel   
    else if(jogadorEscolha == 3 && computadorEscolha == 2){
        resultado = 1
    }

    //tesoura - tesoura
    else if(jogadorEscolha == 3 && computadorEscolha == 3){
        resultado = 0
    }

    // alert(resultado)


    //resultado do jogo

    if(resultado == 0){
        document.getElementById('log').innerHTML = 'Empate!'
    }
    if(resultado == 1){
        document.getElementById('log').innerHTML = 'Você venceu!'
    }
    if(resultado == 2){
        document.getElementById('log').innerHTML = 'Perdeu! Mais sorte na próxima!'
    }

    

    

    
} 
