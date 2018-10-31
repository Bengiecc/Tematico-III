<!DOCTYPE html>
<html>

<head>
    <title>Index</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/bootstrap.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript">
        //VALIDAMOS SI HAN INTRODUCIDO UN NOMBRE EN EL FORMULARIO DE INICIO-->
        $(document).ready(function() {
            $("#form").live('submit', function() {
                if ($("#nombre").val() == "") {
                    alert("Introduce tu nombre");
                    return false;
                } else {
                    $("#form").submit();
                }
            })
        });

    </script>
</head>

<body>
    
    <div id="header"></div>
    
    <section class="container pt-3 pt-lg-5">
        <div class="row">
            <div class="col-lg-8">
                <h1 class="display-4 text-left">Trivia</h1>
                <h5 class="font-weight-light text-left">¡Ingresa un nombre de jugador!</h5>
            </div>
        </div>
    </section>
    
        <div data-role="header" data-position="fixed">
            <h1>Trivial</h1>
        </div>
        <div data-role="content">
            <!--AL PULSAR APARECE UN DIALOG PARA EMPEZAR A JUGAR-->
            <a href="dialog.php" data-role="button" data-rel="dialog" data-transition="slidedown" data-theme="b">Empezar a jugar</a>
        </div>
        <div data-role="footer" data-position="fixed">
            <h6>Juega al trivial</h6>
        </div>
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

        if (footerTop < docHeight) $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    });

</script>
</html>
