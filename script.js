const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = 
[
    {
        enunciado: "Internet melhora ou prejudica nossas relações pessoais? ", /* modelar pergunta */
        alternativas: 
        [
            "Melhora, porque nos mantém conectados com amigos e familiares distantes.", /* resposta pergunta */
            "Prejudica, porque reduz o tempo e a qualidade das interações face a face."
        ]
    },
    {
        enunciado: "A tecnologia ajuda ou atrapalha nossa concentração nos estudos?", /* modelar pergunta */
        alternativas: 
        [
            "Ajuda, pois oferece acesso rápido a informações e ferramentas educacionais.", /* resposta pergunta */
            "Atrapalha, devido a constante distrações das redes sociais e notificações."
        ]
    },
    {
        enunciado: "Quanto tempo nós passamos usando a internet/aplicativos?", /* modelar pergunta */
        alternativas: 
        [
            "Abaixo de 3 horas?", /* resposta pergunta */
            "Acima de 3 horas?"
        ]
    }
]; 
let atual = 0;
let perguntaAtual;

function mostraPergunta()
{
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
}
mostraPergunta();