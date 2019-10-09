import axios from 'axios';

const api = axios.create({
    baseURL: " https://rocketseat-node.herokuapp.com/api"

});

export default api;









//Aula 6 , 00.31.00 e eu vou utilizar o axios create para isto 
// que elee vai utilizar uma instancia do axios, basicamente para eu conseguir definir
// uma baseURL, para eu definir uma URL em que todas as chamadas da nossa api vao partir 
// o que vai ser esta base url, eu vou copiar ela no insomina, que e esta aqui, 
// https://rocketseat-node.herokuapp.com/api, voce pode utilizar, e agora eu vou exportar
// esta variavel que agente acabou de criar aqui dentro do arquivo api.js, show de bola, por enquanto
// agente nao esta utilizando ele para nada, agente vai comcar utilizandoele la na pagina do main, beleza
//            