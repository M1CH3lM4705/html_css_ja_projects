const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const login  = document.querySelector('.login');
const headline = document.querySelector('.headline');
const container = document.querySelector('.container');


const tl = new TimelineMax();

tl.fromTo(hero, 1, { heigth: "0%" }, { heigth: "80%", ease: Power2.easeInOut },)
.fromTo(
    hero, 
    1.2, 
    { width: '100%' }, 
    { width: "80%", ease: Power2.easeInOut }
    )
.fromTo(
    slider, 1.2, { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut }, 
    "-=1.2"
)
.fromTo(logo, 0.5, { opacity:0, x: 30 },
    { opacity:1, x: 0 },
    "-=0.5"
)
.fromTo(login, 0.5, { opacity:0, x: 30 },
    {opacity:1, x: 0},
    "-=0.5"
)
.fromTo(headline, 0.5, { opacity:0, x: 30 },
    { opacity:1, x: 0 },
    "-=0.5"
)
.fromTo(container, 0.5, { opacity:0, x: 30 },
    { opacity:1, x: 0 },
    "-=0.5"
);

function formataCPF(cpf){
    const elementoAlvo = cpf
    const cpfAtual = cpf.value

    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function( regex, argumento1, argumento2, argumento3, argumento4 ){
            return `${argumento1}.${argumento2}.${argumento3}-${argumento4}`;
    })
    elementoAlvo.value = cpfAtualizado;
};

function formataTel(tel){
    const elementoAlvo = tel
    const telAtual = tel.value

    let telAtualizado;

    telAtualizado = telAtual.replace(/(\d{2})(\d{4})(\d{4})/,
        function( regex, argumento1, argumento2, argumento3 ){
            return `(${argumento1})${argumento2}-${argumento3}`;
        })
        elementoAlvo.value = telAtualizado;
};

function AssignValues(){
    sessionStorage.setItem("nome", document.cadAluno.nome.value);
    sessionStorage.setItem("sobrenome", document.cadAluno.sobrenome.value);
    sessionStorage.setItem("cpf", document.cadAluno.cpf.value);
    sessionStorage.setItem("dtNascimento", document.cadAluno.dtNascimento.value);
    sessionStorage.setItem("sexo", document.cadAluno.sexo.value);
    sessionStorage.setItem("tel", document.cadAluno.tel.value);
    sessionStorage.setItem("email", document.cadAluno.email.value);
    sessionStorage.setItem("matricula", document.cadAluno.matricula.value);
    sessionStorage.setItem("rua", document.cadAluno.rua.value);
    sessionStorage.setItem("numCasa", document.cadAluno.numCasa.value);
    sessionStorage.setItem("bairro", document.cadAluno.bairro.value);
    sessionStorage.setItem("observacao", document.cadAluno.observacao.value);

    window.location.href = "./confirmed/table.html"

    
}

function PreencherTable(){
    
    var nome = document.querySelector('.nome');
    var matricula = document.querySelector('.matricula');
    var email = document.querySelector('.email');

    nome.innerHTML = sessionStorage.getItem("nome");
   
    email.innerHTML = sessionStorage.getItem("email");
    matricula.innerHTML = sessionStorage.getItem("matricula");
    
}