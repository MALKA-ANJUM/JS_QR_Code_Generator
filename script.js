console.log("hello")

const wrapper = document.querySelector(".wrapper")
const generateBtn = wrapper.querySelector(".form button")
const qrInput = wrapper.querySelector(".form input")
const qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value
    if(!qrValue) return //if the input is empty then return from here
    generateBtn.innerText ="Generating QR Code..."
    //console.log(qrValue);
    // getting a QR code of user using qrserver
    //api and passing the api returned img src to qrImg
    qrImg.src = `http://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${qrValue}`
    qrImg.addEventListener("load", () =>{
        wrapper.classList.add("active")
        generateBtn.innerText ="Generate QR Code"
    })
   
})
qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})