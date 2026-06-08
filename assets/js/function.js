let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas() {
    listElement.innerHTML = ""; // Irá esvaziar tudo que estiver dentro da lista de tarefas

    tarefas.map((todo) => {
       let liElement = document.createElement("li"); // Nossa li
       let tarefaText = document.createTextNode(todo); // Nosso texto

       let linkElement = document.createElement("a"); // Criamos um link a, onde será o botão de excluir
       linkElement.setAttribute("href",'#'); // Adicionamos atributos e # para esse href não levar para nenhuma aba externa

       let linkText = document.createTextNode("Excluir"); // Criamos um nome para a tag a, será o nome excluir, usaremos com a tag a para servi de botão para deletar itens da lista
       linkElement.appendChild(linkText);// pegamos a ancora a e colocamos o texto dentro

       let posicao = tarefas.indexOf(todo); // Serve para pegar a posição da lista

       linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);// Colocamos o atributo index dentro da função de deletar


       liElement.appendChild(tarefaText); // Colocamos o texto dentro da li.
       liElement.appendChild(linkElement); // Colocamos dentro da li, também nosso botão de excluir
       listElement.appendChild(liElement); // Colocamos nossa li dentro da ul.

       salvarDados();

    });

}

renderTarefas(); // Irá renderiza todas as tarefas que estiver na lista, logo quando acessar a página ou se estiver vazia irá manter.

function adicionarTarefas() { // Função para cadastrar uma nova tarefa
    if(inputElement.value === '') {  // Se o usuário não digitar nada, irá aparecer o alert ! || Valor vazio
        alert("Digite alguma tarefa!");
        return false;
    } else {
        let novaTarefa = inputElement.value; // Criei uma variavel para armazenar o que o  usuário digitar
        
        tarefas.push(novaTarefa); // Metodo push => está responsavel por adicionar o que o usuario digitou no array da tarefa

        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas;


function deletarTarefa(posicao) {
    tarefas.splice(posicao,1);

    renderTarefas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)); // Salvar itens no localStorage, primeiro passamos a chave KEY e depois a lista de tarefas(valor)
}