
let hortifruti   = []
let panificadora = []
let laticinio    = []

function separateArray (arr) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].secao == 'Hortifruti') {
            hortifruti.push(arr[i])
        } else if (arr[i].secao == 'Panificadora') {
            panificadora.push(arr[i])
        } else if (arr[i].secao == 'Laticínio') {
            laticinio.push(arr[i])
        }
    }
}

separateArray(produtos)


function buscar (valorBusca, arr) {
    let resultado = []

    for(let i = 0; i < arr.length; i++) {
        const valorInput = valorBusca.toLocaleLowerCase()
        const nome = arr[i].nome.toLocaleLowerCase()
        const secao = arr[i].secao.toLocaleLowerCase()
        const categoria = arr[i].categoria.toLocaleLowerCase()

        if(nome.includes(valorInput) || secao.includes(valorInput) || categoria.includes(valorInput)) {
            resultado.push(arr[i])
        }
    }

    return sectionProduct(resultado)
}

const buttonTodos = document.getElementById('buttonTodos')

buttonTodos.addEventListener('click', function(){
    return sectionProduct(produtos)
})

const buttonHortifruti = document.getElementById('buttonHortifruti')

buttonHortifruti.addEventListener('click', function () {

    return sectionProduct(hortifruti)

})

const buttonPanificadora = document.getElementById('buttonPanificadora')

buttonPanificadora.addEventListener('click', function () {

    return sectionProduct(panificadora)

})

const buttonLaticinios = document.getElementById('buttonLacticinios')

buttonLaticinios.addEventListener('click', function () {

    return sectionProduct(laticinio)

})


const buttonPesquisa = document.getElementById('buttonPesquisa')

const inputPesquisa = document.querySelector('.campoBuscaPorNome') 

buttonPesquisa.addEventListener('click', function() {
    const valorBusca = inputPesquisa.value
    buscar(valorBusca, produtos)
    inputPesquisa.value = ''
})

