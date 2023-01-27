const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "a" && password === "a") {
        window.location.href = "submit.html";
    } else {
        alert("Nome utente o password non validi.");
    }
}
function submit() { 
// parse data from submit.html
    // var select = document.getElementById('select');
    // select. = function() {
    //     alert(this.value);
    // };
    window.onload = function() {
        var select = document.getElementById('select');
        select.onchange = function() {
            alert(this.value);
        };
    }
    
}

