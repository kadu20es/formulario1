const action = document.querySelector("#btn");

action.addEventListener("click", (e) => {
    e.preventDefault();
    const formulario = document.querySelector("#form");
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmacaoSenha = document.querySelector("#confirmaSenha").value;

    const pessoa = {
        nome,
        sobrenome,
        email,
        senha
    }

    console.log(pessoa);

    formulario.reset();

});