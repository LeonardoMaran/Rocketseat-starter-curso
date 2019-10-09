import {CreateStackNavigator} from "react-navigation";

import Main from "./pages/main.js";


export default CreateStackNavigator({
    Main},{ 
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
                   },
                   headerTintColor: " #FFF "
                    },
        
});

//Aula5,00.25.37 arquivo routes.js, e quando agente cria aqui o stacknavigator, agente 
// consegue passar um segundo parametro alem das rotas da navegacao que sao 
// algumas configuracoes, beleza, destas configuracoes agente consegue acessar
// algumas propredades navigations que e um objeto, e aqui dentro agente vai utilizar
// baasicamente duas propriedades que e o headerstyle que agente consegue adicionar uns estilos
// a mais pro header e o nosso header tintcolor, no header style o que agente vai definir e um backgroud
// color, que agente vai colocar uma cor da552f e aqui no header tint color, uma coisa que nao esta legal
// e que  minha status bar no ios esta preta e agente consegue configurar ostatus bar tanto no ios quanto 
// no android, entao eu vou abrir aqui a pasta src
// no ,  e agente vai criar uma pasta na pasta src chamada config, dentro eu vou criar um arquivo
// statusbar config.js,            