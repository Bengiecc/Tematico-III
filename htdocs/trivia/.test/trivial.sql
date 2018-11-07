-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2018 at 10:49 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trivial`
--
CREATE DATABASE IF NOT EXISTS `trivial` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `trivial`;

-- --------------------------------------------------------

--
-- Table structure for table `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `correcta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `correcta`) VALUES
(1, '¿Quién de los siguientes usuarios del espacio vial tienen  de mayor a menor prioridad?', 3),
(2, 'Una vía peatonal es, excepto:', 8),
(3, 'Los peatones deberán seguir estas reglas, excepto:', 9),
(4, 'Los conductores deberán:', 16),
(5, '¿Cuántos puntos de penalización se otorgan a los conductores de no respetar a los peatones?', 18),
(6, 'Con cuantos puntos de penalización por utilizar la bocina innecesariamente es castigado a un conductor.', 23),
(7, '¿Qué distancia debe de haber entre los ciclistas y motociclistas con un conductor de vehículo?', 28),
(8, '¿Qué se debe hacer al llegar a un cruce de ferrocarril?', 32),
(9, 'En vías controladas el limite de velocidad es:', 36),
(10, 'En vías primarias el limite de velocidad es de:', 38),
(11, 'En vías secundarias la velocidad será de:', 43),
(12, 'En zonas de transito calmado la velocidad será de:', 45),
(13, 'En escuelas y hospitales la velocidad máxima será de:', 51),
(14, 'La preferencia de paso en las intersecciones para los conductores será de mayor a menor (1 a 4). Escoge la opción correcta.', 53),
(15, 'Son las reglas fundamentales que debe seguir cualquier tipo de vehículo para convivir en armonía, excepto: ', 60),
(16, '¿Qué reglas pueden seguir los vehículos de emergencia cuando hay un desastre o siniestro ?', 64),
(17, 'Entre las normas que deben cumplir los ciclistas se encuentran todas estas, excepto?', 68),
(18, 'Tienen prohibido los conductores de motocicletas ', 72),
(19, 'Tienen prohibido los conductores de transporte público colectivo de pasajeros :', 76),
(20, 'Los vehículos de transporte de carga deberán seguir las siguientes normas, excepto:', 77),
(21, 'Los vehículos de transporte escolar o de personal deberán, excepto:', 82),
(22, 'Los conductores de vehículos que transporten sustancias toxicas a peligrosas deben cumplir las siguientes normas, excepto:', 88),
(23, 'Esta prohibido estacionarse frente a:', 92);

-- --------------------------------------------------------

--
-- Table structure for table `respuestas`
--

CREATE TABLE `respuestas` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `respuesta` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `respuestas`
--

INSERT INTO `respuestas` (`id`, `id_pregunta`, `respuesta`) VALUES
(1, 1, '1.-Peatones y discapacitados, 2.-Autos y motociclistas, 3.-Usuarios de transporte público, 4.-Prestadores de servicios de distribución de carga y transporte,5.-Ciclista,6.-Prestadores de servicio de transporte publico de pasajeros.'),
(2, 1, '3.-Usuario de transporte público,1.- Peatones y discapacitados, 4.-Prestadores de servicios de distribución de carga y transporte, 5.-Ciclista, 2.-Autos y motociclistas,  6.-Prestadores de servicio de transporte publico de pasajeros.'),
(3, 1, '1.- Peatones y discapacitados, 5.-Ciclista, 3.-Usuario de transporte público, 6.-Prestadores de servicio de transporte publico de pasajeros, 4.-Prestadores de servicios de distribución de carga y transporte, 2.-Autos y motociclistas.'),
(4, 1, '3.-Usuarios de transporte público, 5.-Ciclista, 2.-Autos y motociclistas, 1.-Peatones y discapacitados, 4.-Prestadores de servicios de distribución de carga y transporte, 6.-Prestadores de servicio de transporte publico de pasajeros.'),
(5, 2, 'Aceras y Rampas.'),
(6, 2, 'Plazas y parques.'),
(7, 2, 'Puente peatonal.'),
(8, 2, 'Ciclo carril.'),
(9, 3, 'Podrán cruzar por en medio de la calle.'),
(10, 3, 'Obedecer indicaciones de los promotores de apoyo vial.'),
(11, 3, 'Voltear a ambos lados de la calle y frenar si un auto viene para ceder el paso.'),
(12, 3, 'Usar los puentes peatonales.'),
(13, 4, 'Otorgar el paso a los peatones al dar la vuelta.'),
(14, 4, 'Ceder el paso a los peatones que no alcanzan a cruzar una vía.'),
(15, 4, 'Dar preferencia de paso en las intersecciones con semáforo.'),
(16, 4, 'No dar el paso en cruces sin semáforos o en entradas de estacionamientos.'),
(17, 5, '1 punto'),
(18, 5, '3 puntos  '),
(19, 5, '5 puntos'),
(20, 5, '7 puntos.'),
(21, 6, '10 puntos '),
(22, 6, '5 puntos'),
(23, 6, '1 punto '),
(24, 6, '3 puntos'),
(25, 7, '1 metro '),
(26, 7, '2 metros.'),
(27, 7, '3 metros.'),
(28, 7, '1.50 metros.'),
(29, 8, 'Hacer un alto total a un metro del cruce '),
(30, 8, 'Aumentar la velocidad para pasar.'),
(31, 8, 'Velocidad de 30 km.'),
(32, 8, 'Hacer un alto total 5 ml. Antes del cruce '),
(33, 9, '50 km/h.'),
(34, 9, '60 km/h.'),
(35, 9, '30 km/h.'),
(36, 9, '80 km/h.'),
(37, 10, '30 km.'),
(38, 10, '50 km. '),
(39, 10, '60 km.'),
(40, 10, '80km.'),
(41, 11, '10km/h.'),
(42, 11, '20 km/h. '),
(43, 11, '40 km/h.'),
(44, 11, '80km.'),
(45, 12, '30km/h.'),
(46, 12, '10km/h.'),
(47, 12, '20 km/h.'),
(48, 12, '40 km/h.'),
(49, 13, '5km/h.'),
(50, 13, '10km/h.'),
(51, 13, '20km/h.'),
(52, 13, '30km/h.'),
(53, 14, '3.-Peatones, 2.-Ciclistas, 4.-Vehiculos de emergencia., 1.-Ferrocarril.'),
(54, 14, '1.-Ferrocarril,2.-Ciclistas,3.-Peatones, 4.-Vehiculos de emergencia.'),
(55, 14, '4.-Vehiculos de emergencia, 3.-Peatones, 2.-Ciclistas, 1.-Ferrocarril.'),
(56, 14, '3.-Peatones, 1.-Ferrocarril, 2.-Ciclistas, 4.-Vehiculos de emergencia.'),
(57, 15, 'Detener su vehículo sin invadir los cruces peatonales marcados en el pavimento.'),
(58, 15, 'Detener su vehículo respetando el área de espera para bicicletas.'),
(59, 15, 'Realizar un movimiento diferente  a lo indicado par la señalización vial sobre carriles destinados para dar vuelta a la derecha o izquierda.'),
(60, 15, 'Rebasar a otros vehiculos cuando estos se detengan para dar preferencia a los peatones.'),
(61, 16, 'Desatender la señalización vial.'),
(62, 16, 'Transitar en sentido contrario.'),
(63, 16, 'Exceder los límites de velocidad'),
(64, 16, 'Todas las anteriores'),
(65, 17, 'Pueden seguir de frente si no hay vehículo o peatones a pesar de estar el semáforo en alto.'),
(66, 17, 'Podrán utilizar toda la vía o parte cuando vayan en comitivas organizaciones.'),
(67, 17, 'Tiene prioridad en el uso de vías para ciclistas.'),
(68, 17, 'Al circular en una vía sin infrestructura ciclista no tendrán derecho a ocupar ningún carril.'),
(69, 18, 'Circular por los carriles confinados para transporte publico de pasajeros.'),
(70, 18, 'Circular por vías ciclistas exclusivas. '),
(71, 18, 'Circular sobre aceras y áreas para el uso exclusivo de peatones.'),
(72, 18, 'Adelantar a otro vehículo por el lado derecho.'),
(73, 19, 'Circular por los carriles centrales en las vías de acceso controlado.'),
(74, 19, 'Rebasar a otro vehículo que circule en el carril de contraflujo(solamente que obstruya o vaya mas lento.'),
(75, 19, 'Subir o bajar pasajeros en el segundo o tercer carril de circulación.'),
(76, 19, 'Toda las anteriores.'),
(77, 20, 'Circular en cualquier horario sin restricción.'),
(78, 20, 'Circular por el carril de extrema derecha y usar el izquierdo solo para rebasar o dar la vuelta  a la izquierda.'),
(79, 20, 'Realizar maniobras de carga y descarga en lugares seguros sin afectar o interrumpir el transito vehicular.'),
(80, 20, 'Deberán pagar una multa de 100 a 200 salarios mínimos en caso de incumplir  con el inciso C.'),
(81, 21, 'Subir y bajar pasajeros en el carril de extrema derecha.'),
(82, 21, 'Permitir el ascenso y descenso aun cuando el vehículo este aun en movimiento. '),
(83, 21, 'Poner luces intermitentes en caso de una parada imprevista.'),
(84, 21, 'Circular con luces interiores encendidas en horario nocturno. '),
(85, 22, 'Ir señalizados y balizados siguiendo las normas mexicanas por este tipo de transporte.'),
(86, 22, 'Sujetarse estrictamente a circular horario y rutas que marca la Secretaria de Seguridad Pública.'),
(87, 22, 'Podrán realizar cualquier parada aunque no este señalada en su operación de servicio.'),
(88, 22, 'Podrán solicitar apoyo vial de agentes de transito en caso de congestionamiento vial severo para proseguir su marcha.'),
(89, 23, 'Bancos.'),
(90, 23, 'Hidratantes de bomberos.'),
(91, 23, 'En doble o mas filas.'),
(92, 23, 'Todas las anteriores.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `puntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nombre`, `puntos`) VALUES
(1, 'Israel', 60),
(2, 'Pepe', 10),
(3, 'kerberos', 70),
(4, 'saludos', 10),
(5, 'Melo', 60);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nombre` (`nombre`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
