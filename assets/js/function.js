
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");


let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefa() {
    listElement.innerHTML = "";

    tarefas.map((todo) => {
         //console.log("Tarefa:" + todo);

         let liElement = document.createElement("li");
         let tarefaText = document.createTextNode(todo);

         let linkElement = document.createElement("a");

         linkElement.setAttribute("href","#");

         let linkText = document.createTextNode("Excluir");

         linkElement.appendChild(linkText);

         let posicao = tarefas.indexOf(todo);

         linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

         liElement.appendChild(tarefaText);
         listElement.appendChild(liElement);
         liElement.appendChild(linkElement);



    })
}

renderTarefa();

function adicionarTarefa() {
    if(inputElement.value === '') {
        alert("Digite alguma tarefa!");

        return false;
    } else {
        //console.log(inputElement.value);

        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);

        inputElement.value = '';

        renderTarefa();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefa;

function deletarTarefa(posicao) {
   // alert("posicao do item " + posicao);

   tarefas.splice(posicao, 1);

   renderTarefa();
   salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
