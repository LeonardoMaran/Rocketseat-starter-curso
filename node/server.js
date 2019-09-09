const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send('Hello Rocketseat');
});

app.listen(3001);



















// Aula 1

// uma introducao breve o node js  basicamente permite que  agente utilize javascript
// e uma linguagem utilizada muito na web particularmente no frontend o javascript foi uma 
// linguagem utilizada particularmente para manipulacao de linterface no navegador no browser 
// e depois o javascript comecou a ser utilizado tanto para desenvolvimento mobile com reactnative
//  por exemplo e tambem agora ja faz um tempo na verdade para servidor utiizando node.j no backend
//  node js o que agente pode dizer o que e o node js, e umaplataforma que utiliza da v8 a engine de
//  entendimento de javascript ldo google chrome a engine .do browser .do google chrome dentro .do 
//  javascript .do lado .do backend entaao agente basicamente permite agente utilizar o javascript 
//   e tratar requisicoes e respostas .do servidor  como acessar banco de dados nos permitiria fazer tambem
//   e o conceito de api rest porque agente utiliza tambem, basicamente hoje existe dois tipos de aplicacoes
//   que agente utiliza muito que sao as aplicacoes que agente chama de full mvc quando voce cria a sua parte 
//   visual da aplicacao junto do seu backend entao voce cria la um wordpress que e muito famoso no php que e o tipo 
//   de exemplo desta aplicacao entao o servidor e o front end eles estao unidos elesnao ficam separados beleza
//    quando voce desenvolve uma aplicacao utilizando o conceito de api rest voce separa o backend do front end 
//     entao voce tem o backend que serve apenas para manipular informacoes do banco de dados, receber requisicoes 
//     enviar respostas e voce tem o front end separado construido com alguma linguagem ou alguma biblioteca frontend
//      muito conhecida como por exemplo o react, o vue o react-native o angular e por ai vai. Beleza, e quais sao os 
//      beneficios de utilizar uma api rest de acordo comparando com o outro modelo. Uma api rest oferece para agente 
//      uma flexibilidade no nosso front end que estas bibliotecas que eu citei anteriormente fornece esta flexibilidade
//       consegue tratar com os dados de uma maneira mais legal claro que aumenta mais um pouqinho esta complexidade porem 
//       o resultado final e muito melhor. alem disso agente consegue trabalhar com uma unica api para diferentes plataformas
//        entao agente consegue ter um unico backend construido com nodejs servido aplicacoes com mobile com java, react native
//        e tambem servindo uma  aplicacao  web com react e tambem servindo um publico uma comunidade que gostaria de acessar alguns 
//        dados da nossa aplicacao, entao agente temuma unica aplicacao backend fornecendo dados para multiplos clientes front end beleza
//        é o que agente ai aprender aqui, a criar uma aplicacao rest utilizando nodejs, express e mongodb        


// Aula 2

// vamos comecar executando o comando npm int-y, o que este comando basicamente fez, se eu der um ls na nossa pasta agente vai ver que 
// tem um unico arquivo chamado package.json, se eu abrir este arquivo aqui agente vai ver que agente tem algumas instrucoes 
// de como a nossa aplicacao deve se comportar ne o nome dela a versao a descricao o arquivo principal scripts e tudo mais, mas este package 
// json ele vai servir para uma principal funcionalidade na aplicacao, eu vou instalar a primeira dependencia na nossa aplicacao o XPathExpression, para 
// isto eu vou dar um 

// npm install express 

// eu vou esperar terminar a instalacao aqui para agente ver como e que ficou dentro do package json, agora que agente instalou o express, o que é o express
// o express e basicamente um micro framework ele vai nos ajudar a lidar com rotas e views beleza, basicamente isto as rotas so basicamente os enderecos da url
// que o usuario vai poder acessar a api, os views na verdade, mas que sao as formas de visualizacao, mas como agente esta utilizando uma api rest agente nao vai 
// utilizar esta api aqui. Entao, agora que agente ja instalou o express, agente vai comecar configurando o servidor, o nosso arquivo principal da aplicacao que 
// vai inicializar toda a nossa aplicacao, para isto eu vou criar um arquivo aqui deixa eu abrir o vs code. Podemos ver aqui que ja criou a pasta node builtinModules, esta 
// pasta aqui vai armazenar as dependencias do express ja esta aqui, e porque tem tantas dependencias aqui, o express tem outras dependencias, temos aqui o package json

