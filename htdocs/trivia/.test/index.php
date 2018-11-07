<!DOCTYPE html>
<html>

<head>
    <title>Index</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/bootstrap.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
        <div class="row">
            <div class="col-12 row">
                <div class="text-left col-lg-4 col-md-8 col-12">
                    <form method="post" id="form" action="instancias/login.php">
                        <div class="py-3">
                            <label for="email">Nombre</label>
                            <input type="text" name="nombre" id="nombre" class="form-control" required>
                        </div>
                        <input type="submit" class="btn btn-info" value="¡Comencemos!">
                    </form>
                </div>
            </div>
        </div>
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
