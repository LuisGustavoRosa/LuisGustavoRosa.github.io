$(document).ready(function () {
    $("#home").click(function () {
        $("section").load('home.html');
    });

    $("#fotos").click(function () {
        $("section").load('fotos.html');
    });

    $("#cadastro").click(function () {
        $("section").load('cadastro.html');
    });

    $("sobre").click(function () {
        $("section").load('sobre.html');
    });
});

