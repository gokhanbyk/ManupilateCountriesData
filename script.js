// console.log(countries[0]['capital'])

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]['name'])
}

const input = document.getElementById('input')
//? Attribute Ekleme
input.setAttribute('placeholder', 'Değerim')
//? Attribute içindeki bilgiyi getirme
// console.log(input.getAttribute('placeholder'))
//? Attribute'u silme
// input.removeAttribute('placeholder')


//! JavaScriptten etiket oluşturma
const div = document.createElement('div')
div.style.width = "300px"
div.style.height = "300px"
div.style.border = "1px solid black"

//* oluşturulan etiketi body'e gönderme
document.body.appendChild(div)
//* oluşturulan etiketi htmlden kaldırma
document.body.removeChild(div)
//! JavaScriptten etiket oluşturma
