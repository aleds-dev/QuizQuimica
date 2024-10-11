let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual é o símbolo químico do oxigênio?",
    alternativaA : "O",
    alternativaB : "Oxi",
    alternativaC : "Ox",
    correta      : "O",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é o pH de uma solução neutra?",
    alternativaA : "0",
    alternativaB : "7",
    alternativaC : "14",
    correta      : "7",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é o símbolo químico do sódio? ",
    alternativaA : "S",
    alternativaB : "Na",
    alternativaC : "So",
    correta      : "Na",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é a fórmula química da água?",
    alternativaA : "H2O",
    alternativaB : "H2O2",
    alternativaC : "HO2",
    correta      : "H2O",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o principal gás responsável pelo efeito estufa?",
    alternativaA : "O2",
    alternativaB : "CO2",
    alternativaC : "N2",
    correta      : "CO2",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o elemento mais abundante no universo?",
    alternativaA : "Oxigênio",
    alternativaB : "Hidrogênio",
    alternativaC : "Nitrogênio",
    correta      : "Hidrogênio",
}

const q7= {
    numQuestao   : 7,
    pergunta     : "Qual é o estado físico da água a 0°C?",
    alternativaA : "Sólido",
    alternativaB : "Líquido",
    alternativaC : "Gasoso",
    correta      : "Sólido",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual partícula subatômica tem carga negativa?",
    alternativaA : "Elétron",
    alternativaB : "Nêutron",
    alternativaC : "Próton",
    correta      : "Elétron",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual partícula subatômica tem carga positiva?",
    alternativaA : "Elétron",
    alternativaB : "Nêutron",
    alternativaC : "Próton",
    correta      : "Próton",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "O que é uma reação de oxidação?",
    alternativaA : "Perda de elétrons.",
    alternativaB : "Ganho de elétrons",
    alternativaC : "Aumento de temperatura",
    correta      : "Perda de elétrons.",
}
// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5,q6, q7, q8,q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont + " de 100"

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 8000)
}
