# Laboratorio Temático III
Este es un proyecto académico desarrollado por alumnos de Lic. en Tecnologías y Sistemas de la Información | UAM Cuajimalpa.


## Objetivos
El objetivo principal de este proyecto es hacer conocer el Reglamento de Transito de la CDMX de forma sencilla y atractiva.

## Secciones del sitio

### Estadísticas
Representa de forma gráfica, estadísticas relevantes sobre accidentes de tránsito y sus causas más frecuentes. Se espera que cuando un usuario revise esta sección, considere la importancia de seguir las normas establecidas.

### Recomendaciones _dialogar en equipo_
Presenta sugerencias hacia un transito seguro para todos.

### Reglamento
Concentra por categorías y en un lenguaje sencillo el contenido principal del Reglamento de Transito de la CDMX

### Chatbot
Permite tener un acceso más rápido al contenido del Reglamento de Tránsito de la CDMX a través de preguntas a un _asistente virtual_. Puede responder las preguntas más comunes, a demás de poder contar chistes entre otras cosas.

### Trivia
Herramienta lúdica que permite al usuario hacer un reconocimiento sobre qué tanto conoce el Reglamento de Transito de la CDMX.

## Sobre el diseño
El diseño está optimizado para versiones de escritorio, así como para dispositivos móviles.



# Para utilizar la página web.
## Carpeta Docs
Esta carpeta contiene archivos como la documentación, mapa de sitio, reglamento de transito y el archivo .sql de la base de datos de la página.

## Instalación del sitio.
Necesitas tener un servidor local instalado en tu computadora.
1.- Copiar en la carpeta de tu servidor los archivos y carpetas que se encuentran dentro de la carpeta "htdocs".
2.- Importar la base de datos del archivo "trivial.sql" que se encuentra en la carpeta "docs".
3.- Para entrar a la pagina, desde un navegador colocar "http://localhost/index.html" (esto puede variar dependiendo de la configuración de tu navegador). El inicio de la página es index.html




#Árbol de archivos

