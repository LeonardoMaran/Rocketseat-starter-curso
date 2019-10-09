import React, { Component } from "react";
import api from '../services/api';

import {View, Text, FlatList} from "react-native";
import { defaultCoreCipherList } from "constants";


export default class Main extends Component {
    static navigationOptions = {
        title: " JSHunt "
    };




    // Aula 6 00.31.43, para isto eu vou comecar dando um import.api, agora agente 
// jatem acesso a parte do axios aqui dentro, show de bola, agora vamos comecar
// com a parte de consumir dados da api para depois exbir em tela, ntao qual seria
// o melhor momento para agente fazer a chamada api, como agente precisa mostrar, captar
// dados da api logo que esta pagina carrega, dentro do react agente tem um metodo que ele 
// e disparado automaticamente assim que o nosso componentee montado,assim que ele e exibido
// em tela, que se chama component did mounth

//que  como se o nosso metodo inicial,  disparado
// auomaticamnete,e aqui dentro e o melhor local para agente fazer a chamada api, e mostrar o
// resultado depois em tela, beleza, para agente fazer achamada api logo dentro do component mounth


// Aula7 00.37.31

//todas as variaveis elas vao para dentro do nosso estado, mas porque que agente vai utilizar um estado e
// nao vai  utilizar uma variavel simples do javascript ou utilizar uma variavel direto dentro da classe, 
// porque o react ele fica ouvindo as alteracoes no estado e toda a vez que houver uma alteracao dentro de 
// uma variavel no estado, ele vai executar o metodo render de novo, e porque que isto e legal, porque agente 
// consegue fazer a renderizacao do nosso componente automatica, o que que eu quero dizer com isto, vamos supor
// vamos supor que assim que eu armazene aqui um counter que e basicamnte quantos registros eu vou conseguir puxar
// da  nossa api, eu vou iniciar ele aqui como 0 beleza,         

state = { 
    docs: [],
};

    componentDidMount(){
        this.loadProducts();
    }

    // porque depois agente vai utilizar a chamada api mais um momento, eu vou fazer o seguinte, this.loadproducts
// e vou criar um segundo metodo load products, agente esta praticamente so repassando a chamada do metodo para outra  funcao,
// que eu vou utilizar uma funcao no estilo arrow functon, mas porque que tu esta utilizando uma funcao no estilo
// arrow function, e nao como o react esta utilizando aqui em cima, 00.33.10, por padrao, no react, quando agente esta utilizando
// um metodo que e do proprio react como o render ou o component didimount, agente pode utilizar este padrao aqui 
// sem problemas nenhum, ele vai funcionar,

    loadProducts = async () => {
        const response = await api.get(" /products ");
        const { docs  } = response.data;
        console.Console.log(docs);
// mas porque que nao  vai  funcionar este metodo num padrao utilizado pela gente, basicamente
// quando agente cria uma funcao dentro de uma classe que nao segue o modelo padrao de arrowfunction ela passa a nao conseguir enxergar o this
// entao ela nao consegue mais localizar o this dentro da variavel e ai agente para de cosneguir referenciar outras informacoes daa nossa classe
// por dentro desta funcao, por isso que eu utilizo o padrao dearrow functions e assim eu consigo manter o padrao porque o arrow function ele nunca cria 
// um novo escopo de funcao, ele herdao escopo acima dele, este seria o conceito aplciado aqui, agora agente vai utilizar o axios para consumir a api, 
// eu vou comecar escrevendo uma variavel response igual e aquieu vou utilizar o padrao de async await que e ma forma mais facil a partir para agente trabalhar 
// com promissses,

        
    //Aula 7 00.38.15 

    //e ai eu vou colocar esta informacao aqui dentro do meu render
// this ponto state ponto counter, paa eu exibir este javascript para
// dentro deste render e s eu colocar as chaves e colocar a variavel
// tranqulo, muito simples, e agora assim que eu receber os resultados 
// aqu no load prodcuts eu vou utilizar o comando set state que e o metodo
// u nao posso simplesmente dar um this state ponto counter beleza eu tenho 
// que sempre que utilizar um set state e aqui dentro eu sempre passo as variaveis 
//que eu qero alterar, ou seja counter, eu quero colocar igual a docs. lenght ou seja 
// todos os registros que eu consegur puxar da api, eu vou salvar ito aqui agora e veja
// que legal, ele comeca com 0 e altera, e ao inves de salvar o counter eu vou salvar os docs
// aqui dentro do render

// como e que agente pode testar isto aqui 
this.setState({ docs});

    };

//Aula 8 00.43.57 e agora eu vou chamar o render item aqui dentro, eu vou criar esta funcao, e o render 
//item ele recebe uma serie de parametros aqui dentro e aqui agente pode utilizar desestruturacao nos parametros 
//aqui dentro para receber o nosso item, exatamente este item aqui e o que guarda todas as informacoes do nosso produto 
// e ai  agente va ter acesso a ee ao title, descirption e tudo mais, e agora aqui, ao inves de eu utilizar as chaves, como 
// eu falei anteriormente la dentro do map eu posso utilizar direto os parenteses quando eu quero um return direto 00.44.29     

