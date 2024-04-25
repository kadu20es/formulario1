const button = document.querySelector("#btn");
button.addEventListener("click", validate);

const element = document.createElement("p");
element.className = "warning";

const minuscula = document.querySelector("#minuscula");
const maiscula = document.querySelector("#maiuscula");
const numero = document.querySelector("#numero");
const especial = document.querySelector("#especial");
const tamanho = document.querySelector("#tamanho");
const senha = document.querySelector("#senha");
let temp = "";

function verificarSenha() {
    const checarMinuscula = ((temp) => {
        let vmin = /(?=.*[a-z])/;
        return vmin.test(temp);
    });

    const checarMaiuscula = ((temp) => {
        let vmai = /(?=.*[A-Z])/;
        return vmai.test(temp)
    });

    const checarDigito = ((temp) => {
        let vdig = /(?=.*\d)/;
        return vdig.test(temp);
    });

    const checarEspecial = ((temp) => {
        let esp = /(?=.*\W)/;
        return esp.test(temp);
    });

    checarMinuscula(temp) ? minuscula.style.color = "#408c49" : minuscula.style.color = "#e6281e";
    checarMaiuscula(temp) ? maiscula.style.color = "#408c49" : maiscula.style.color = "#e6281e";
    checarDigito(temp) ? numero.style.color = "#408c49" : numero.style.color = "#e6281e";
    checarEspecial(temp) ? especial.style.color = "#408c49" : especial.style.color = "#e6281e";

    console.log(checarMinuscula(temp))
    console.log(checarMaiuscula(temp))
    console.log(checarDigito(temp))
    console.log(checarEspecial(temp))

    console.log(temp)
}

const psw = document.querySelector("#senha");
psw.addEventListener("keypress", (e) => {
    temp += e.key;
    verificarSenha()
});

psw.addEventListener("keydown", (e) => {
    // se a última letra for removida
    if (e.key === "Backspace") {
        temp = temp.slice(0, -1)
        verificarSenha();
    }
});


function validate(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmacaoSenha = document.querySelector("#confirmaSenha").value;

    const validarEmail = ((email) => {
        let v = /^[\w\.]+@([\w\.]+\.])+[\w]{2,4}$/g;
        console.log(v.test(email))
        v.test(email)
    })

    if (!nome) {
        imprimirmensagem("labelNome", "O campo nome é requerido.");
        return;
    }

    if (!sobrenome) {
        imprimirmensagem("labelSobrenome", "O campo sobrenome é requerido.");
        return;
    }

    if (!email) {
        imprimirmensagem("labelEmail", "O campo email é requerido.");
        return;
    } else if (!validarEmail) {
        imprimirmensagem("labelEmail", "Insira um e-mail válido.");
        return;
    }

    if (!senha) {
        imprimirmensagem("labelSenha", "O campo senha é obrigatório.");
        return;
    }

    if (confirmacaoSenha !== senha) {
        imprimirmensagem("labelConfirmacaoSenha", "As senhas devem ser iguais.");
        return;
    }

    const pessoa = {
        nome,
        sobrenome,
        email,
        senha
    }
}

function imprimirmensagem(identificador, mensagem){
    console.error(identificador, mensagem)
    const label = document.getElementById(identificador);
    element.innerHTML = mensagem;
    label.appendChild(element);
    return;
}