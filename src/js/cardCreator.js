
function cardProduct (object) {
    const li     = document.createElement('li')
    const img    = document.createElement('img')
    const h3     = document.createElement('h3')
    const span   = document.createElement('span')
    const div    = document.createElement('div')
    const p      = document.createElement('p')
    const button = document.createElement('button')

    img.src = object.img
    li.appendChild(img)

    h3.innerText = object.nome 
    li.appendChild(h3)

    span.innerText = object.secao
    li.appendChild(span)

    if(object.promocao === true) {
        p.innerText = parseInt(object.precoPromocao).toLocaleString("pt-br", { style: "currency", currency: "BRL", })
    } else {
        p.innerText = parseInt(object.preco).toLocaleString("pt-br", { style: "currency", currency: "BRL", })
    }

    div.appendChild(p)
    li.appendChild(div)

    button.innerText = 'Comprar'
    div.appendChild(button)
    li.appendChild(div)

    button.addEventListener('click', function() {
        cartProducts.push(object)

        divCart.innerHTML = ''

        cartUL (cartProducts)
        totalPrice(cartProducts)
    })

    li.classList ='cardProducts'

    return li
}



function sectionProduct (arr) {


    const ul = document.querySelector('.containerListaProdutosUl')
    ul.innerHTML = ''

    for(let i = 0; i < arr.length; i++) {
    
        ul.appendChild(cardProduct(arr[i]))

    }
    
    return ul
}

sectionProduct(produtos)


