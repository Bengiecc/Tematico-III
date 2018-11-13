<?php
require_once '../clases/trivial.class.php';
$trivial = new Trivial();
$correcta = $_POST['correcta'];//cogemos la correcta del formulario
$respuesta = $_POST['respuesta'];//cogemos la respuesta del usuario

//SI LA RESPUESTA ES CORRECTA SUMAMOS 10 PUNTOS Y MOSTRAMOS OTRA DE NUEVO
if($correcta == $respuesta)
{
	$_SESSION['puntos'] += 10;
	$trivial->update_puntuacion($_SESSION['puntos'],$_SESSION['nombre']);
	header("Location: ../old.preguntas_trivial.php");
//SI NO ES CORRECTA MOSTRAMOS QUE NO LO ES Y MOSTRAMOS OTRA NUEVA
}else{
	$_SESSION['puntos'] -= 10;
	$trivial->update_puntuacion($_SESSION['puntos'],$_SESSION['nombre']);
	header("Location: ../old.preguntas_trivial.php");
}
