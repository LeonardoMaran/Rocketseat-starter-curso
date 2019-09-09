import { createBrotliDecompress } from "zlib";

class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {


   
    }


const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

00.21.54





//vou comecar definibdo a nossa primeira classe 
// e aqui agente pode definir metodos, beleza, o primeiro metodo
// que agente encontra em muitas classes que agente consegue utilizar e o 
// metodo constructor, quee vai ser o primeiro metodo que vai ser executado toda a vez
// queagente instanciar um novo objeto a partir desta nova classe
// no constructor agente pode fazer acoes que disparam assim que o objeto e criado
// ou por exemplo iniciar variaveis, .todo igual a arrays vazios e agora eu vou criar um novo 
// metodo chamado addTodo() entao eu tenho acesso ao this .todos .push para adicionar um novo item no final 


