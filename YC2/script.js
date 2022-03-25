$(document).ready(() =>{
    let btnRegister = $('#btnRegister')
    function enableBtn(){
        btnRegister.prop('disabled', false)
    }

    function disableBtn(){
        btnRegister.prop('disabled', true)
    }
    let checkUser = false
    let checkPassword = false
    let checkName = false
    let checkCountry = false
    let checkEmail = false
    let checkZIPCode = false
    let checkSex = false
    let checkLanguage = false

    let userID = $("#txtUserID")
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/

    userID.focusout(() =>{
        if (userIDRegex.test(userID.val())){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
            checkUser = true
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
            checkUser = false
        }
    })
    
    let password = $('#txtPassword')
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/

    password.focusout(() =>{
        if (passwordRegex.test(password.val())){
            $('#statusOfPassword').text('Password hợp lệ')
            $('#statusOfPassword').css('color', 'blue')
            checkPassword = true
        }else{
            $('#statusOfPassword').text('Password không hợp lệ')
            $('#statusOfPassword').css('color', 'red')
            checkPassword = false
        }
    })
    let name = $("#txtName")
    let nameRegex = /^[a-zA-Z\s]+$/

    name.focusout(() =>{
        if (nameRegex.test(name.val())){
            $("#statusOfName").text("Tên hợp lệ")
            $("#statusOfName").css("color", "blue")
            checkName = true
        } else {
            $("#statusOfName").text("Tên không hợp lệ")
            $("#statusOfName").css("color", "red")
            checkName = false
        }
    })

    let country = $('#countries')

    country.focusout(() =>{
        if (country.val() != ''){
            $('#statusOfCountry').text('')
            checkCountry = true
        }
        else{
            $('#statusOfCountry').text('Vui lòng chọn quốc gia')
            $('#statusOfCountry').css('color', 'red')
            checkCountry = false
        }
    })

    let zipCode = $('#txtZipCode')
    let zipCodeRegex = /^[0-9]+$/

    zipCode.focusout(() =>{
        if (zipCodeRegex.test(zipCode.val())){
            $('#statusOfZipCode').text('ZIP Code hợp lệ')
            $('#statusOfZipCode').css('color', 'blue')
            checkZIPCode = true
        }else{
            $('#statusOfZipCode').text('ZIP Code không hợp lệ')
            $('#statusOfZipCode').css('color', 'red')
            checkZIPCode = false
        }

    })

    let email = $('#txtEmail')
    let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/igm

    email.focusout(() =>{
        if (emailRegex.test(email.val())){
            $('#statusOfEmail').text('Email hợp lệ')
            $('#statusOfEmail').css('color', 'blue')
            checkEmail = true
        }else{
            $('#statusOfEmail').text('Email không hợp lệ')
            $('#statusOfEmail').css('color', 'red')
            checkEmail = false
        }

    })
    
    let sexMale = $('#sexMale')
    let sexFemale = $('#sexFemale')

    sexMale.focusout(() =>{
        if (sexMale.prop('checked') || sexFemale.prop('checked')){
            $('#statusOfSex').text('')
            checkSex = true
        }
        else{
            $('#statusOfSex').text('Vui lòng chọn giới tính')
            $('#statusOfSex').css('color', 'red')
            checkSex = false
        }
    })
    sexFemale.focusout(() =>{
        if (sexMale.prop('checked') || sexFemale.prop('checked')){
            $('#statusOfSex').text('')
            checkSex = true
        }
        else{
            $('#statusOfSex').text('Vui lòng chọn giới tính')
            $('#statusOfSex').css('color', 'red')
            checkSex = false
        }
    })

    let eng = $('#langEng')
    let nonEng = $('#langNonEng')

    eng.focusout(() =>{
        if (eng.prop('checked') || nonEng.prop('checked')){
            $('#statusOfLanguage').text('')
            checkLanguage = true
        }
        else{
            $('#statusOfLanguage').text('Vui lòng chọn ngôn ngữ')
            $('#statusOfLanguage').css('color', 'red')
            checkLanguage = false
        }  
    })
    nonEng.focusout(() =>{
        if (eng.prop('checked') || nonEng.prop('checked')){
            $('#statusOfLanguage').text('')
            checkLanguage = true
        }
        else{
            $('#statusOfLanguage').text('Vui lòng chọn ngôn ngữ')
            $('#statusOfLanguage').css('color', 'red')
            checkLanguage = false
        }  
    })

    setInterval(() =>{
        if (checkUser && checkPassword && checkName && checkCountry && checkEmail && checkLanguage && checkSex && checkZIPCode)
            enableBtn()
        else
            disableBtn()
    }, 1)
});
