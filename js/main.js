let randomColorsBody = ['#FFC618', '#27FF18', '#184FFF', '#A718FF', '#BBB8BC', '#C54944', '#C54482', '#266624', '#80DAEB']
let randomColorsDesc = ['#FF0000', '#800000', '#000080', '#008080', '#778899', '#DAA520', '#9400D3', '#87CEEB', '#00FFFF']

const btnClick = document.querySelector('#btn__click')
const desc = document.querySelector('p')
const title = document.querySelector('h1')
const body = document.querySelector('body')
const valueColor = document.querySelector('.value__color')
const valueColorTwo = document.querySelector('.value__color__two')

btnClick.addEventListener('click', () => {
    for (let i = 0; i <= randomColorsBody.length; i++){
        let itemBody = randomColorsBody[Math.floor(Math.random()*randomColorsBody.length)];
        let itemDesc = randomColorsDesc[Math.floor(Math.random()*randomColorsDesc.length)];
    
    document.body.style.background = itemBody
    desc.style.color = itemDesc
    title.style.color = itemDesc
    btnClick.style.color = itemDesc
    valueColor.innerHTML = itemBody + ' - ЦВЕТ ФОНА'
    valueColorTwo.innerHTML = itemDesc + ' - ЦВЕТ ШРИФТА'
    }
})
