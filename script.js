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
    
    function checkName() {
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let name = $("#txtName").val();
        let nameRegex = /^[a-zA-Z\s0]{1,}$/
        if (nameRegex.test(name)) {
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
        
        if (checkName()) {
            $("#statusOfName").text("Tên hợp lệ");
            $("#statusOfName").css("color", "blue");
        } else {
            $("#statusOfName").text("Tên không hợp lệ");
            $("#statusOfName").css("color", "red");
        }
        // console.log('abc')
    });
});

// let result = /^techtuts$/.test("techtuts techtuts");
// console.log(result); // False
