const testiData = [
    {
        name: "Malchiram",
        qoute: "mencoba yang terbaik",
        rating: 3,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Timpolas",
        qoute: "Belajar Javascript",
        rating: 2,
        image: "https://media.istockphoto.com/id/1421613362/id/foto/pria-yang-fokus-membaca-sesuatu-secara-online-membuat-catatan.jpg?s=612x612&w=is&k=20&c=N8W0dttqsWGcvu6sDWACgp3As_U3n_1XzGcwWtM2q1Y="
    },
    {
        name: "Misael",
        qoute: "Belajar Golang",
        rating: 5,
        image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
]

function showTestimonial() {
    let testiForHTML = ''

    testiData.forEach(item => {
        testiForHTML += `
        <div class="testi-card">
            <img src="${item.image}" alt="" class="profile-testi">
            <p class="qoute-testi">~${item.qoute}</p>
            <p class="author">${item.name}</p>
            <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>
        `
    })
    document.getElementById('cardTesti').innerHTML = testiForHTML
}

showTestimonial()

// HOF & Callback

function filterData(rating) {
    let testiForHTML = '';
    const dataFilter = testiData.filter(function (data) { return data.rating === rating })
    console.log(dataFilter)

    if (dataFilter.length === 0) {
        testiForHTML = `<h3>Data not found ! </h3>`
    } else {
        dataFilter.forEach(data => {
            testiForHTML += `
             <div class="testi-card">
            <img src="${data.image}" alt="" class="profile-testi">
            <p class="qoute-testi">~${data.qoute}</p>
            <p class="author">${data.name}</p>
            <p class="rating">${data.rating}</p>
        </div>
            `
        })
    }
    document.getElementById('cardTesti').innerHTML = testiForHTML
}
