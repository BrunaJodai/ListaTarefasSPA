let tarefas = [];
var idCont = 0;

$(document).ready(function () {


});

$("bodyTable").on('click', '.check', function () {
    alert($(this).attr('value'));
});


//adiciona nova tarefa, depois carrega a tabela listando as tarefas
buttonAdd.onclick = function addTarefa() {
    let tarefaCompleta = {
        "id": idCont,
        "tarefa": $('#inputTarefa').val(),
        "prazo": $('#inputPrazo').val(),
        "terminada": false
    }

    tarefas.push(tarefaCompleta);
    idCont++;

    clearForm();

    listarTarefas();

    $('#modalNovaTarefa').modal('hide')
};

//limpar o form
function clearForm() {
    $("#inputTarefa").val("");
    $("#inputPrazo").val("");
}

//insere uma linha para cada tarefa que está no array
function listarTarefas() {
    //limpa o body da table
    document.querySelector(".bodyTable").innerHTML = '';

    for (var i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i];
    //    if (tarefa.terminada == false) {
            $("#bodyTable").append(
                `<tr><td><input type="checkbox" class="check" name="${tarefa.id}"></input></td>
            <td>${tarefa.tarefa}</td>
            <td>${tarefa.prazo}</td></tr>`);
        }
 //   }
}

mostrarTerminadas.onclick = function mostrarTerminadas() {

    let checks = document.querySelectorAll(".check");

    for (var i = 0; i < tarefas.length; i++) {
        if (checks[i].checked) {
            //altera pra true, se o checkbox estiver selecionado
            tarefas[i].terminada = true;

            //dps limpa a table, para não repetir os dados
            document.querySelector(".bodyTable").innerHTML = '';

            $("#bodyTable").append(
                `<tr><td><input type="checkbox" class="check" name="${tarefas[i].id}" checked></td>
                <td><strike>${tarefas[i].tarefa}</strike></td>
                <td><strike>${tarefas[i].prazo}</strike></td></tr>`);
        }
    }

};

//remove do array os que estão selecionados e dps lista novamente
removerTarefas.onclick = function removerTarefas() {
    let checks = document.querySelectorAll(".check");

    for (var i = 0; i < tarefas.length; i++) {

        if (checks[i].checked) {
           // tarefas[i].terminada = true;
           tarefas.splice(i);
        }
    }
    console.log(tarefas);

    idCont--;
    listarTarefas();
};
