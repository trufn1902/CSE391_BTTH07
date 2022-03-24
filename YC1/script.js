let btnRegister = document.getElementById('btnRegister')
function disableBtn(){
    btnRegister.disabled = true
}

function enableBtn(){
    btnRegister.disabled = false
}
// User ID
let userID = document.getElementById('txtUserID')
let statusOfUserID = document.getElementById('statusOfUserID')
let checkUser = false

userID.addEventListener('focusout', () =>{
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/

    if (userIDRegex.test(userID.value)){
        statusOfUserID.textContent = 'User ID hợp lệ'
        statusOfUserID.style.color = 'blue'
        checkUser = true
    }else{
        statusOfUserID.textContent = 'User ID không hợp lệ'
        statusOfUserID.style.color = 'red'
        checkUser = false
    }
})

// Password

let password = document.getElementById('txtPassword')
let statusOfPassword = document.getElementById('statusOfPassword')
let checkPassword = false

password.addEventListener('focusout', () =>{
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/

    if (passwordRegex.test(password.value)){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
        checkPassword = true
    }else{
        statusOfPassword.textContent = 'Password không hợp lệ'
        statusOfPassword.style.color = 'red'
        checkPassword = false
    }
})

// Name

let name = document.getElementById('txtName')
let statusOfName = document.getElementById('statusOfName')
let checkName = false

name.addEventListener('focusout', () =>{
    let nameRegex = /^[a-zA-Z\s]+$/

    if (nameRegex.test(name.value)){
        statusOfName.textContent = 'Tên hợp lệ'
        statusOfName.style.color = 'blue'
        checkName = true
    }else{
        statusOfName.textContent = 'Tên không hợp lệ'
        statusOfName.style.color = 'red'
        checkName = false
    }
})

// Country

let country = document.getElementsByName('countries')[0]
let statusOfCountry = document.getElementById('statusOfCountry')
let checkCountry = false

country.addEventListener('focusout', () =>{
    if (country.value == ''){
        statusOfCountry.textContent = 'Vui lòng chọn quốc gia'
        statusOfCountry.style.color = 'red'
        checkCountry = false
    }else{
        statusOfCountry.textContent = ''
        checkCountry = true
    }
})

// ZIP Code

let zipCode = document.getElementById('txtZipCode')
let statusOfZipCode = document.getElementById('statusOfZipCode')
let checkZIPCode = false

zipCode.addEventListener('focusout', () =>{
    let zipCodeRegex = /^[0-9]{1,}$/

    if (zipCodeRegex.test(zipCode.value)){
        statusOfZipCode.textContent = 'ZIP Code hợp lệ'
        statusOfZipCode.style.color = 'blue'
        checkZIPCode = true
    }else{
        statusOfZipCode.textContent = 'ZIP Code không hợp lệ'
        statusOfZipCode.style.color = 'red'
        checkZIPCode = false
    }
})

// Email

let email = document.getElementById('txtEmail')
let statusOfEmail = document.getElementById('statusOfEmail')
let checkEmail = false

email.addEventListener('focusout', () =>{
    let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.+[A-Z]{2,4}/igm

    if (emailRegex.test(email.value)){
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
        checkEmail = true
    }else{
        statusOfEmail.textContent = 'Email không hợp lệ'
        statusOfEmail.style.color = 'red'
        checkEmail = false
    }
})

// Sex

let sex = document.getElementsByName('txtSex')
let statusOfSex = document.getElementById('statusOfSex')
let checkSex = false

sex.forEach(e =>{
    e.addEventListener('focusout', () =>{
        if (!sex[0].checked && !sex[1].checked){
            statusOfSex.textContent = 'Vui lòng chọn giới tính'
            statusOfSex.style.color = 'red'
            checkSex = false
        }else{
            statusOfSex.textContent = ''
            checkSex = true
        }
    })
})

// Language

let language = document.getElementsByName('language')
let statusOfLanguage = document.getElementById('statusOfLanguage')
let checkLanguage = false

language.forEach(lang =>{
    lang.addEventListener('focusout', () =>{
        if (!language[0].checked && !language[1].checked){
            statusOfLanguage.textContent = 'Vui lòng chọn ngôn ngữ'
            statusOfLanguage.style.color = 'red'
            checkLanguage = false
        }else{
            statusOfLanguage.textContent = ''
            checkLanguage = true
        }
    })
})

// let btnRegister = document.getElementById('btnRegister')
if (checkCountry && checkEmail && checkLanguage && checkName && checkPassword && checkUser && checkZIPCode)
    enableBtn()

// console.log(checkCountry, checkEmail, checkLanguage, checkName, checkPassword, checkUser, checkZIPCode)
setInterval(() =>{
    if (checkSex && checkCountry && checkEmail && checkLanguage && checkName && checkPassword && checkUser && checkZIPCode)
        enableBtn()
    else{
        disableBtn()
    }
}, 1)