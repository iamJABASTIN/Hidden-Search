const btn = document.querySelector('.btn')

const input = document.querySelector('.input')

const search = document.querySelector('.search')

btn.addEventListener('click',() => {
    input.focus()
    search.classList.toggle('active')
})