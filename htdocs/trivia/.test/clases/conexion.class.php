<?php
session_start(); /*define una variable de secion, una variabel que se declara*/
class Conexion /*define una variable conexion*/
{
    private static $instancia;
    private $dbh;
    //establecemos la conexión con la bd 
    public function __construct()
    {
        try {
 
            $this->dbh = new PDO('mysql:host=localhost;dbname=trivial', 'root', '');
            $this->dbh->exec("SET CHARACTER SET utf8"); /*le decimos directamente a la base de datos que trabajaremos con la codificacion utf-8*/
 
        } catch (PDOException $e) { /*Una variable de exeption*/
 
            print "Error!: " . $e->getMessage(); /*recupera el error*/
 
            die();
        }
    }
 
    public function prepare($sql) /*regresa un objeto de sql*/
    {
 
        return $this->dbh->prepare($sql);
 
    }
 
    // Evita que el objeto se pueda clonar
    public function __clone()
    {
 
        trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR);
 
    }
}