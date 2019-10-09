import React from "react";
import Routes from "./routes";
import "./config/StatusBarConfig";



// isto aqui que eu estou fazendo aqui

const App = () => <Routes />;

// é como se eu fizesse isto 

// class App extends Component {
//     render() {
//         return <Routes />
//     }
// }

export default App;

// Aula 4, 00.22.07, aqui eu nao importei o component, agente ja vai falar sobre isso 
// eu vou importar o arquivo de rotas, e aqui eu estou colocando const app, eu nao estou 
// criando uma classe, porque eu nao estou criando uma classe, outra forma da gente definir 
// componentes no react, é criando funcoes, uma funcao agente pode criar um codigo que retorna
// uma funcao que simplesmente retorna um codigo jsx, isto aqui que eu  estou fazendo aqui e a mesma 
// coisa que eu fizesseisto aqui, beeleza e a mema coisa que isto aqui so que isto aqui, quando 
// agent utiliza a classe com o component agente tem acesso a algumas funcionalidades do react a mais  
// mas como agente nao vai utilizar esta funcionalidades deste arquivo eu posso simplesmente como uma 
// simples funcao, agora eu vou dar um export default aqui de dentro, lembra que eu falei que o componente 
// deve exportar por default o componente do arquivo e agora eu vou la no meu index.js  

//Aula 5 00.27.49 Aqui em cima junto com as minhas imporacoes eu vou importar o arquivo e ai eu nao preciso dar um nome para 
// este import, eu posso so dar um import, from, porque eu naao vou utilizar ele em algum lugar do meu arquivo,
// import. config/sattusbar, vou dar um save agora e agora sim vou ver que a nossa status bar vai ficar branquinha no ios, e 
// ai dependendo da versao do android ela ficou com o fundo laranja. entao, show de bola, agente ja de uma configurada, a nossa
// aplicacao esta ficando mais bonita ne, e a partir da proxima agente vai fazeraqui a parte de listagem, dados da api. 


