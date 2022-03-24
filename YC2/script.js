$(document).ready(function () {
    function checkUserId() {
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let userID = $("#txtUserID").val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test(userID)) {
            return true;
        }
        return false;
    }

    function checkPassword(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }
    
    function checkName() {
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let name = $("#txtName").val();
        let nameRegex = /^[a-zA-Z\s0]{1,}$/
        if (nameRegex.test(name)) {
            return true;
        }
        return false;
    }

    function checkZipCode() {
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let ZipCode = $("#txtZipCode").val();
        let ZipCodeRegex = /^[Z0-9]{1,}$/
        if (ZipCodeRegex.test(ZipCode)) {
            return true;
        }
        return false;
    }

    function checkEmail(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let Email = $("#txtEmail").val();
        let EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (EmailRegex.test(Email)) {
            return true;
        }
        return false;
    }

    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }

        if(checkPassword()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }
        
        if (checkName()) {
            $("#statusOfName").text("Tên hợp lệ");
            $("#statusOfName").css("color", "blue");
        } else {
            $("#statusOfName").text("Tên không hợp lệ");
            $("#statusOfName").css("color", "red");
        }

        if (checkZipCode()) {
            $("#statusOfZipCode").text("ZipCode hợp lệ");
            $("#statusOfZipCode").css("color", "blue");
        } else {
            $("#statusOfZipCode").text("ZipCode không hợp lệ");
            $("#statusOfZipCode").css("color", "red");
        }

        if (checkEmail()) {
            $("#statusOfEmail").text("Email hợp lệ");
            $("#statusOfEmail").css("color", "blue");
        } else {
            $("#statusOfEmail").text("Email không hợp lệ");
            $("#statusOfEmail").css("color", "red");
        }
        // console.log('abc')

        
    });
});
