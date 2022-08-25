$(document).ready(function () {
    $(".submit").click(function () {
        validarFormJQuery();
    })
})

function validarFormJQuery() {
    let usuario = $("#usuario").val();
    let senha = $("#senha").val();

  
    if (usuario.trim() == '' || senha.trim() == '') {
        $("#msgValidacao").text("Preencher todos os campos!");
    } else {
        $("#msgValidacao").html('<strong> Dados Validados!!</strong>');
    }
}

function validarLogin() {
    event.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (usuario.trim() == '' || senha.trim() == '') {
        document.getElementById('msgValidacao').innerText = 'Preencher todos os campos';
    } else {
        document.getElementById('msgValidacao').innerText = 'Usuário preenchido corretamente';

        console.log("Efetuar o Login: ")
        console.log(usuario);
        console.log(senha);
    }

}