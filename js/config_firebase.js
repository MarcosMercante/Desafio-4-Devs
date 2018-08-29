// Configurações necessárias para acesso ao banco de dados do firebase
// Nota: apiKey exposta - falha de segurança no banco de dados - apenas para testes

var config = {
    apiKey: "AIzaSyBbwUf2LthD4uizpGHE_MQfEcksffNWlw0",
    authDomain: "pesquisa-clientes.firebaseapp.com",
    databaseURL: "https://pesquisa-clientes.firebaseio.com",
    projectId: "pesquisa-clientes",
    storageBucket: "pesquisa-clientes.appspot.com",
    messagingSenderId: "795892738193"
};
firebase.initializeApp(config);