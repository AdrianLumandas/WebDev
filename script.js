function register() {
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();

    $.ajax({
        type: "POST",
        url: "signup.php",
        data: {
            name: username,
            email: email,
            password: password
        },
        success: function (response) {
            alert(response);
            
        }

    });

    window.location.href = "login.html";
}


function validate() {
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;

    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return false;
        }
    }

    alert("Form submitted successfully!");
    return true;
}
