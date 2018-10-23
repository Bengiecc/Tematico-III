$('.header').load('/header.html');
    $('.footer').load('/footer.html');
    $(document).ready(function() {
        var docHeight = $(window).height();
        var footerHeight = $('#footer').height();
        var footerTop = $('#footer').position().top + footerHeight;
        if (footerTop < docHeight)
            $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    });

var messages = [], // array que contiene el registro de cada cadena en el chat
    lastUserMessage = "", // realiza un seguimiento de la cadena de entrada más reciente del usuario
    botMessage = "", // var hace un seguimiento de lo que va a decir el chatbot
    botName = 'Alfred', //Nombre del chatbot
    talking = true; // cuando es falso la función de voz no funciona
//****************************************************************
//****************************************************************
//Respuestas chatbot
function chatbotResponse() {
    talking = true;
    botMessage = "No comprendo"; //Mensaje predefinido

    if (lastUserMessage === 'hola' || lastUserMessage == 'Hola' || lastUserMessage == 'holi' || lastUserMessage == 'ola') {
        const hi = ['Hola', '¿Que paso?', 'Que tal!', '¡Hola!']
        botMessage = hi[Math.floor(Math.random() * (hi.length))];;
    }

    if (lastUserMessage === '¿Como te llamas?' || lastUserMessage == 'Nombre' || lastUserMessage == 'nombre' || lastUserMessage == '¿como te llamas?' )
        {
        botMessage = 'Mi nombre es' + botName;
        }
    
    if (lastUserMessage === '¿Qué dice el artículo 1?' || lastUserMessage == 'Artículo 1' || lastUserMessage == 'articulo 1' || lastUserMessage == '¿que dice el articulo 1?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
     if (lastUserMessage === '¿Qué dice el artículo 2?' || lastUserMessage == 'Artículo 2' || lastUserMessage == 'articulo 2' || lastUserMessage == '¿que dice el articulo 2?') 
    {        
        botMessage = 'El  presente  reglamento  tiene  por  objeto  regular  la  circulación  de peatones  y vehículos  en  la  vía  pública  y  la seguridad vial en la Ciudad de México. Las disposiciones de  este reglamento son aplicables a  peatones,  conductores,  pasajeros  y  propietarios de  cualquier tipo de vehículo  matriculado  en  el  país  o  el  extranjero  y  que  circule  en  el  territorio  dela  Ciudad  de  México. En el  presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las  leyes,  reglamentos,  acuerdos,  decretos  y  normatividad  local  vigente,  así  como  las  maniobras  de  ascenso  y  descenso  de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de  Movilidad  del  Distrito  Federal,  en  la  Ley  de  Cultura  Cívica  del  Distrito  Federal  y  en  los  programas  ambientales  y  de seguridad vial.'
        ; 
    }
    
    
     if (lastUserMessage === '¿Qué dice el artículo 3?' || lastUserMessage == 'Artículo 3' || lastUserMessage == 'articulo 3' || lastUserMessage == '¿que dice el articulo 3?') 
    {        
        botMessage = 'vehículos  motorizados,  deben  responsabilizarse  del  riesgo  que  implican  para  los  demás  usuarios  de  la  vía,  por  lo  que  su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI.  El  uso  del  automóvil  particular  deberá  ser  de  manera  racional,  con  el  objetivo  de  mejorar  las  condiciones  de  salud  y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La  Secretaría  en  coordinación  con  Seguridad  Pública,  diseñará  y  llevará  a  cabo  campañas  permanentes  de  cultura  de movilidad  y  seguridad  vial  que  garanticen  la  concientización  y  respeto  a  la  seguridad  de  todos  los  usuarios  de  la  vía,  del mismo modo,  se  realizarán  acciones  para  inhibir  el  consumo  de  alcohol,  narcóticos,  estupefacientes  o  psicotrópicos    al conducir.'
        ; 
    }
    
    
    
    
    
      if (lastUserMessage === '¿Qué dice el artículo 6?' || lastUserMessage == 'Artículo 6' || lastUserMessage == 'articulo 6' || lastUserMessage == '¿que dice el articulo 6?') 
    {        
        botMessage = '- Para garantizar la seguridad de los peatones, los conductores de vehículos están obligados a otorgar: I. Preferencia de paso en las intersecciones controladas por semáforos, cuando: a) La luz verde les otorgue el paso a los peatones; b) Habiéndoles correspondido el paso de acuerdo con el ciclo del semáforo, no alcancen a cruzar completamente la vía; y c) Los vehículos vayan a dar vuelta para incorporarse a otra vía y haya peatones cruzando ésta. II. Preferencia de paso en las intersecciones que no cuenten con semáforos, siempre tendrán preferencia sobre el tránsito vehicular, independientemente de las reglas establecidas en el artículo 10; cuando haya peatones esperando pasar, los conductores deberán parar y cederles el paso; III. Prioridad de uso del arroyo vehicular, cuando: a) No existan aceras en la vía; en caso de existir acotamiento o vías ciclistas, los peatones podrán circular del lado derecho de éstas; a falta de estas opciones transitarán por el extremo de la vía y en sentido contrario al flujo vehicular; b) Las aceras estén impedidas para el libre tránsito peatonal por consecuencia de obras públicas o privadas, eventos que interfieran de forma temporal la circulación o cuando el flujo de peatones supere la capacidad de la acera; la autoridad se asegurará de la implementación de espacios seguros para los transeúntes; mismas que estarán delimitadas, confinadas y señalizadas, conforme a la legislación aplicable y por parte de quien genere las anomalías en la vía; c) Transiten en comitivas organizadas,procesiones o filas escolares, debiendo circular en el sentido de la vía; d) Remolquen algún objeto que impida la libre circulación de los demás peatones sobre la acera, debiendo circular en el primer carril y en el sentido de la vía; en caso que transiten en ciclovías y carriles preferenciales ciclistas deberán hacerlo pegado a la acera y en el sentido de la circulación ciclista; e) Se utilicen vehículos recreativos o ayudas técnicas, debiendo transitar por el primer carril de circulación de la vía; en estos casos, también se podrá hacer uso del acotamiento y vías ciclistas. IV. Preferencia de paso cuando transiten por la acera y algún conductor deba cruzarla para entrar o salir de un predio o estacionamiento; y V. Prioridad de uso en las calles de prioridad peatonal, dónde los peatones podrán circular en todo lo ancho de la vía y en cualquier sentido. El conductor de un vehículo no motorizado que no respete la preferencia de paso y/o la prioridad de uso de los peatones de acuerdo a lo dispuesto en este artículo será amonestado y/o apercibido verbalmente por los agentes y orientado a conducirse de conformidad a las disposiciones aplicables.'; 
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 7?' || lastUserMessage == 'Artículo 7' || lastUserMessage == 'articulo 7' || lastUserMessage == '¿que dice el articulo 7?') 
    {        
        botMessage = 'En todo momento los conductores o pasajeros de vehículos deben contribuir a generar un ambiente de sana convivencia entre todos los usuarios de la vía; por lo que deben obedecer la señalización vial, las indicaciones de los agentes, del personal de apoyo vial o promotores voluntarios; y deben abstenerse de: I. Insultar, denigrar o golpear al personal que desempeña labores de agilización del tránsito y aplicación de las sanciones establecidas en este Reglamento; II. Proferir vejaciones mediante utilización de señales visuales, audibles o de cualquier otro accesorio adherido al vehículo; golpear o realizar maniobras con el vehículo con objeto de intimidar o maltratar físicamente a otro usuario de la vía; y III. Utilizar la bocina (claxon) para un fin diferente al de evitar un hecho de tránsito, especialmente en condiciones de congestión vehicular, así como provocar ruido excesivo con el motor'; 
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 8?' || lastUserMessage == 'Artículo 8' || lastUserMessage == 'articulo 8' || lastUserMessage == '¿que dice el articulo 8?') 
    {        
        botMessage = 'Los conductores de todo tipo de vehículos deben: I. Obedecer las indicaciones de los agentes, personal de apoyo vial, promotores voluntarios, así como respetar la señalización vial de acuerdo a lo estipulado en el anexo de los dispositivos para el control del tránsito del presente reglamento; II. Tomar las máximas precauciones a su alcance cuando existan peatones sobre el arroyo vehicular, reducir la velocidad o parar para permitir el paso a peatones, especialmente en zonas escolares o en calles de prioridad peatonal; III. Compartir los carriles de circulación de manera responsable con los demás vehículos, por lo que se debe cambiar de carriles de forma escalonada y tomar el carril extremo correspondiente anticipadamente cuando se pretenda dar vuelta, considerando lo especificado en la fracción VIII del este artículo; IV. Circular en el sentido que indique la vía; tratándose de vías reversibles, respetar los tramos y horarios que determine la autoridad competente y en caso de tratarse de vías de doble sentido, circular en el costado derecho de la vía, evitando deslumbrar a los conductores del sentido contrario; V. Rebasar otro vehículo sólo por el lado izquierdo; en el caso de vehículos motorizados que adelanten a ciclistas o motociclistas deben otorgar al menos la distancia de 1.50 metros de separación lateral; VI. Alinearse a la derecha y reducir la velocidad cuando otro vehículo intente adelantarlo; VII. Conservar respecto al vehículo que le preceda, una distancia razonable que garantice la detención oportuna en caso de que éste frene intempestivamente; VIII. Indicar la dirección de su giro o cambio de carril, mediante luces direccionales, en caso de vehículos no motorizados,podrá indicarse mediante señas; IX. Reducir la velocidad para conservar una distancia prudente y permitir el movimiento, cuando otro vehículo pretenda incorporarse a su carril y éste lo ha indicado con las luces direccionales; X. Dar prioridad a los vehículos de emergencia que circulen con las señales luminosas y audibles encendidas, debiendo disminuir la velocidad para despejar el camino y procurar alinearse hacia la derecha; XI. Disminuir su velocidad y tomar todas las precauciones necesarias cuando encuentren un vehículo de transporte escolar realizando maniobras de ascenso y descenso de escolares; XII. Cuando transiten en zonas escolares: a) Disminuir su velocidad y extremar precauciones, respetando la señalización vial y dispositivos para el control del tránsito correspondientes que indican la velocidad máxima permitida y cruce de peatones; b) Parar y ceder el paso a los escolares; y c) Obedecer las indicaciones de los agentes o de los promotores voluntarios. XIII. Cuando transiten por intersecciones con vías férreas: a) Disminuir la velocidad del vehículo a treinta kilómetros por hora, a una distancia de cincuenta metros antes de cruzar vías férreas; y b) Realizar alto a una distancia de cinco metros antes de las vías y mantenerse en esa forma si el ferrocarril se encuentra a una distancia menor a doscientos metros en dirección al crucero. XIV. Ascender o descender del vehículo sobre el carril contiguo a la acera. En caso de que tenga que hacerlo del lado izquierdo extremará precauciones al abrir o cerrar las portezuelas, sin sobrepasar las rayas de división de carril de manera que no haga un corte de circulación. Los conductores de vehículos no motorizados que no cumplan con las obligaciones estipuladas en el presente artículo, de acuerdo a la naturaleza de su vehículo, serán amonestados verbalmente por los agentes y orientados a conducirse de conformidad con lo establecido por las disposiciones aplicables'; 
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 9?' || lastUserMessage == 'Artículo 9' || lastUserMessage == 'articulo 9' || lastUserMessage == '¿que dice el articulo 9?') 
    {        
        botMessage = 'Los conductores de vehículos deberán respetar los límites de velocidad establecidos en la señalización vial. A falta de señalamiento restrictivo específico, los límites de velocidad se establecerán de acuerdo a lo siguiente: I. En los carriles centrales de las vías de acceso controlado la velocidad máxima será de 80 kilómetros por hora; II. En vías primarias la velocidad máxima será de 50 kilómetros por hora; III. En vías secundarias incluyendo las laterales de vías de acceso controlado, la velocidad máxima será de 40 kilómetros por hora; IV. En zonas de tránsito calmado la velocidad será de 30 kilómetros por hora; V. En zonas escolares, de hospitales, de asilos, de albergues y casas hogar, la velocidad máxima será de 20 kilómetros por hora; y VI. En estacionamientos y en vías peatonales en las cuales se permita el acceso a vehículos la velocidad máxima será de 10 kilómetros por hora. Los conductores de vehículos no motorizados que no cumplan con las obligaciones estipuladas en el presente artículo, serán amonestados verbalmente por los agentes y orientados a conducirse de conformidad con lo establecido por las disposiciones aplicables.'; 
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 10?' || lastUserMessage == 'Artículo 10' || lastUserMessage == 'articulo 10' || lastUserMessage == '¿que dice el articulo 10?') 
    {        
        botMessage = 'Para las preferencias de paso en las intersecciones, el conductor se ajustará al señalamiento restrictivo y a las siguientes reglas: I. Los peatones tendrán preferencia de paso sobre los vehículos de acuerdo a lo establecido en el artículo 6; II. Los vehículos no motorizados tendrán preferencia sobre los vehículos motorizados de acuerdo a las reglas establecidas en el artículo 15; III. Los vehículos de emergencia tienen preferencia de paso sobre los demás vehículos cuando circulen con las señales luminosas o audibles en funcionamiento; IV. El ferrocarril, el tren ligero y vehículos de transporte público que circulen en carriles exclusivos confinados o en contraflujo tienen preferencia de paso; V. En las intersecciones reguladas por un agente, personal de apoyo vial o promotores voluntarios, los conductores deben seguir las indicaciones de éstos, independientemente de las reglas de preferencia o de lo indicado por los dispositivos para el control del tránsito; VI. En las intersecciones reguladas mediante semáforos se respetarán las siguientes reglas: a) Cuando la luz del semáforo esté en rojo, los conductores deben detener su vehículo en la línea de “alto”, sin invadir el cruce peatonal o el área de espera para bicicletas o motocicletas; los ciclistas y motociclistas deberán hacer uso de sus áreas de espera cuando éstas existan; b) Cuando exista congestión vehicular que impida cruzar completamente la intersección y aunque la luz del semáforo indique siga, se deberá parar en la línea de alto para evitar obstruir la circulación de las calles transversales, principalmente en aquellas que cuenten con marca en el pavimento para indicar la prohibición de detención dentro de la intersección; c) Cuando los semáforos se encuentren con luces intermitentes se cruzará con precaución disminuyendo la velocidad; tiene preferencia de paso el conductor que transite por la vía cuyo semáforo esté destellando en color ámbar, sobre el conductor que transite en una vía cuyo semáforo esté destellando en color rojo, quien deberá hacer alto total y después cruzar con precaución; y d) Entre las 23:00 horas y las 5:00 horas del día siguiente, debe detener totalmente el vehículo frente a la luz roja del semáforo y, una vez que se cerciore de que ningún peatón o vehículo se dispone a cruzar la intersección, podrá continuar la marcha, aun cuando no haya cambiado la señal de alto. VII. En vías de acceso controlado, los vehículos que se incorporan a los carriles centrales deberán ceder el paso; los vehículos que circulan sobre la vía lateral, deberán ceder el paso a los que se desincorporan de los carriles centrales, con excepción de situaciones de congestionamiento vial con tránsito detenido, en las que se alternará el paso bajo el criterio de “uno y uno”; VIII. Cuando los conductores circulen por una vía que no cuente con semáforos o se encuentren apagados y no haya señalamiento restrictivo que regule la preferencia de paso, luego de dejar pasar a los peatones, se ajustarán a la siguiente jerarquía de reglas: a) El que circule por una vía primaria tiene preferencia de paso sobre el que pretenda acceder a ella; b) Tienen la preferencia los vehículos que circulen sobre la vía con mayor amplitud o mayor volumen de tránsito; c) En vías de la misma jerarquía, tiene la preferencia el vehículo que circule en una calle o vía de doble sentido sobre aquel que circule en una vía de un solo sentido; d) En vías secundarias de un sólo sentido y con el mismo número de carriles, cuando dos vehículos se encuentren en una intersección, se le cederá el paso al vehículo que se aproxime por su derecha; y e) Cuando en el cruce de dos vías secundarias con un sólo carril efectivo de circulación, se aproximen de forma simultánea vehículos en las diferentes vías, ambos deben realizar alto total y cruzar con precaución, alternándose el paso bajo el criterio de “uno y uno”. IX. En las glorietas, el vehículo que se encuentre dentro de la misma tiene preferencia de paso sobre el que pretenda acceder a ella; en aquellas glorietas de varios carriles tienen preferencia aquellos vehículos que realicen movimiento para salir de ella; X. La vuelta continua, a la derecha y a la izquierda, está prohibida, excepto cuando exista un señalamiento que expresamente lo permita, en cuyo caso deberá cederse el paso a los peatones que estén cruzando y a los vehículos que transiten por la vía a la que se pretende incorporar; XI. En vías en las que exista reducción de carriles, tendrá preferencia el conductor del vehículo que circula sobre el carril que se conserva; en caso de congestión vial, todos los vehículos deberán guardar el orden de paso sin adelantase a otros vehículos que les precedan e intercalarse uno a uno; y XII. En vías con pendientes donde no sea posible el paso simultáneo de dos vehículos, tiene preferencia de paso el conductor del vehículo que va en sentido ascendente. Los conductores de vehículos no motorizados que no cumplan con las obligaciones estipuladas en el presente artículo serán amonestados verbalmente por los agentes y orientados a conducirse de conformidad con lo establecido por las disposiciones aplicables.'; 
    }
    
    if (lastUserMessage === 'Tengo dudas' || lastUserMessage == 'tengo una duda' || lastUserMessage == 'Tengo una pregunta' || lastUserMessage == 'tengo una pregunta' || lastUserMessage == 'tengo duda') {
        botMessage = 'Dime en que te puedo ayudar';
    }
}


// esto se ejecuta cada vez que se presiona enter.
// Controla la entrada y salida general.
function newEntry() {
    // si el mensaje del usuario no está vacío, ejecute
    if (document.getElementById("chatbox").value != "") {
        // extrae el valor del cuadro de chat y lo establece en el último mensaje de usuario
        lastUserMessage = document.getElementById("chatbox").value;
        // establece el cuadro de chat para ser claro
        document.getElementById("chatbox").value = "";
        // agrega el valor del chatbox a los mensajes de la matriz
        messages.push(lastUserMessage);
        // Speech (lastUserMessage); // dice lo que el usuario tecleó en voz alta
         // establece la variable botMessage en respuesta a lastUserMessage
        chatbotResponse();
        // agrega el nombre y el mensaje del chatbot a los mensajes de la matriz
        messages.push("<b>" + botName + ":</b> " + botMessage);
        // dice el mensaje usando la función de texto a voz escrita abajo
        Speech(botMessage);
        // envía los últimos elementos de la matriz de mensajes a html
        for (var i = 1; i < 11; i++) {
            if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        }
    }
}

//texto a voz
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
    if ('speechSynthesis' in window && talking) {
        var utterance = new SpeechSynthesisUtterance(say);
        //msg.voice = voices[10]; // Nota: algunas voces no admiten la modificación de parámetros
        //msg.voiceURI = 'native';
        //utterance.volume = 1; // 0 to 1
        //utterance.rate = 0.1; // 0.1 to 10
        //utterance.pitch = 1; //0 to 2
        //utterance.text = 'Hello World';
        //utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

// ejecuta la función de pulsación de tecla () cuando se presiona una tecla
document.onkeypress = keyPress;
// si la tecla presionada es 'enter' ejecuta la función newEntry ()
function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
        // ejecuta esta función cuando se presiona enter
        newEntry();
    }
    if (key == 38) {
        console.log('hi')
        //document.getElementById("chatbox").value = lastUserMessage;
    }
}

// borra el texto del marcador de posición en el cuadro de chat
// esta función está configurada para ejecutarse cuando los usuarios enfocan el cuadro de chat, haciendo clic en ella
function placeHolder() {
    document.getElementById("chatbox").placeholder = "";
}