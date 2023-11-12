// console.log(countries[0]['capital'])
const input = document.getElementById('input')


for (let i = 0; i < countries.length; i++) {
    const p = document.createElement('p')
    p.style.color = 'gray'
    p.innerHTML = countries[i]['name']
    // console.log(countries[i]['name'])
    document.body.append(p)
}

input.addEventListener('keyup', (element) => {
    console.log(element.key)
    console.log(element.keyCode)
    if (element.keyCode == 13) {

        countries.filter((ulke) => {
            if (ulke.name == input.value) {
                const p = document.createElement('p')
                p.style.color = 'red'
                p.innerHTML = `${ulke.name} - ${ulke.capital}`
                document.body.append(p)
            }
        })

    }
})



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
