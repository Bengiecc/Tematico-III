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

<<<<<<< HEAD
    if (lastUserMessage === '¿Como te llamas?' || lastUserMessage == 'Nombre' || lastUserMessage == 'nombre' || lastUserMessage == '¿como te llamas?' ) {
        botMessage = 'Mi nombre es' + botName;
=======
    if (lastUserMessage === '¿Como te llamas?' || lastUserMessage == 'Nombre' || lastUserMessage == 'nombre') {
        botMessage = 'Mi nombre es ' + botName;
>>>>>>> 09c7cf705e884e147b6ebe316a00f0a86671ad7f
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 1?' || lastUserMessage == 'Artículo 1' || lastUserMessage == 'articulo 1' || lastUserMessage == '¿que dice el articulo 1?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }

    
    if (lastUserMessage === '¿Qué dice el artículo 2?' || lastUserMessage == 'Artículo 2' || lastUserMessage == 'articulo 2' || lastUserMessage == '¿que dice el articulo 2?') 
    {        
        botMessage = 'El  presente  reglamento  tiene  por  objeto  regular  la  circulación  de peatones  y vehículos  en  la  vía pública  y  la seguridad vial en la Ciudad de México. Las disposiciones de  este reglamento son aplicables a  peatones,  conductores,  pasajeros  y  propietarios de  cualquier tipo de vehículo  matriculado  en  el  país  o  el  extranjero  y  que  circule  en  el  territorio  dela  Ciudad  de  México.    En  el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las  leyes, reglamentos,  acuerdos,  decretos  y  normatividad  local  vigente,  así  como  las  maniobras  de  ascenso  y descenso  de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad  del  Distrito  Federal,  en  la  Ley  de  Cultura  Cívica  del  Distrito  Federal  y  en  los  p rogramas  ambientales y de seguridad vial.'
        ; 
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 3?' || lastUserMessage == 'Artículo 3' || lastUserMessage == 'articulo 3' || lastUserMessage == '¿que dice el articulo 3?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
    
    if (lastUserMessage === '¿Qué dice el artículo 4?' || lastUserMessage == 'Artículo 4' || lastUserMessage == 'articulo 4' || lastUserMessage == '¿que dice el articulo 4?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
    if (lastUserMessage === '¿Qué dice el artículo 5?' || lastUserMessage == 'Artículo 5' || lastUserMessage == 'articulo 5' || lastUserMessage == '¿que dice el articulo 5?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
    
    if (lastUserMessage === '¿Qué dice el artículo 6?' || lastUserMessage == 'Artículo 6' || lastUserMessage == 'articulo 6' || lastUserMessage == '¿que dice el articulo 6?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
    
    
    
    if (lastUserMessage === '¿Qué dice el artículo 7?' || lastUserMessage == 'Artículo 7' || lastUserMessage == 'articulo 7' || lastUserMessage == '¿que dice el articulo 7?') 
    {        
        botMessage = 'El presente reglamento tiene por objeto regular la circulación de peatones y vehículos en la vía pública y la seguridad vial en la Ciudad de México. Las disposiciones de este reglamento son aplicables a peatones, conductores, pasajeros y propietarios de cualquier tipo de vehículo matriculado en el país o el extranjero y que circule en el territorio dela Ciudad de México. En el presente ordenamiento se establecen las normas respecto a sus movimientos y estacionamiento, en observancia a lo establecido en las leyes, reglamentos, acuerdos, decretos y normatividad local vigente, así como las maniobras de ascenso y descenso de pasajeros o de carga y descarga. De igual forma, determina las condiciones legales y de seguridad a las que se deben ajustar los vehículos y sus conductores para su circulación. En todo lo no previsto en el presente ordenamiento, se aplicará de manera supletoria las disposiciones contenidas en la Ley de Movilidad del Distrito Federal, en la Ley de Cultura Cívica del Distrito Federal y en los programas ambientales y de seguridad vial. V. Todos los usuarios de la vía, que son los enlistados en la fracción anterior, y en especial los conductores de todo tipo de vehículos motorizados, deben responsabilizarse del riesgo que implican para los demás usuarios de la vía, por lo que su conducción se realizará de manera precautoria y respetando las disposiciones del presente Reglamento; y VI. El uso del automóvil particular deberá ser de manera racional, con el objetivo de mejorar las condiciones de salud y protección del ambiente. Estos principios deben ser difundidos por autoridades y promotores voluntarios de forma permanente a través de campañas, programas y cursos. La Secretaría en coordinación con Seguridad Pública, diseñará y llevará a cabo campañas permanentes de cultura de movilidad y seguridad vial que garanticen la concientización y respeto a la seguridad de todos los usuarios de la vía, delmismo modo, se realizarán acciones para inhibir el consumo de alcohol, narcóticos, estupefacientes o psicotrópicos al conducir.'
        ; 
    }
    
    if (lastUserMessage === 'Tengo dudas' || lastUserMessage == 'tengo una duda' || lastUserMessage == 'Tengo una pregunta' || lastUserMessage == 'tengo una pregunta' || lastUserMessage == 'tengo dudas') {
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