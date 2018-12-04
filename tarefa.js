let tarefas = [];
var idCont = 0;

$(document).ready(function () {

});

//adiciona nova tarefa, depois carrega a tabela listando as tarefas
$("#NovaTarefa").on("submit", function () {
    let tarefaCompleta = {
        "id": idCont,
        "tarefa": $('#inputTarefa').val(),
        "prazo": $('#inputPrazo').val(),
        // "terminada": false
    }

    tarefas.push(tarefaCompleta);
    idCont++;

    clearForm();

    listarTarefas();
});

//limpar o form
function clearForm() {
    $("#inputTarefa").val("");
    $("#inputPrazo").val("");
}

//insere uma linha para cada tarefa que está no array
function listarTarefas() {
    for (var i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i];
        $("#bodyTable").append(
            `<tr><td><input type="checkbox" id="${tarefa.id}"></input></td>
            <td>${tarefa.tarefa}</td>
            <td>${tarefa.prazo}</td></tr>`);
    }
}

//marca tarefas selecionadas como terminadas, depois carrega a tabela listando as tarefas
$("#mostrarTerminadas").on("submit", function () {
    alert("marcar tarefa");

    //conta as rows da tabela
    var linhas = document.getElementById("tableTarefas").rows.length;

    let listaMarcadas = document.querySelectorAll("input:checked");

    console.log(listaMarcadas);

    for (var i = 0; i < linhas; i++) {

        if (listaMarcadas[i].checked) {
            
        }

    }

    //$(".myclass").css("text-decoration: line-through;");


    /*for (var i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i];
        if(listaMarcadas[i].checked){
            tarefas.splice(i);
        }
    }    
    
    idCont--;
    listarTarefas();*/
});



    //<del> ou <strike>