  //00.39.25 eu vou abrir aqui um codigo javascript e vou fazer o seguinte , this ponto state
  // ponto docs que e a nosssa variavel que e aonde vai estar a nossa array de docs la da api 
  // e eu vou dar um ponto map que e quando agente quer percorrer sobre algum array dentro do 
  //javascript, e ai eu vou abrir uma funcao agora num parametro eu vou receber cada uma destas
  // funcoes que eu vou chamar de products  e aqui eu quero retornar alguma coisa, e ai voce tm duas 
  // formas no react para agente mais um jsx, mais um pouco de um conteudo visual dentro de um map ou 
  //dentro de qualquer outra funcao,00.40.03, a primeira dela e utilizando as chaves, e e agente da um return
  //no que agente quer retornar, eu ou retornar por exemplo um text, e aqui por exemplo eu vou colocar um product,
  //product ponto title, vamos salvar, vamos ver se ele retorna, veja que legal ele ja colocou todos os nomes dos  meus 
  // produtos, e uma  forma de agente reduzir isto aqui mais ainda e agente tirar o return e trocar as nossas chaves por 
  // parenteses e ai o nosso paretnetes e como se agente tivesse dando return direto, vou salvar aqui agora, vou dar m save
  // e aui veja que agente vai ter um mesmo resultado,tem uma forma de agente diminuir isto aqui ainda mais, quando agente 
  // tem apenas uma linha de codigo, agente pode tirar isto aqui, tirarinclusive o parenteses e deixar na  mesma linha, vou salvar 
  // ele esta dano um errinho aqui porque o react toda a vez que ele utiliza o map, utiliza uma iteracao 00.41.26, o primeiro componente
  // que vem logo depois do map,tem uma propriedade que agente obrigatoriamente key, que e um valor unico que agente tenha para cada produto,
  // entao eu vou colocar aqui que o nosso valor unico e o nosso product. _id, que e como o nosso id esta sendo retornado vou salvar isto aqui agora
  // ele vai parar de mostrar o nosso erro e ai a partir da nossa proxima aula agente vai comecar a estilizar isto aqui para ficar mas bonito.               


