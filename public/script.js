const contactForm = document.querySelector(".form")
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const msg = document.querySelector('#msg')


contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        msg: msg.value
    }
    // console.log(formData)
    
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8000/contact')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        console.log(xhr.responseText)
        if (xhr.responseText === "success") {
            alert("YAY! EMAIL SEND SUCCESSFULLY")
            name.value = ''
            email.value = ''
            subject.value = ''
            msg.value = ''
        } else {
            alert("SOMETHING WENT WRONG")
        }
    }
    // xhr.onload()
    // console.log(xhr)
    xhr.send(JSON.stringify(formData))
    
    // fetch('http://localhost:8000/', {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {"content-type": "application/json"}
    // })
    // .then(response => response.json()) 
    // .then(json => console.log(json))

})







// Using fetch
// fetch('/', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     }
// }).then(res => console.log(res))
