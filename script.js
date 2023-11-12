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