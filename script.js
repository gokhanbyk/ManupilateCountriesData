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
    populationDiv.classList.add('mt-3')
    populationDiv.style.width = '100%'

    countries.sort((a, b) => b.population - a.population)

    countries.forEach((ulke) => {
        // console.log(ulke.name)
        const div = document.createElement('div')
        div.setAttribute('class', 'd-flex justify-content-between')

        const ulkeIsmi = document.createElement('p')
        ulkeIsmi.textContent = ulke.name

        const yuzdePop = document.createElement('div')
        let hesap = (ulke.population / 8_000_000_000) * 100
        yuzdePop.style.height = "20px"
        yuzdePop.style.width = `${hesap.toFixed(2)}%`
        yuzdePop.style.backgroundColor = 'black'
        yuzdePop.style.borderRadius = '20px'
        yuzdePop.style.color = 'white'

        yuzdePop.textContent = `${hesap.toFixed(2)}%`


        const population = document.createElement('p')
        population.textContent = ulke.population

        div.append(ulkeIsmi)
        div.append(yuzdePop)
        div.append(population)

        populationDiv.append(div)

    })

    container.append(populationDiv)
}

//? Button
const btn3 = document.createElement('button')
btn3.textContent = 'Clear'
btn3.setAttribute('class', 'btn btn-dark mt-2')

container.append(btn3)

btn3.addEventListener('click', () => {
    location.reload()
})


//? Date

// console.log(date) // Sun Nov 12 2023 15:32:33 GMT+0300 (GMT+03:00)

// console.log(date.getDate()) // ayın gününü aldı 12
// console.log(date.getDay()) // 0 yani pazar hafatanın gününü aldı
// console.log(date.getFullYear()) // 2023
// console.log(date.getHours()) // 15 saati getirir
// console.log(date.getMilliseconds()) //milisaniye
// console.log(date.getMinutes()) // 34 dakika
// console.log(date.getMonth()) //0dan başlar yani, kasım = 10
// console.log(date.getSeconds()) // saniye

const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']


const p = document.getElementById('saat')

let saat = setInterval(() => {
    let date = new Date()


    let gun = date.getDate()
    let ay = months[date.getMonth()]
    let yıl = date.getFullYear()
    let haftaninGunu = days[date.getDay()]

    let saat = date.getHours()
    let dakika = date.getMinutes()
    let saniye = date.getSeconds()

    if (saniye < 10) {
        saniye = '0' + saniye
    }

    let tarih = `${gun} ${ay} ${yıl} ${haftaninGunu} - ${saat}:${dakika}:${saniye}`

    p.textContent = tarih
    // console.log(tarih);
}, 1000)


setTimeout(() => {
    console.log('5 saniye sonra çalıştı')
    clearInterval(saat)
}, 5000)