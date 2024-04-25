const button = document.querySelector("#btn");
button.addEventListener("click", validate);

function validate(event) {
    event.preventDefault();

    const name = document.querySelector("#nome").value;
    const familyName = document.querySelector("#sobrenome").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#senha").value;
    const confirmPassword = document.querySelector("#confirmaSenha").value;

    const emailValidation = ((email) => {
        let op = /^[\w\.]+@([\w-]+\.])+[\w]{2,4}$/g;
        return op.test(email);
    })

    if (!name) {
        printMessage("#labelNome", "#nome", "O campo nome não pode ficar vazio.");
        return;
    }

    if (!familyName) {
        printMessage("#labelSobrenome", "sobrenome", "O campo sobrenome não pode ficar vazio.");
        return;
    }

    if (!emailValidation(email) || !email) {
        printMessage("#labelEmail", "email", "insira um e-mail válido.");
        return;
    }

    if (!password) {
        printMessage("#labelSenha", "senha", "O campo senha não pode ficar vazio.");
        return;
    }

    if (!confirmPassword || confirmPassword !== password) {
        printMessage("#labelConfirmaSenha", "confirmacaoSenha", "As senhas devem ser iguais.");
        return;
    }

    const obj = {
        name,
        familyName,
        email,
        password
    }

    console.log(obj)
}

function printMessage(labelId, inputId, message) {
    element.innerHTML = message;
    element.className = "warning";
    const label = document.querySelector(labelId);
    label.appendChild(element);
    return;
}
