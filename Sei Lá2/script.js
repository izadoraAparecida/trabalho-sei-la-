const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que exatamente é inteligência artificial social e como ela se diferencia da inteligência artificial convencional?",
        alternativas: [
            {
                texto: "Foco nas interações sociais.",
                afirmacao:[
                 "Ênfase na compreensão e resposta emocional.",
                 "Inteligência artificial social é uma forma de IA que interage de maneira emocional e empática com humanos, simulando comportamentos sociais. Diferente da IA convencional, que pode focar apenas em tarefas específicas, a IA social prioriza a compreensão e resposta a emoções e contextos sociais." 
                ]
            },
        ]
    },
    {
        enunciado: " O que exatamente é inteligência artificial social?",
        alternativas: [
            {
                texto: "IA que se concentra em simular interações sociais humanas.",
                afirmacao: [
                "Tecnologia que visa entender e responder a emoções e comportamentos sociais.",
                "Inteligência artificial social é uma tecnologia projetada para interagir com humanos de forma emocionalmente inteligente e empática, simulando comportamentos e respostas sociais semelhantes aos humanos."
            ]
            },
        ]
    },
    {
        enunciado: "Quais são as implicações futuras da inteligência artificial social para a sociedade em geral? ",
        alternativas: [
            {
                texto: "Mudanças na interação humana.",
                afirmacao: [
                "Desafios éticos e de privacidade.",
                "A inteligência artificial social pode transformar as interações humanas, influenciar o mercado de trabalho e o desenvolvimento infantil, e oferecer suporte emocional e personalizado. No entanto, também levanta preocupações sobre privacidade, segurança e ética. Será crucial equilibrar seus benefícios com uma regulamentação adequada para enfrentar os desafios associados"
                ]
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.random()* lista()
}


mostraPergunta();
