<?php
require_once 'clases/trivial.class.php';
if(!isset($_SESSION['nombre'])){
	header("Location: /trivial/index.php");
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
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
    <script src="/js/jquery.js"></script>
    <script>

    </script>
</head>

<body>

    <div id="header"></div>




    <section>

        <?php
		  if(isset($_SESSION['respuesta'])){
		      echo $_SESSION['respuesta'];
		  }
		?>
        <div class="container mx-auto py-3 align-self-middle">
            <a href="#" class="text-left float-left pt-3"><img src="/media/back.png" width="50%"></a>
            <a href="#" class="text-right float-right pt-3"><img src="/media/gear.png" width="55%"></a>
            <div class="text-center row">
                <!--Preguntas | Contenido Dinámico-->
                <h4 class="text-left col-lg-8">
                    <?=$pregunta['pregunta']?>
                </h4>
            </div>
        </div>
        <p>Hola
            <?php echo $_SESSION['nombre'] ?>&nbsp;&nbsp;Tus puntos:
            <?php echo $_SESSION['puntos']?>
        </p>
        <p><label><b>
                    <?=$pregunta['pregunta']?></b></label></p>
        <form method="post" id="form_responder" action="instancias/respuestas.php" accept-charset="utf-8" data-ajax="false">

            <input type="hidden" name="correcta" value="<?=$pregunta['correcta']?>" />

            <?php $i = 1;
			foreach ($respuestas as $respuesta) { ?>
            <input type="radio" name="respuesta" id="radio-choice-<?=$i?>" value="<?=$respuesta['id']?>" />
            <label for="radio-choice-<?=$i?>">
                <?=$respuesta['respuesta']?></label>
            <?php $i++; } ?>
            <button type="submit" data-theme="b">Responder</button>
        </form>
        <a href="ranking.php" data-role="button" data-theme="a" data-ajax="false">Ver ranking</a>
        <a href="instancias/logout.php" data-role="button" data-theme="a" data-ajax="false">Salir</a>

    </section>
    <div id="footer"></div>
</body>
<script src="/js/jquery.js"></script>
<script src="/js/popper.js"></script>
<script src="/js/bootstrap.js"></script>
<script>
    $("#header").load("/header.html");
    $("#footer").load("/footer.html");
    //Empuja el elemento #footer al final de la página
    $(document).ready(function() {

        var docHeight = $(window).height();
        var footerHeight = $('#footer').height();
        var footerTop = $('#footer').position().top + footerHeight;

        if (footerTop < docHeight)
            $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    });

</script>

</html>
