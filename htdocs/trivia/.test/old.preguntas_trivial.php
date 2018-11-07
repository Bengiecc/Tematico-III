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
    <title>Juego de trivial</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css" -->
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
    <script src="/js/jquery.js"></script>
    <!--script src="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>-->
</head>

<body>
    <div id="header"> </div>


    <div class="container mx-auto py-3 align-middle">
        <?php
		if(isset($_SESSION['respuesta']))
		{
		 echo $_SESSION['respuesta'];
		}
		?>
        <a href="#" class="text-left float-left pt-3"><img src="/images/back.png" width="50%"></a>
        <a href="#" class="text-right float-right pt-3"><img src="/images/gear.png" width="55%"></a>
        <div class="text-center row">
            <!--Preguntas | Contenido Dinámico-->
            <h4 class="text-left col-lg-8">
                <?=$pregunta['pregunta']?>
            </h4>
        </div>
    </div>

    <div class="container row mx-auto">
        <div class="col-lg-8">
            <div class="align-elements-center">
                <h3 class="float-left"><img class="align-self-center pr-3" src="/images/clock.png" style="height: 1.25em;"><span class="align-self-center font-weight-bold" id="time">20s</span></h3>
                <h3 class="text-right"><span class="align-self-center font-weight-bold pr-3">
                        <?php echo $_SESSION['puntos']?></span><img class="align-self-center" src="/images/point.png" style="height: 1.25em;"></h3>
            </div>
            <form method="post" id="form_responder" action="instancias/respuestas.php" accept-charset="utf-8" data-ajax="false">
                <?php 
                    $i = 1;
                    foreach ($respuestas as $respuesta) {
                ?>
                <div class="row pt-2">
                    <button type="submit" class="btn btn-info py-3 w-100">
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

        function startTimer(duration, display) {
            var timer = duration,
                minutes, seconds;
            setInterval(function() {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = seconds + "s";

                if (--timer < 0) {
                    timer = 0;
                }

            }, 1000);
        }

        window.onload = function() {
            var time = 20,
                display = document.querySelector('#time');
            startTimer(time, display);
        };
        

    </script>
</body>

</html>
