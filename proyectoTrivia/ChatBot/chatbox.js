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
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial.'
        ; 
    }
    
     if (lastUserMessage === '¿Qué dice el artículo 2?' || lastUserMessage == 'Artículo 2' || lastUserMessage == 'articulo 2' || lastUserMessage == '¿que dice el articulo 2?') 
    {        
        botMessage = 'La aplicación de este reglamento estará basada en los siguientes principios rectores:                             I.- La circulación en condiciones de seguridad vial es un derecho, por lo que todas las autoridades en el ámbito de su competencia deben adoptar medidas para garantizar la protección de la vida e integridad física de las personas, sobre todo de los usuarios vulnerables de la vía;                    II. La circulación en la vía pública debe efectuarse con cortesía, por lo que los ciudadanos deben observar un trato respetuoso hacia el resto de los usuarios de la vía, así como a los agentes y personal de apoyo vial; III. Se evitará la colocación de objetos que representen un obstáculo a la circulación de vehículos y tránsito de peatones; IV. Se dará prioridad en la utilización del espacio vial de acuerdo a la siguiente jerarquía: a) Peatones; en especial personas con discapacidad y movilidad limitada b) Ciclistas; c) Usuarios del servicio de transporte público de pasajeros; d) Prestadores del servicio de transporte público de pasajeros; e) Prestadores del servicio de transporte de carga y distribución de mercancías; yf) Usuarios de transporte particular automotor y motociclistas. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, del mismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
    
     if (lastUserMessage === '¿Qué dice el artículo 3?' || lastUserMessage == 'Artículo 3' || lastUserMessage == 'articulo 3' || lastUserMessage == '¿que dice el articulo 3?') 
    {        
        botMessage = 'En el ámbito de sus atribuciones, son autoridades competentes para la aplicación del presente reglamento la Secretaría, Seguridad Pública y los Jueces Cívicos.'
        ; 
    }
    f (lastUserMessage === '¿Qué dice el artículo 4?' || lastUserMessage == 'Artículo 4' || lastUserMessage == 'articulo 4' || lastUserMessage == '¿que dice el articulo 4?') 
    {        
        botMessage = 'Además de lo que señala la Ley y sus reglamentos, para los efectos de este Reglamento, se entiende por: I. Agente, elemento de la Policía del Distrito Federal con funciones para el control de tránsito; II. Amonestación verbal, acto por el cual el agente advierte a los peatones, conductores y pasajeros de un vehículo sobre el incumplimiento cometido a las disposiciones de este reglamento y tiene como propósito orientarlos a conducirse de conformidad con lo establecido en el mismo y prevenir la realización de otras conductas similares; III. Área de espera para bicicletas y motocicletas, zona marcada sobre el pavimento en una intersección de vías que tengan semáforos, que permite a los conductores de estos vehículos aguardar la luz verde del semáforo en una posición adelantada, de tal forma que sean visibles a los conductores del resto de los vehículos; IV. Ayudas técnicas, dispositivos tecnológicos y materiales que permiten habilitar, rehabilitar o compensar una o más limitaciones funcionales, motrices, sensoriales o intelectuales de las Personas con Discapacidad. V. Bicicleta, Vehículo no motorizado de propulsión humana a través de pedales; VI. Boleta, documento en donde se hace constar la infracción y la sanción correspondiente; VII. Carril, espacio asignado para la circulación de vehículos, ubicado sobre la superficie de rodadura y delimitado por líneas continuas o discontinuas, el cual debe contar con el ancho suficiente para la circulación de vehículos en una fila; VIII. Carril confinado, superficie de rodadura con dispositivos de delimitación en su perímetro para el uso preferente o exclusivo de servicios de transporte, así como de cierto tipo de vehículos; IX. Ciclista, conductor de un vehículo de tracción humana a través de pedales; se considera también ciclista a aquellos que conducen bicicletas asistidas por motores eléctricos, siempre y cuando ésta desarrolle velocidades de hasta 25 kilómetros por hora; los menores de doce años a bordo de un vehículo no motorizado serán considerados peatones; X. Circulación, desplazamiento por la vía pública de peatones, conductores y ocupantes de vehículos. XI. Conductor, toda persona que maneje un vehículo en cualquiera de sus modalidades; XII. Cruce peatonal, área sobre el arroyo vehicular asignada para el tránsito de peatones, puede estar a nivel de la acera o superficie de rodadura;'
        ; 
    }
    
    f (lastUserMessage === '¿Qué dice el artículo 5?' || lastUserMessage == 'Artículo 5' || lastUserMessage == 'articulo 5' || lastUserMessage == '¿que dice el articulo ?') 
    {        
        botMessage = 'En el ámbito de sus atribuciones, son autoridades competentes para la aplicación del presente reglamento la Secretaría, Seguridad Pública y los Jueces Cívicos.'
        ; 
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