// Vamos comecar criando o nosso arquivo principal, eu vou chamar de server.js mas voce pode dar o nome que preferir geralmente voce vai preferir server ou index.js 
// agente vai comecar importando o express aqui dentro utilizando o require. Agora que agente ja tem acesso ao express, vamos fazer o seguinte, eu vou definir uma variavel
// uma constante e vou executar a funcao express, o express aqui ele nos retorna uma   funcao e agora eu vou fazer o seguinte app.listen 3001 o que eu estou fazendo aqui, basicamente
// eu estou falando para a porta 3001 do nosso navegador, agora se eusavar isto aqui 
// se eu vir aqui no meu terminal, execuar node server.js, deu um erro aqui porque a porta ja esta  sendo utilizada

// claro que ele ainda nao mostrou nada porque ele ainda nao  tem nenhuma tratativa de roteamneto da nossa aplicacao  entao a nossa aplicacao nao sabe como se comportar quando algum usuario 
// acessa algum endereco localhost na porta 3001, e isso que agente vai entender e fazer a partir da proximas AudioTrackList

//  Aula 3
 
//  00.11.57 O que agente vai fazer nesta aula é criar a primeira rota da nossa aplicacao, entao quando o usuario digita localhost 3001 agente vai retornar uma mensagem na tela 
//  entao como e que agente vai fazer isto, app.get, agente esta dizendo que toda a vez quee o usuario acessar a rota e agente esta dizendo aqui que rota que é, como eu nao tenho rota
//  que eu quero que a  rota seja a rota raiz que eu quero que nao tenha nada escrito aqui eu vou digiar apenas uma barra aqui no codigo aqui vai ficar a rota raiz virgula ne o segunto 
//  parametro aqui desta rota get e uma funcao que recebe dois parametros, o req e o res que eu ja vou falar o que que é estes dois parametros.O parametro req ele simboliza a requisicao 
//  que agente esta fazendo no servidor, entao quando eu estou acessando a sessao do url, agente esta fazendo uma requisicao por servidor e o req  vai conter todos os detalhes e informacoes 
//  possiveiss desta requisicao e o que que vai estar dentro do req entao o que agente vai pegar do req, paramentros, corpo da requisicao, cabecalho da requisicao, usuariio que  esta fazendo 
//  da requisicao, autenticacao, se esta autenticando ou nao ta, todos os tipos de informacoes que vao estar na requisicao, tudo isto, mas agente vai acessar atravs do objeto req beleza, por enquanto
//  agente nao vai utilizar ele mas agente vai ver durante o .curso. O res aqui ele tem a ver com a resposta que  agente vai dar para a requisicao, entao, basicamente o fluxo do backend e agente fazendo 
//  uma requisicao e o servidor fazendo uma resposta, entao aqui no res vao estar todas as informacoes para agente devolver uma resposta do usuario, por enquanto agente vai utilizar o metodo send dentro 
//  do res e agente pode retornar qualquer coisa, agente vai retornar um hello rocket,seat, vou salvar aqui agora e toda a vez que agente faz uma alteracao agente precisa executar o servidor do node novamente 
  
//  entao agente acabou de criar a nossa primeira rota, tranquilo, 

// Aula 4 00.14.27

// Ate agora como eu falei na ultima aula toda a vez que agente alterar alguma informacao, vamos supor que agente alteraalguma informacao tipo rocetseat por hello world, se agente vir no chrome e atualizar 
// nao vai entender as alteracoes que ocorreram no arquivo node para isto agente vai utilizar uma ferramenta chamada nodemon, para isto eu vou aqui no meu terminal e instalar como dependencia de desenvolvimento
// install save dev ou D maiusculo, nodemon

// npm install -D nodemon

// Show de bola, agora que agente ja terminiou eu vou aqui no meu package.json e o que sao estas dependences que sao comparados com esta dependencias, as devs dependencies que foi quando agente utilizou o -D para 
// fazer a instalacao sao dependencias que agente vai utilizar apenas no nosso ambiente de desenvolvimento, ou seja, enquanto agente esta criando a nossa aplicacao, e sa dependencias que agente nao vai instalar quando 
// agente vai jogar a nossa aplicacao online. Agora como e que agente faz paara utilizaro nodemon, a melhor forma quee agente pode fazer e criar um script aqui dentro desta nossa tag scripts, eo vou criar um script chamado 
// dev e eu vou criar um script dentro dele e e vou executar o nodemon server.js que e o nome do nosso script, eu vou salvar isto aqui agora e na hora de executar no terminal ao inves de rodar com node.js agente vai rodar npm 
//  run dev, o npm run serve para agente executar ests scripts aqui dentro, agente pode adicionar o script que agente quiser      

