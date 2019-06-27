$(document).ready(function () {
    
   
    $("#home").click(function (){
    $("section").load('home.html');
    });
    $("#cadastro").click(function (){
    $("section").load('cadastro.html');
    });
    $("#fotos").click(function (){
    $("section").load('fotos.html');
    });
    $("#sobre").click(function (){
        $("section").load('sobre.html');
    });
});