  //Aula8 00.42.39 e eu vou utilizar um flatlist, beleza, vou escrever aqui o flatlist, e ai como que agente passa os dados aqui do nosso estado para 
  //dentro do flatlist, eu vou passar uma propriedade chamada data aqui pro flat list passando qual que e a variavel que armazena os nossos dados, e o 
  //this ponto state ponto docs, e agora agente vai passar o seguinte, lembra o que eu falei que la  dentro do map agente tinha uma key  que e obrigatoria 
  // no react natibe quando agente realiza um map para agente informar qual que e o valor unico em cada um destes itens aqui da lista, e aqui agente tambem 
  //tem isto so que agente chama de KeyExtractor, que e basicamente uma funcao que recebe cada item 00.43.21, e retorna qual que e o campo que e unico la dentro
  //item ponto underline id beleza, que e o campo unico beleza, agora agente vai ter mais uma opcao que e o render item que e a funcao que agente vai chamar para agente 
  // para renderiza cada um destes items da lista, e agora eu vou separar esta parte desta renderizacao em outra funcao aqui dentro da classe que eu vou chamar de render 
  // item, e agora eu posso fechar o flat list aqui diretamente da tag                 
    render() {
        return (
           <View>
              <FlatList
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem = {this.renderItem}
              
              />

             {/* <Text>
                   //Pagina Main: 
               //</View></Text>
               //{this.state.docs.map(product =>
               //(<Text>{product.title}</Text> ) )} 
          // </View>  */}    
             
        );


    }
}

     

{/* // Aula 4 00.24.26 vir aqui no  nosso componente main, 
// vamos adicionar uma propriedade estatica na classe chamaada
// navigation option e aqui eu passo um objeto, e aqui dentro 
// eu vou passar o title da pagina, eu vou chamar isto aqui de js
// hunt, vou salvar e agente ja vai ver que o titulo foi para la,
// e o arquivo ja esta ficando bem massa e agente pode melhorar muito mais

 
// se voce nao conheceeste padrao tem o curso tambem na  rocketseat que e o es6+ que eu explico isto ai e agora agente vai dar um api.get, aqui 
// eu ja estou com minha base.url configurada entao eu vou partir aqui do / api,  eu vou partir para f rente qual e a minha url, que e barra products, por enquanto 
// eun nao vou fazer a parte de paginacao, e agora eu vou fazer o seguinte, eu vou pegar desestruturacao os meus dots que eu recebo aqui de dentro da minha  response
// response ponto data  e agora eu ovu dar simplesmente um console log nestes meus docs, show de bola, agora aonde e que eu, eu nao sei se ele fez a requisicao, eu nao  consigo
// teer nenhum resultado, nenhum feedback visula em tela e aqui no meu terminal eu continuo tambem 00.35.22 nao vendo nada, aonde e que taria este resultado no meu 
// console log, para eu ver este resultado console log no react native eu vou abrir o meu menu aqui no ios e command d, no android e control n ou command n 

// vou selecionar a opcao debug js remotely vou clicar aqui ele abriu uma abinha aqui no meu navegador, deixa aqui eu abrir esta aba aqui para a minha tela e ai eu vou abrir 
// um isnpecionar elemento 00.35.51, e aqui agora eu vou vir aqui no meu console, show de bola agora eu vou clicar aqui no meu emulador e agente pode ver que agente trouxxe aqui 
// um console log aqui em baxo que e exatamente o console que agente vu la dentro, entao e uma listagem, um array que sao os 10 produtos uma listagem que trouxxe la da  nossa api,
// entao veja  que facil agente basicamente ja  consegui trazer todos os nossos registros da api, e ja estao todos aqui e agora agente precisa armaazenalos dentro de uma varialvel na nossa
// classe para agente cosneguir utilizar depois dentro do metodo render. Entao eu vou voltar dentro do vs code 00.36.43, o importante e deixar selecionado esta opcao de cima mantain 
// priority,  voltando la para o codigo agora agente precisa armazenar este valor aqui dos nossos docs dentro de algum lugar da nossa classe, 00.37.03       

//Aula8 00.42.23, porque o flatlist lida muito melhor com a performace de atualizacao destes itens, como remover, alterar e assim por diante, para isso eu vou remover a parte que agente ta fazendo
// map, inclusive remover a parte aonde que eue escrevo pagina main e eu vou utilizar um flatlist beleza  */}

