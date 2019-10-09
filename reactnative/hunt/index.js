

import {AppRegistry} from "react-native";
import App from "./src";
import { name as appName} from "./app.json";


AppRegistry.registerComponent(appName, () => App);


// Aula 4, 00.23.17 e agora eu vou la no meu index.js que antes ele importava app 
// do arquivo app na nossa raiz que nao existe mais, que ao inves de importar da pasta 
// app eu vou importar da pasta src e aqui eu nem preciso passar o index que por padrao 
// quando agente faz uma importacao se agente nao passa qual e o arquivo ele vai buscar 
// o index automaticamente, agora eu venho no meu emulador vou dar um Reload, e ai ageente 
// ja consegue ver nossa tela funcionando de novo gracas a deus nao tem aquela tela vermelha 
// de erro e aqui agente ja consegue ver o pagina main que agente ja colocou anteriormente 
// mas agente consegue notar uma coisa diferente aqui tambem agente teem agora um header na
// nossa aplicacao, e quem colocou eeste header na aplicacao, foi o react navigation, ele faz 
// esta parte de estilizacao da nvegacao automaticamente, mas esta parte da aplicacao ela ainda
// nao tem um titulo, vamo colocar um titulo aqui no header para  fazer isto, agente pode implesmente 
   