─Tematico-III
    │   .gitignore
    │   404.html
    │   data.txt
    │   README.md
    │
    ├───docs
    │   │   comandoGitHub.txt
    │   │   default_IP_Fija - copia.txt
    │   │   documentación.docx
    │   │   mapa de sitio - ok.pdf
    │   │   mapa de sitio.pdf
    │   │   nuevo_reglamento_transito.pdf
    │   │   trivial.sql
    │   │   ~$cumentación.docx
    │   │   ~WRL2889.tmp
    │   │
    │   └───scss
    │       │   bootstrap-grid.css
    │       │   bootstrap-grid.css.map
    │       │   bootstrap-grid.scss
    │       │   bootstrap-reboot.css
    │       │   bootstrap-reboot.css.map
    │       │   bootstrap-reboot.scss
    │       │   bootstrap.css
    │       │   bootstrap.css.map
    │       │   bootstrap.scss
    │       │   _alert.scss
    │       │   _badge.scss
    │       │   _breadcrumb.scss
    │       │   _button-group.scss
    │       │   _buttons.scss
    │       │   _card.scss
    │       │   _carousel.scss
    │       │   _close.scss
    │       │   _code.scss
    │       │   _custom-forms.scss
    │       │   _dropdown.scss
    │       │   _forms.scss
    │       │   _functions.scss
    │       │   _grid.scss
    │       │   _images.scss
    │       │   _input-group.scss
    │       │   _jumbotron.scss
    │       │   _list-group.scss
    │       │   _media.scss
    │       │   _mixins.scss
    │       │   _modal.scss
    │       │   _nav.scss
    │       │   _navbar.scss
    │       │   _pagination.scss
    │       │   _popover.scss
    │       │   _print.scss
    │       │   _progress.scss
    │       │   _reboot.scss
    │       │   _root.scss
    │       │   _tables.scss
    │       │   _tooltip.scss
    │       │   _transitions.scss
    │       │   _type.scss
    │       │   _utilities.scss
    │       │   _variables.scss
    │       │
    │       ├───mixins
    │       │       _alert.scss
    │       │       _background-variant.scss
    │       │       _badge.scss
    │       │       _border-radius.scss
    │       │       _box-shadow.scss
    │       │       _breakpoints.scss
    │       │       _buttons.scss
    │       │       _caret.scss
    │       │       _clearfix.scss
    │       │       _float.scss
    │       │       _forms.scss
    │       │       _gradients.scss
    │       │       _grid-framework.scss
    │       │       _grid.scss
    │       │       _hover.scss
    │       │       _image.scss
    │       │       _list-group.scss
    │       │       _lists.scss
    │       │       _nav-divider.scss
    │       │       _pagination.scss
    │       │       _reset-text.scss
    │       │       _resize.scss
    │       │       _screen-reader.scss
    │       │       _size.scss
    │       │       _table-row.scss
    │       │       _text-emphasis.scss
    │       │       _text-hide.scss
    │       │       _text-truncate.scss
    │       │       _transition.scss
    │       │       _visibility.scss
    │       │
    │       └───utilities
    │               _align.scss
    │               _background.scss
    │               _borders.scss
    │               _clearfix.scss
    │               _display.scss
    │               _embed.scss
    │               _flex.scss
    │               _float.scss
    │               _position.scss
    │               _screenreaders.scss
    │               _shadows.scss
    │               _sizing.scss
    │               _spacing.scss
    │               _text.scss
    │               _visibility.scss
    │
    └───htdocs
        │   .htaccess
        │   chatbot.html
        │   estadistica.html
        │   index.html
        │   recomendaciones.html
        │   reglamento.html
        │   trivia.html
        │
        ├───css
        │       bootstrap.css
        │       bootstrap.css.map
        │       chatBot.css
        │       GRAFICA.css
        │       old.bootstrap.css
        │       recomendaciones.css
        │
        ├───images
        │   │   automovilista.png
        │   │   back.png
        │   │   bg.png
        │   │   bike.png
        │   │   book.png
        │   │   ciclista.png
        │   │   clock.png
        │   │   favicon.png
        │   │   gamepad-icon.png
        │   │   gear.png
        │   │   lost.png
        │   │   motocicleta.png
        │   │   peaton.png
        │   │   point.png
        │   │   transporteCarga.png
        │   │   transportepublico.png
        │   │   trophy.png
        │   │
        │   └───recomendaciones
        │       ├───auto
        │       │       imgA1-01.jpg
        │       │       imgA1-02.jpg
        │       │       imgA10-01.jpg
        │       │       imgA10-02.jpg
        │       │       imgA2-01.jpg
        │       │       imgA2-02.jpg
        │       │       imgA3-01.jpg
        │       │       imgA3-02.jpg
        │       │       imgA4-01.jpg
        │       │       imgA4-02.jpg
        │       │       imgA5-01.jpg
        │       │       imgA5-02.jpg
        │       │       imgA6-01.jpg
        │       │       imgA6-02.jpg
        │       │       imgA7-01.jpg
        │       │       imgA7-02.jpg
        │       │       imgA8-01.jpg
        │       │       imgA8-02.jpg
        │       │       imgA9-01.jpg
        │       │       imgA9-02.jpg
        │       │
        │       ├───peatones
        │       │       img1-01.jpg
        │       │       img1-02.jpg
        │       │       img10-01.jpg
        │       │       img10-02.jpg
        │       │       img2-01.jpg
        │       │       img2-02.jpg
        │       │       img3-01.jpg
        │       │       img3-02.jpg
        │       │       img4-01.jpg
        │       │       img4-02.jpg
        │       │       img5-01.jpg
        │       │       img5-02.jpg
        │       │       img6-01.jpg
        │       │       img6-02.jpg
        │       │       img7-01.jpg
        │       │       img7-02.jpg
        │       │       img8-01.jpg
        │       │       img8-02.jpg
        │       │       img9-01.jpg
        │       │       img9-02.jpg
        │       │
        │       └───transportePublico
        │               imgT1-01.jpg
        │               imgT1-02.jpg
        │               imgT10-01.jpg
        │               imgT10-02.jpg
        │               imgT2-01.jpg
        │               imgT2-02.jpg
        │               imgT3-01.jpg
        │               imgT3-02.jpg
        │               imgT4-01.jpg
        │               imgT4-02.jpg
        │               imgT5-01.jpg
        │               imgT5-02.jpg
        │               imgT6-01.jpg
        │               imgT6-02.jpg
        │               imgT7-01.jpg
        │               imgT7-02.jpg
        │               imgT8-01.jpg
        │               imgT8-02.jpg
        │               imgT9-01.jpg
        │               imgT9-02.jpg
        │
        ├───js
        │   │   bootstrap.js
        │   │   chatbox.js
        │   │   datos.js
        │   │   jqRedirect.js
        │   │   jquery.js
        │   │   popper.js
        │   │
        │   └───graph
        │           datos.js
        │           graph.js
        │
        ├───resources
        │   │   footer.html
        │   │   header.html
        │   │   trivial.sql
        │   │
        │   └───graph
        │           data.csv
        │           graph.html
        │           graph2.html
        │           graph3.html
        │
        └───trivia
            │   index.html
            │   preguntas_trivial.php
            │   ranking.php
            │
            ├───.test
            │   │   trivial.sql
            │   │
            │   └───.settings
            │           com.aptana.editor.php.prefs
            │
            ├───clases
            │       conexion.class.php
            │       trivial.class.php
            │
            └───instancias
                    login.php
                    logout.php
                    respuestas.php