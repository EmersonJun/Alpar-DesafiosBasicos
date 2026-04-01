const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");

    const msgNome = document.getElementById("msgNome");
    const msgEmail = document.getElementById("msgEmail");
    const msgCpf = document.getElementById("msgCpf");

    const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    let valido = true;

    if (regexNome.test(nome.value)) {
        nome.classList.add("valido");
        nome.classList.remove("invalido");
        msgNome.textContent = "Válido";
        msgNome.className = "msg sucesso";
    } else {
        nome.classList.add("invalido");
        nome.classList.remove("valido");
        msgNome.textContent = "Inválido";
        msgNome.className = "msg erro";
        valido = false;
    }

    if (regexEmail.test(email.value)) {
        email.classList.add("valido");
        email.classList.remove("invalido");
        msgEmail.textContent = "Válido";
        msgEmail.className = "msg sucesso";
    } else {
        email.classList.add("invalido");
        email.classList.remove("valido");
        msgEmail.textContent = "Inválido";
        msgEmail.className = "msg erro";
        valido = false;
    }

    if (regexCpf.test(cpf.value)) {
        cpf.classList.add("valido");
        cpf.classList.remove("invalido");
        msgCpf.textContent = "Válido";
        msgCpf.className = "msg sucesso";
    } else {
        cpf.classList.add("invalido");
        cpf.classList.remove("valido");
        msgCpf.textContent = "Inválido";
        msgCpf.className = "msg erro";
        valido = false;
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
    }
});