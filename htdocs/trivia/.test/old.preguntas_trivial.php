<?php
require_once 'clases/trivial.class.php';
if(!isset($_SESSION['nombre'])){
	header("Location: index.php");
}
$trivial = new Trivial();
//obtnemos un pregunta
$pregunta = $trivial->get_preguntas();
//obtenemos las posibles respuestas de la pregunta
$respuestas = $trivial->get_respuestas($pregunta['id']);
//las desordenamos
shuffle($respuestas);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trivia</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
    <script src="/js/jquery.js"></script>
</head>

<body>
    <div id="header"> </div>


    <div class="container mx-auto py-3 align-middle">
        <a href="/trivia/index.html" class="text-left float-left pt-3"><img src="/images/back.png" width="50%"></a>
        <a href="/trivia/.test/ranking.php" class="text-right float-right pt-3"><img src="/images/trophy.png" width="35%"></a>
        <div class="text-center row">
            <h4 class="text-left col-lg-8">
                <?=$pregunta['pregunta']?>
            </h4>
        </div>
    </div>

    <div class="container row mx-auto">
        <div class="col-lg-8">
            <div class="align-elements-center">
                <h3 class="float-left"><img class="align-self-center pr-3" src="/images/clock.png" style="height: 1.25em;"><span class="align-self-center font-weight-bold countdown" id="time"></span></h3>
                <h3 class="text-right"><span class="align-self-center font-weight-bold pr-3">
                        <?=$_SESSION['puntos']?></span><img class="align-self-center" src="/images/point.png" style="height: 1.25em;"></h3>
            </div>
            <form method="post" action="/trivia/.test/instancias/respuestas.php" class="pb-5">
                <input type="hidden" name="correcta" value="<?=$pregunta['correcta']?>" />
                <?php 
                    $i = 1;
                    foreach ($respuestas as $respuesta) {
                ?>
                <div class="row pt-2">
                    <button name="respuesta" type="submit" class="btn btn-info py-3 w-100" value="<?=$respuesta['id']?>">
                        <p style="white-space: normal;" class="my-0">
                            <?=$respuesta['respuesta']?>
                            <?php $i++;?>
                        </p>
                    </button>
                </div>
                <?php }?>
            </form>
        </div>
    </div>
    <div id="footer"> </div>
    <script src="/js/popper.js"></script>
    <script src="/js/bootstrap.js"></script>
    <script src="/js/jqRedirect.js"></script>
    <script>
        $("#header").load("/resources/header.html");
        $("#footer").load("/resources/footer.html");
        //Empuja el elemento #footer al final de la página
        $(document).ready(function() {

            var docHeight = $(window).height();
            var footerHeight = $('#footer').height();
            var footerTop = $('#footer').position().top + footerHeight;

            if (footerTop < docHeight) $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
        });

    </script>
    <script>
        $.fn.countdown = function(callback, duration, message) {
            message = message || "";
            var container = $(this[0]).html(duration + message);
            var countdown = setInterval(function() {
                if (--duration) {
                    container.html(duration + message);
                } else {
                    clearInterval(countdown);
                    callback.call(container);
                }
            }, 1000);
        };

        function timeoutRedirect() {
            $.redirect("instancias/respuestas.php", {'respuesta': '99'});

        }
        $(document).ready(function() {
            $(".countdown").countdown(timeoutRedirect, 20, " s");
        })

    </script>
</body>

</html>
