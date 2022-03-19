// EX 1 GERAL - O header deve ter cor de fundo #2E948A.
document.getElementById ("cabecalho")
cabecalho.style.backgroundColor = '#2E948A'

// EX 2 GERAL- No menu do header, está faltando o link do item Cursos que deve redirecionar
// paracursos.html

let linkCursos = document.querySelector ('div nav a:nth-child(1)')
linkCursos.setAttribute ('href', 'cursos.html')

// EX 1 HOME - No banner da home, está faltando centralizar os elementos filhos da section que
// tem o id #introducao.

document.querySelector ('#introducao')
introducao.style.justifyContent = 'space-around'

// EX 2 HOME - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
let tituloDepoimento = document.querySelector ('.titulo.depoimento h3').innerHTML = "O que falam sobre nós";

// EX 3 HOME - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
let tituloBlog = document.querySelectorAll ('.titulo h3')[1].innerHTML = "Mais conteúdo para você";

// EX 4 HOME -  Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.
var maiuscula = document.querySelectorAll(".titulo")
maiuscula.forEach(item => {
    item.style.textTransform = "uppercase";
})

//EX 5 HOME -  o botão "ver todos os posts" deve ter um link que direciona para o arquivo
// blog.html
let verPosts = document.querySelector ('#todos_posts')
verPosts.setAttribute ('href', 'blog.html')

// EX 6 HOME - Adicionar um novo curso na section que contém o id
// investimentos_poupando_independencia:
let novoCurso = document.createElement('div')
novoCurso.innerHTML = 
    '<div id="independencia">'+
        '<img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>' +
        '<h2>Independência Financeira</h2>' +
'        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>' +
        '<a class="comecar_agora" href="./curso.html">começar agora</a>' +
    '</div>'

let divprimeiro = document.querySelector('#investimentos')

divprimeiro.insertAdjacentElement("beforebegin",novoCurso)
// EX 1 CONTATO - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
document.querySelector('form').action = 'sucesso.html'

//EX 2 CONTATO -  Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
let telefone = document.createElement('input')
telefone.innerHTML = 
'<input type="number" required placeholder="número de telefone">' 

let input = document.querySelector('#telefone')
input.insertAdjacentElement("beforeend", telefone)