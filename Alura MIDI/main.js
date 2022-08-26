
function tocaSom (seletorAudio){
   const elemento = document.querySelector(seletorAudio); /*Codigo que trás o som que está carregado (referenciado) no html*/

    if(elemento === null){
       //alert('Elemento não encontrado');
    }

    if(elemento != null && elemento.localName === 'audio' ){  //se usar o 'elemento' != null, o js já entende que é um 'se não for igual'
      //  console.log(elemento.localName === 'audio'); // propriedade onde o elemento guarda a informação do nome
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor invalido');
    }
    

}

/*document.querySelector('.tecla_pom').onclick = tocaSomPom; /*Codigo que trás o botão */

/* document.querySelectorAll('.tecla'); - Pegando e selecionando toda a classe 'tecla' */

const listaDeTeclas = document.querySelectorAll('.tecla'); /*Referencia Constante (não muda o valor da lista)*/

// para (contador pode ser parado dentro do for)
for (let contador = 0; contador < listaDeTeclas.length; contador++) {  // for( variavel, lista.numero fim; laço de repetição)

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //crase é outra forma de criar strings (${}) -
    //'#som_{instrumento}'
   //template string
   
    tecla.onclick = function () {

        tocaSom(idAudio);

    }

    tecla.onkeydown = function (evento) {


        if(evento.code === 'Space' || evento.code === '' ){

            tecla.classList.add('ativa');
        }

    }
    
        tecla.onkeyup = function () {

        tecla.classList.remove('ativa');

    }

}


