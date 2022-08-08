let cartProducts = []

const divCart = document.querySelector('.cart_space')
const divTotalPrice        = document.querySelector('.price')

function cart (object, i) {
    const li         = document.createElement('li')
    const imgProduct = document.createElement('img')
    const divText    = document.createElement('div')
    const divTitle   = document.createElement('div')
    const h3         = document.createElement('h3')
    const button     = document.createElement('button')
    const imgTrash   = document.createElement('img')
    const divInfo    = document.createElement('div')
    const span       = document.createElement('span')
    const p          = document.createElement('p')


    imgProduct.src = object.img
    li.appendChild(imgProduct)

    h3.innerText = object.nome 
    divTitle.appendChild(h3)
    divText.appendChild(divTitle)
    li.appendChild(divText)

    

    imgTrash.src = './src/img/trash.png'
    imgTrash.alt = "Remover produto"

    button.addEventListener("mouseover", () => {
        imgTrash.src = "./src/img/trash-can.svg"
        imgTrash.alt = "Remover produto"
    });

    button.addEventListener("mouseout", () => {
        imgTrash.src = './src/img/trash.png'
        imgTrash.alt = "Remover produto"
    }) 

    button.appendChild(imgTrash)
    divTitle.appendChild(button)

    divTitle.classList = 'cartProductsTitle'

    divText.appendChild(divTitle)
    li.appendChild(divText)

    button.addEventListener('click', function() {
        divCart.innerHTML = ''
        cartProducts.splice(i, 1)
        
        if(cartProducts.length == 0) {
            divTotalPrice.innerText = ''
            emptyCart ()
        } else {
            cartUL (cartProducts)
            totalPrice(cartProducts)
        }

    })

    span.innerText = object.secao

    divText.appendChild(span)
    li.appendChild(divText)

    if(object.promocao === true) {
        p.innerText = parseInt(object.precoPromocao).toLocaleString("pt-br", { style: "currency", currency: "BRL", })
    } else {
        p.innerText = parseInt(object.preco).toLocaleString("pt-br", { style: "currency", currency: "BRL", })
    }

    divText.appendChild(p)

    divText.classList = 'cartProductsText'
    li.appendChild(divText)

    li.classList = 'cartProducts'

    return li
}

function cartUL (arr) {

    divCart.innerHTML =''

    const ul = document.createElement('ul')
    ul.classList = 'cart'

    for(let i = 0; i < arr.length; i++) {
    
        ul.appendChild(cart(arr[i], i))

    }
    
    divCart.append(ul)
    return divCart
}

function totalPrice(arr) {
    
    let price = []

    arr.forEach((element) => {
        if(element.promocao === true) {

            return price.push(parseInt(element.precoPromocao))

        } else {
            return price.push(parseInt(element.preco))
        }

    })

    let sum = price.reduce((acc, act) => {
        return acc + act
    });

    divTotalPrice.innerText    = ''

    const ul          = document.createElement('ul')
    const liQuatidade = document.createElement('li')
    const pQuatidade  = document.createElement('p')
    const pNumero     = document.createElement('p')

    const liTotal     = document.createElement('li')
    const pTotal      = document.createElement('p')
    const pValor      = document.createElement('p')

    pQuatidade.innerText = 'Quantidade'
    pQuatidade.classList = 'boldText'

    liQuatidade.appendChild(pQuatidade)

    pNumero.innerText = arr.length
    liQuatidade.appendChild(pNumero)

    liQuatidade.classList = 'quantidade'

    pTotal.innerText = 'Total'
    pTotal.classList = 'boldText'
    liTotal.appendChild(pTotal)

    pValor.innerText = sum.toLocaleString("pt-br", { style: "currency", currency: "BRL", })
    liTotal.appendChild(pValor)

    ul.appendChild(liQuatidade)
    ul.appendChild(liTotal)

    divTotalPrice.appendChild(ul)

    return divTotalPrice

}

function emptyCart () {

    divCart.innerText = ''

    const img = document.createElement('img')
    const h2  = document.createElement('h2')

    img.src = './src/img/empty cart.jpeg'
    divCart.appendChild(img)

    h2.innerText = 'Por enquanto não temos produtos no carrinho'
    divCart.appendChild(h2)

    return divCart
}
emptyCart ()