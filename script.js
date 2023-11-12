// // console.log(countries[0]['capital'])
// const input = document.getElementById('input')


// for (let i = 0; i < countries.length; i++) {
//     const p = document.createElement('p')
//     p.style.color = 'gray'
//     p.innerHTML = countries[i]['name']
//     // console.log(countries[i]['name'])
//     document.body.append(p)
// }

// input.addEventListener('keyup', (element) => {
//     console.log(element.key)
//     console.log(element.keyCode)
//     if (element.keyCode == 13) {

//         countries.filter((ulke) => {
//             if (ulke.name == input.value) {
//                 const p = document.createElement('p')
//                 p.style.color = 'red'
//                 p.innerHTML = `${ulke.name} - ${ulke.capital}`
//                 document.body.append(p)
//             }
//         })

//     }
// })



// //? Attribute Ekleme
// input.setAttribute('placeholder', 'Değerim')
// //? Attribute içindeki bilgiyi getirme
// // console.log(input.getAttribute('placeholder'))
// //? Attribute'u silme
// // input.removeAttribute('placeholder')


// //! JavaScriptten etiket oluşturma
// const div = document.createElement('div')
// div.style.width = "300px"
// div.style.height = "300px"
// div.style.border = "1px solid black"

// //* oluşturulan etiketi body'e gönderme
// document.body.appendChild(div)
// //* oluşturulan etiketi htmlden kaldırma
// document.body.removeChild(div)
// //! JavaScriptten etiket oluşturma


//! Örnek

//? Container divi oluşturuldu
const container = document.createElement('div')
container.classList.add('container', 'd-flex', 'align-items-center', 'flex-column', 'my-3')
// container.setAttribute('class', 'container')

document.body.append(container)
//? Container divi oluşturuldu

//? Button Oluşturuldu
const btn = document.createElement('button')
btn.setAttribute('class', 'btn btn-danger')
btn.textContent = 'Countries'

container.append(btn)

btn.addEventListener('click', ulkeOlusturma)
//? Button Oluşturuldu

//? Ülkeler Card yapısının fonksiyonu

function ulkeOlusturma() {
    const ulkelerDiv = document.createElement('div')
    ulkelerDiv.setAttribute('class', 'row mt-2')

    countries.forEach((ulke) => {
        const col = document.createElement('div')
        col.classList.add('col-3')
        // console.log(ulke)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'text-center')
        cardDiv.style.width = '18rem'

        const cardImg = document.createElement('img')
        cardImg.setAttribute('src', ulke.flag)
        cardImg.classList.add('card-img-top')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.textContent = ulke.name

        const cardText = document.createElement('p')
        cardText.classList.add('card-text')
        let content = `${ulke.capital} - ${ulke.languages} - ${ulke.region}`
        cardText.textContent = content

        const pop = document.createElement('a')
        pop.setAttribute('class', 'btn btn-warning w-100')
        pop.textContent = ulke.population

        cardDiv.append(cardImg)

        cardBody.append(cardTitle)
        cardBody.append(cardText)
        cardBody.append(pop)

        cardDiv.append(cardBody)

        col.append(cardDiv)

        ulkelerDiv.append(col)
    })


    container.append(ulkelerDiv)
}


//? button oluşturma
const btn2 = document.createElement('button')
btn2.setAttribute('class', 'btn btn-success mt-2')
btn2.textContent = 'Population'

container.append(btn2)

btn2.addEventListener('click', populasyonBulma)
//? button oluşturma

function populasyonBulma() {
    const populationDiv = document.createElement('div')

    countries.forEach((ulke) => {

        console.log(ulke)

    })



}