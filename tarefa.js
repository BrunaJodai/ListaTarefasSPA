$(document).ready(function () {
    let tarefas = [];
    var idCont = 0;

    /*carregaTarefas();   

    function carregaTarefas() {
        $.ajax({
            url: 'tarefas.json',
            method: 'GET',
            success: function (data) {
                console.log(data);
                tarefas = data;
                idCont = tarefas.length;
                listarTarefas();
            }
        });
    }*/

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

        listarTarefas();
    });

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

    //insere uma linha para cada tarefa que está no array
    function listarTarefas() {
        for (var i = 0; i < tarefas.length; i++) {
            let tarefa = tarefas[i];
            $('#bodyTable').append(
                `<tr><td><input type="checkbox" id="${tarefa.id}"></input></td>
            <td>${tarefa.tarefa}</td>
            <td>${tarefa.prazo}</td></tr>`);
        }
    }

    //<del> ou <strike>





    /* function listarTarefas() {
         // $('#tableTarefas').html('');
         for (var i = 0; i < tarefas.length; i++) {
             //$("#tableTarefas").html(tarefas);
             var tarefa = tarefas[i];
             $('#bodyTable').append(`<tr id="${tarefa.id}"><td><input type="checkbox"></input></td>
             <td>${tarefa.tarefa}</td>
             <td>${tarefa.prazo}</td>
             <td><button type="button" class="btn btn-outline-danger">Remover Tarefa</button></td></tr>`);
         }
 
     }
 
     //exemplo da luana
     function carregar(tabela) {
         var newRow = document.createElement('tr');
         newRow.insertCell(0).innerHTML = '<input type="checkbox"></input>';
         newRow.insertCell(1).innerHTML = document.getElementsByName('Tarefa')[0].value;
         newRow.insertCell(2).innerHTML = document.getElementsByName('Prazo')[0].value;
         document.getElementById(tabela).appendChild(newRow);
         return false;
     }*/





    /* $('#tableTarefas').load('index.html', function () {
         carregaTarefas();
     });*/

    /*$("#btnNovaTarefa").click(function () {
               alert("Handler for .click() called.");      
           });
       
           //https://pt.stackoverflow.com/questions/41483/single-page-application-com-jquery
           $(function () {
               $(window).on('hashchange', hashchanged);
               hashchanged();
           });
       
           function hashchanged() {
               // var hash = location.hash.replace(/[#\/]/g, '') || 'home';
               $("#tableTarefas").load('NovaTarefa.html');
       
               function abreNovaTarefa(){
               $('#tableTarefas').load('views/NovaTarefa.html', function () {
                   alert("aaaaaaaa");
                  // $('#NovaTarefa').html("NovaTarefa");
               });
           }
   
            $(window).on('hashchange', function () {
           var hash = window.location.hash;
           var id = hash.substring(1);
           alert(hash + ' -->' + id);
           $('#tableTarefas').load('views/NovaTarefa.html', function () {
               alert("aaaaaaaa");
               // $('#NovaTarefa').html("NovaTarefa");
           });
       });*/
});