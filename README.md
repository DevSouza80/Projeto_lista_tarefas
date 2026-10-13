# Lista de Tarefas

Aplicação web simples para gerenciar tarefas do dia a dia, desenvolvida com **HTML** e **JavaScript puro** (Vanilla JS), sem frameworks ou bibliotecas externas.

## Funcionalidades

- Adicionar novas tarefas
- Remover tarefas da lista
- Validação de campo vazio, com alerta ao usuário
- Atualização dinâmica da lista na tela (manipulação do DOM)

## Tecnologias utilizadas

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Estrutura do projeto

```
lista-de-tarefas/
├── index.html
└── script.js
```

## Como executar

Não é necessário instalar nenhuma dependência.

1. Clone o repositório:
```bash
   git clone https://github.com/seu-usuario/lista-de-tarefas.git
```
2. Acesse a pasta do projeto:
```bash
   cd lista-de-tarefas
```
3. Abra o arquivo `index.html` no seu navegador.

## Como usar

1. Digite o nome da tarefa no campo de texto.
2. Clique no botão **Registrar** para adicioná-la à lista.
3. Para remover uma tarefa, clique no link **Excluir** ao lado dela.

## Conceitos praticados

- Seleção de elementos com `querySelector`
- Criação dinâmica de elementos (`createElement`, `createTextNode`, `appendChild`)
- Manipulação de arrays (`push`, `splice`, `map`, `indexOf`)
- Eventos (`onclick`)
- Validação básica de formulário

## Melhorias futuras

- [ ] Persistir as tarefas com `localStorage`
- [ ] Permitir adicionar tarefas pressionando a tecla **Enter**
- [ ] Marcar tarefas como concluídas
- [ ] Editar tarefas existentes
- [ ] Estilizar a interface com CSS
- [ ] Corrigir a exclusão de tarefas com texto repetido (usar o índice do `map` em vez de `indexOf`)

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça o commit das alterações (`git commit -m 'Adiciona minha feature'`)
4. Envie para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Autor

Desenvolvido por **Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
