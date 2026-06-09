const listElement = document.querySelector("#wrapper-container ul");
const inputElement = document.querySelector("#wrapper-container input");
const buttonElement = document.querySelector("#wrapper-container button");

let tarefa = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function rendeTarefa(todo) {
     listElement.innerHTML = "";

     tarefa.map((todo) => {
        let liElement = document.createElement("li");
        let TarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href","#");

        let linkText = document.createTextNode("Excluir");


        liElement.appendChild(TarefaText);
        listElement.appendChild(liElement);

         let posicao = tarefa.indexOf(todo);

         linkElement.setAttribute("onclick",`deletarTarefa(${posicao})`);

          liElement.appendChild(linkElement);
         linkElement.appendChild(linkText);
     })
}


rendeTarefa();

function adicionarTarefa() {
    if(inputElement.value === "") {
        alert("Digite alguma coisa!");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefa.push(novaTarefa);

        inputElement.value = '';

        rendeTarefa();
        salvarDados();
    }
}


buttonElement.onclick = adicionarTarefa;

function deletarTarefa(posicao) {
    tarefa.splice(posicao,1);

    rendeTarefa();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaTarefas",JSON.stringify(tarefa));
}
