var mes_avaliacaoInput = document.getElementById('mes_avaliacaoInput');
var ano_avaliacaoInput = document.getElementById('ano_avaliacaoInput');
var btnCadAvaliacao = document.getElementById('btnCadAvaliacao');
var corpo_da_tabela = document.getElementById('tbl_body');
var st_pesquisa = document.getElementById('status_pesquisa');
//var checkboxes = document.getElementById("form1").checkboxes;

var count = 0;
var n = 0;
var percent = 0;

btnCadAvaliacao.addEventListener('click', function () {
    if (n > percent){
        alert('Você pode apenas selecionar apenas '+percent+' cliente(s), que corresponde a 20% da lista.');
    }
    if (n == 0){alert('Você deve selecionar pelo menos 01 cliente')};
}); 


firebase.database().ref('clientes').on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        //criando elementos
        count++; 
        var linha = document.createElement('tr');
        var campo_selecao = document.createElement('td');
        campo_selecao.setAttribute('align', 'center');
        var chk_selecao = document.createElement('input');
        chk_selecao.setAttribute('type', 'checkbox');
        chk_selecao.setAttribute('value', item.key);
        var campo_cliente = document.createElement('td');
        var campo_contato = document.createElement('td');
        var campo_dt_cadastro = document.createElement('td');
        var campo_categoria = document.createElement('td'); 
        //criando os nós para captura dos textos
        //var texto_selecao = document.createTextNode(' ');
        var texto_cliente = document.createTextNode(item.val().cliente);
        var texto_contato = document.createTextNode(item.val().contato);
        var texto_dt_cadastro = document.createTextNode(item.val().data_cadastro);
        var texto_categoria = document.createTextNode(item.val().categoria);
        //if (texto_categoria=='Nenhum'){clientes_elegiveis++;}
        //vinculando os elementos criados aos nós
        //campo_selecao.appendChild(texto_selecao);
        campo_selecao.appendChild(chk_selecao);
        campo_cliente.appendChild(texto_cliente);
        campo_contato.appendChild(texto_contato);
        campo_dt_cadastro.appendChild(texto_dt_cadastro);
        campo_categoria.appendChild(texto_categoria);
        linha.appendChild(campo_selecao);
        linha.appendChild(campo_cliente);
        linha.appendChild(campo_contato);
        linha.appendChild(campo_dt_cadastro);
        linha.appendChild(campo_categoria);
        //vinculando tudo ao documento existente
        corpo_da_tabela.appendChild(linha);  
    });
    //var total_checked = checkboxes.checked.length;
    percent = parseInt(count*(20/100));
    st_pesquisa.appendChild(document.createTextNode('Existe(m) '+count+' clientes habilitados para a avaliação, porém somente 20% poderão ser selecionado(s), neste caso selecione apenas '+ percent+' cliente(s).'));

       
    var contador = function() {
        //var n = 0;
        n = $("input:checked").length;
        $("#checkcount").text("Total de clientes selecionados: " + n +" de "+percent );
      };
      contador(); 
      $( "input[type=checkbox]" ).on( "click",contador);
      
});


firebase.database().ref('avaliacao').on('value', function () {
    return false;
});







