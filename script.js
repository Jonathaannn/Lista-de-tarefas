const adcItem = document.querySelector('#adciona-item');
const adcBotao = document.querySelector('#adciona-botao');
const lstFazer = document.querySelector('#lista-fazer');
const filtro = document.querySelector('.filro-lista')

adcBotao.addEventListener('click', adclista)
lstFazer.addEventListener('click', verificador)
filtro.addEventListener('click', opcoes)

function adclista(event){
    event.preventDefault()

    const lstDiv = document.createElement('div')
    lstDiv.classList.add('lista-div')

    const lstLi = document.createElement('li')
    lstLi.classList.add('lista-li')
    lstLi.innerText = adcItem.value
    lstDiv.appendChild(lstLi)

    const completaBtn = document.createElement('button')
    completaBtn.innerHTML = '&check;'
    completaBtn.classList.add('botao-completo')
    lstDiv.appendChild(completaBtn)

    const excluiBtn = document.createElement('button')
    excluiBtn.innerHTML = '&cross;'
    excluiBtn.classList.add('botao-excluir')
    lstDiv.appendChild(excluiBtn)

    lstFazer.appendChild(lstDiv)
    adcItem.value = ''
}

function verificador(event){
    const item = event.target
    
    if (item.classList[0] === 'botao-excluir') {
        let exclui = item.parentElement
        exclui.remove()
    }
    if(item.classList[0] === 'botao-completo'){
        let completa = item.parentElement
        completa.classList.toggle('completo')
    }
}

function opcoes(event){
    event.preventDefault()

    let opcs = lista-lstFazer.childNodes
}