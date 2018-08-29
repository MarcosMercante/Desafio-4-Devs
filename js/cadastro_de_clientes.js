/* Declarando variáveis e passando valores do formulário, obtidos através do arquivo
cadastro_de_cliente.html  */

//var msgList = document.getElementById('msgList');
var nome_do_clienteInput = document.getElementById('nome_do_clienteInput');
var nome_do_contatoInput = document.getElementById('nome_do_contatoInput');
var data_cadastroInput = document.getElementById('data_cadastroInput');
var addButton = document.getElementById('addButton');


/* Ao clicar no botão o evento click chama a função valida_form() com o objetivo fazer cumprir
especificação para que todos os campos sejam preenchidos obrigatóriamente.
*/
addButton.addEventListener('click', function () {
    valida_form();
}); 

/* conecta com o banco de dados do google Firebase e insere os valores dos 3 campos
contidos no cadastro */
function create(cliente, contato, data_cadastro) {
    var data = {
        cliente : cliente,
        contato : contato,
        data_cadastro : data_cadastro,
        categoria : 'Nenhum'
    };

    return firebase.database().ref().child('clientes').push(data);
}


firebase.database().ref('clientes').on('value', function () {
        return false;
    });



/* Função para cumprir que todos os campos sejam preenchidos.
Faz a verificação de cada campo, enviando um alerta ao usuário sempre que algum campo
for nulo. */



function valida_form (){
    if((nome_do_clienteInput.value == "")||(nome_do_contatoInput.value == "")||(data_cadastroInput.value == "")){
        alert('Atenção. Todos os campos deste formulário deverão estar devidamente preenchidos.');
        nome_do_clienteInput.focus();
        return false
    }
        create(nome_do_clienteInput.value, nome_do_contatoInput.value, data_cadastroInput.value);



}
