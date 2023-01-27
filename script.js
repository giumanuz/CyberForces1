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
      
function uploadFile() {
    var file = document.getElementById("file").files[0];
    var formData = new FormData();
    formData.append("file", file);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "upload.php", true);
    xhr.send(formData);

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
        //alert("File caricato con successo!");
        } else {
        alert("Errore durante il caricamento del file.");
        }
    }
}

function uploadText() {
    var text = document.getElementById("text").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "uploadText.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("text=" + text);
}

function uploadSelect() {
    var select = document.getElementById("select");
    var value = select.options[select.selectedIndex].value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "uploadSelect.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("value=" + value);
}

function submit() {
    uploadSelect(); 
}

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
  }
} 
