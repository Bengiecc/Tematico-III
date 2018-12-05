<?php
require_once 'clases/trivial.class.php';
$trivial = new Trivial();
//obtnemos el ranking
$ranking = $trivial->ranking();
?>
<!DOCTYPE html> 
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<title>DUMCB | Ranking</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="icon" type="image/png" href="/images/favicon.png"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <div id="header"></div>

    <div class="container mx-auto py-3 align-middle">
        <a href="#" class="text-left float-left pt-3"><img src="/images/back.png" width="50%"></a>
        <div class="text-center">
            <h1 class="text-center display-4">Tabla de Resultados</h1>
        </div>
    </div>

	<div class="container mx-auto">
		<ul class="table-dark w-50 mx-auto" style="list-style-type: none;">
			<?php 
			$i = 1;
			foreach($ranking as $rank)
			{
			?>
			<li class="py-3 px-2"><?php echo $i ?>.&nbsp;&nbsp;<?php echo $rank['nombre']?><span style="float: right"><?php echo $rank['puntos']?> puntos</span></li>
			<?php
			$i++;
			}
			?>
		</ul>

	</div>
	<div id="footer"></div>
</body>
<script src="/js/jquery.js"></script>
<script src="/js/popper.js"></script>
<script src="/js/bootstrap.js"></script>
    <script>
    $("#header").load("/resources/header.html");
    $("#footer").load("/resources/footer.html");
        $(document).ready(function() {

        var docHeight = $(window).height();
        var footerHeight = $('#footer').height();
        var footerTop = $('#footer').position().top + footerHeight;

        if (footerTop < docHeight)
            $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    });
    </script>
</html>