//Aula 5 00.16.55

// Nesta aula agente vai instalar o mongoDb na nossa maquina e para isto agente vai usar um software chamado docker na nossa maquina, agente nao vai instalar seguindo os passos de instalacao la n mongodb se voce tem instalado o mongo db 
// pode usar o que voce tm instalado, agente vai insalar o docker PermissionRequest, o docker e o software que peermite agente fazer a conteinerizacao de recursos de softwares ou qualquer tipo de aplicacao da nossa maquina, porque isso 
// e o que e este conceito de conteinerizacao, ja teve algum momeento que voce instalou o mysql na sua maquina e depois voce teve que reinstalalo e sobrou resquicios da outra instalacao e deu algum conflito, ou seja as vezes voce instalou 
// muita coisa na sua maquina que voce nem lembra mais o que esta instalado, voce tem que formatar .etc, estas instalacoes sao coisas de desenvolvedor, mongo, mysql, 
//  node, npm e assim vai, agente consegue fazer todas estas instalacoes em containers, em maquinas virtuais se em algum momento agente precisar deletar estas instalacoes, mecher em qualquer coisa no nosso .sistema entao agente vai subir 
//  uma maquina virtual rodando um sistema linux por traz vai conter a instalacao do mongo poderia ser mysql poderia ser qualquer coisa e muito facil fazer esta instalacao e se em qualquer momento agente precisar deletar isto, ou alterar ou 
// recriar fica muito facil porque esta maquina virtual nao vai mecher em nada no nosso sistema, vai ficar um sistema totalmente à parte que voce consegue manipula ele da forma que voce quiser, para agente comecar instalando o docker agente 
// entra no site delees docker.com  clicamos no get docker e aqu do lado que de, docker edition, no mc e so o .dmg que ageente vai baixar, no seu terminal voce vai possivel digitar o comando docker e ele vai mostrar esta lista de comandos 

// basicamente como e que agente vai fazer e baixar a maquina virtual do mongoDb, o container do mongo db para agente executar na nossa maquina, o que agente vai fazer é 

// docker pull mongo

// e depois que ja esta instalado agente precisa subir uma nova maquina virtual um novo container e esta instalacao rodando para isto eu vou utilizar o comando docker run 
// o primeiro parametro que eu vou passar e um name o que eu quero e chamar este container dentro do meu sistema, eu vou chamar ele de mongodb 

// docker run --name mongodb -p 27017:27017 -d mongo

// o segundo parametro que eu vou passar aqui e o comando p, porque eu estou passando este ifem p aqui basicamente como o mongo vai estar rodando outro sistema  e nao o .mac
// o windows o ubunto ele vai estar num sistema a parte de outro ubuntu que voce nao vai estar enxergando agente vai ter que fazer um rediricionamento de porta, entao o mngo db utiliza a porta 
// 27017 new, e agente precisa falar entao toda a vez que agente tenta acessar a porta 27017 da nossa maquina ele redireciona para a porta  27 do mongodb deste container  

// o ultimo parametro aqui e o ifem -d imagem que eu quero utilizar entao, imagem e basicamete quando eu dou um pull eu baxo uma imagemum preset de container, entao aqui basicamente eu dou um enter 
 
// ele vai retornar este codigo muito loco aqui, agora agente pode rodar o comando 

// docker ps 

// para ele retornar quais imagens eles estao rodando e esta redirecionando a PerformanceTiming, e 
// como e que agente faz para testar isto eu posso ir no meu navegador e acessar a porta 27017 dai ele 
// pode retornar uma mensagem parecida como esta

//  24.15   ele nao pode dar um erro aqui de http de pagina nao encontrada,  ele tem que retornar e ai voce vai sabeer 
// como o mongo esta executando, como e que eu posso testar mais afundo para ver como e que eu consigo executar 
//  os schemas, as databases do meu mongo e tudo mais, agente precisa utilizar um software chamado robo3t tranquilo 
//  vou digitar aqi no google, agente acessa esta site robomongo.org agente vem na opcao download robo3t e aqui download 
//  robo3t de .novo e voce vai ter acesso a uma .interface muito parcedica com esta aqui certo e ai voce praticamnete 
//  nao vai ter acesso a nenhuma connection, aqui agente vai criar umado zero, agente vai vir aqui em create eu posso 
//  deixar o endereco localhost porta 27017      