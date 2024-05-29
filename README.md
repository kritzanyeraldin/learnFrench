
## Requisitos y Casos de Uso
1. Del usuario

    1. Registro, Examen de clasificación y elección de preferencias
        - **Registro** Este caso permite al usuario crearse una nueva cuenta en la aplicación web.
            > *Flujo Principal:* El usuario abre la aplicación y selecciona la opción "Registrarse". El sistema muestra el formulario de registro. El usuario completa el formulario con su nombre, correo electrónico, y contraseña, y luego selecciona "Enviar". El sistema valida la información ingresada y crea una nueva cuenta de usuario. A continuación, el sistema envía un correo de confirmación al correo electrónico del usuario. El usuario recibe el correo de confirmación y sigue el enlace para activar su cuenta. Finalmente, el sistema confirma la activación de la cuenta, y el usuario puede iniciar sesión en la aplicación con su nueva cuenta.

            > *Flujos alternativos:* (1) Si el usuario ingresa información incorrecta (por ejemplo, un correo electrónico inválido), el sistema muestra un mensaje de error y solicita corregir la información. (2) Si el correo electrónico ya está registrado, el sistema notifica al usuario y le ofrece la opción de recuperar su contraseña.

        - **Examen de clasificación** Este caso permite al usuario tomar un examen de clasificación en caso no quiera empezar desde el nivel más básico.
            > *Flujo Principal* Después de registrarse y activar su cuenta, el usuario inicia sesión en la aplicación. El sistema presenta al usuario la opción de tomar un examen de clasificación para determinar su nivel de francés. Si el usuario decide tomar el examen, selecciona la opción "Tomar Examen de Clasificación". El sistema muestra las instrucciones del examen y, tras leerlas, el usuario inicia el examen. El usuario responde a una serie de preguntas que evalúan su nivel de conocimiento en francés. Al finalizar el examen, el usuario envía sus respuestas. El sistema evalúa las respuestas y determina el nivel adecuado para el usuario. Finalmente, el sistema informa al usuario de su nivel de clasificación y le proporciona acceso al contenido correspondiente a ese nivel.

            >*Flujos alternativos*: (1) Si el usuario decide no tomar el examen de clasificación, selecciona la opción "Saltar Examen". El sistema omite el examen y asigna al usuario el nivel más básico. El usuario recibe acceso al contenido correspondiente al nivel más básico. (2) Si el usuario abandona el examen antes de completarlo, el sistema guarda el progreso y permite al usuario retomarlo más tarde desde donde lo dejó.

        - **Elección de preferencias** Este caso permite al sistema recolectar información del usuario que le permitirá generar un contenido más personalizado.

           >*Flujo Principal* Después de completar el examen de clasificación o de saltarlo, el sistema presenta al usuario una serie de preguntas sobre sus preferencias y objetivos de aprendizaje. El usuario responde a preguntas sobre sus intereses, metas específicas, el contexto en el que planea usar el idioma (como viajes, trabajo, estudios, etc.), y cualquier otra preferencia relevante para personalizar su experiencia. Una vez que el usuario ha completado todas las preguntas, selecciona "Enviar". El sistema almacena las respuestas y ajusta la generación de contenido para ofrecerle contenido y recomendaciones personalizadas basadas en sus respuestas. El usuario puede entonces acceder a contenido adaptado a sus preferencias y objetivos, mejorando así su experiencia de aprendizaje.

           >*Flujo alternativo:* (1) Si el usuario decide no responder a las preguntas sobre sus preferencias, selecciona la opción "Saltar". El sistema omite esta etapa y proporciona una experiencia de aprendizaje estándar sin personalización específica. (2) Si el usuario abandona la serie de preguntas antes de completarlas, el sistema guarda el progreso y permite al usuario retomarlas más tarde desde donde lo dejó.

    2. De las lecciones y contenidos
        - **Lecciones Interactivas:** Este caso permite al usuario tomar una lección interactiva.
            > *Flujo principal:* El usuario debe estar registrado y con la sesión iniciada. El usuario va a la sección "Inicio" y seleccione uno de los temas del capítulo que desee. El usuario seleccionará una de las lecciones de las que se le presenta. El sistema presenta diferentes tipos de preguntas. El usuario responde las preguntas una por una. El sistema indica si el usuario contesta correcta o incorrectamente, y presenta la respuesta correcta en caso el usuario haya errado. El usuario termina las preguntas. El sistema muestra el ratio de preguntas correctas/totales. El usuario puede elegir si volver a intentar o ir a la pantalla anterior.

            > *Flujos alternativos* El usuario intenta seleccionar una lección interactiva a la que aún no tiene acceso. El sistema le notifica que debe completar las lecciones anteriores antes de continuar.

        - **Vocabulario** Este caso permite al usuario revisar una lista de las palabras aprendidas hasta el momento.
            >*Flujo Principal* Después de iniciar sesión en la aplicación, el usuario selecciona la opción "Vocabulario" del menú principal. El sistema presenta al usuario una lista de palabras en francés, organizada alfabéticamente o por categorías, que ha aprendido hasta el momento. A medida que el usuario progresa en las lecciones, el sistema añade automáticamente nuevas palabras al vocabulario. El usuario puede explorar la lista de palabras, que incluye definiciones, ejemplos de uso, y pronunciación. Si el usuario quiere buscar una palabra específica, utiliza la barra de búsqueda. El usuario ingresa la palabra o parte de ella en la barra de búsqueda y el sistema filtra la lista de palabras para mostrar los resultados que coinciden con la búsqueda. El usuario puede seleccionar cualquier palabra de la lista para ver más detalles sobre ella.

            >*Flujo alternativo:* Si el usuario ingresa una palabra en la barra de búsqueda que no está en su vocabulario, el sistema muestra un mensaje indicando que la palabra no se encuentra en la lista actual de vocabulario. El usuario puede optar por buscar otra palabra o revisar la lista completa de nuevo.

        - **Lecciones de gramática** Este caso de uso asegura que los usuarios tengan acceso a recursos gramaticales profundos y detallados que complementen su aprendizaje, permitiéndoles entender y aplicar correctamente las reglas gramaticales del francés.
            >*Flujo Principal:* Después de iniciar sesión en la aplicación, el usuario selecciona la opción "Lecciones de gramática" del menú principal. El sistema presenta al usuario una lista de lecciones de gramática organizadas por temas y niveles de dificultad. El usuario elige una lección de la lista y el sistema muestra una explicación detallada del patrón gramatical seleccionado, incluyendo ejemplos, reglas, y notas adicionales. El usuario puede leer y estudiar la lección a su propio ritmo. Si el usuario quiere revisar otra lección, regresa a la lista de lecciones y selecciona una nueva. El sistema permite al usuario acceder a estas lecciones en cualquier momento para revisar y reforzar su comprensión de los patrones gramaticales.

            >*Flujos alternativos:* (1) Si el usuario no encuentra la lección de gramática que está buscando, puede utilizar una barra de búsqueda para filtrar las lecciones por palabras clave o temas específicos. El usuario ingresa el término de búsqueda en la barra y el sistema muestra las lecciones que coinciden con los criterios ingresados. (2) Si el usuario abandona una lección de gramática sin terminar de leerla, el sistema guarda su progreso, permitiéndole retomar la lección desde el punto donde la dejó en cualquier momento.

    3. Evaluaciones y monitoreo del progreso
        - **Consultar Progreso:**
            > El usuario selecciona la opción "Ajustes" en el menú principal. Dentro de ajustes, el usuario selecciona la opción "Estadísticas de Progreso". El sistema muestra un panel de control que incluye gráficos y estadísticas sobre el rendimiento del usuario, como puntuaciones de evaluaciones, palabras aprendidas, y tiempo dedicado al estudio. El usuario puede filtrar la información por fechas, temas, y niveles. El sistema también proporciona recomendaciones basadas en el progreso del usuario.
            
            > (1) Si el usuario quiere ver detalles específicos, puede seleccionar una métrica (por ejemplo, una evaluación específica) para obtener un análisis más detallado. (2) Si el usuario detecta algún error en los datos mostrados, puede reportarlo utilizando una opción de "Reportar problema".

2. Del administrador

    Estos casos de uso permiten al administrador configurar y gestionar eficazmente el contenido generado por la LLM, asegurando su calidad y relevancia para los usuarios finales.

    - **Configuración de Parámetros de Contenido:** 
        > *Flujo principal:* El administrador inicia sesión en el panel de administración y accede a la interfaz de configuración de parámetros del contenido. En esta interfaz, el administrador puede definir los parámetros globales para la estructura del contenido generado por la LLM, como la cantidad de niveles, subniveles y capítulos. Después de ajustar los valores según sea necesario, el administrador guarda la configuración y el sistema aplica los cambios al contenido generado.

    - **Definición de Parámetros para Preguntas de Lecciones Interactivas:**
        > *Flujo principal:* El administrador accede al panel de administración y selecciona la opción "Configuración de Preguntas". Aquí, el administrador puede configurar los parámetros para las preguntas utilizadas en las lecciones interactivas, como la dificultad, el tipo de pregunta y la distribución de temas. Después de ajustar los parámetros, el administrador guarda la configuración y el sistema aplica los cambios a las preguntas utilizadas en las lecciones.

    - **Revisión de Contenido Generado por la LLM:**
        > *Flujo principal:* El administrador accede al panel de administración y selecciona la opción "Revisión de Contenido". Aquí, el administrador puede revisar y aprobar el contenido generado por la LLM antes de su publicación. Revisa cada elemento del contenido, asegurándose de que cumple con los estándares de calidad y los requisitos establecidos. Una vez revisado, el administrador puede aprobar el contenido para su publicación o solicitar modificaciones si es necesario. Una vez aprobado, el contenido es publicado y se hace disponible para los usuarios.


## Especificaciones de Usabilidad
1. Respecto a la interfaz de usuario
    - La interfaz debe ser intuitiva de navegar, con íconos y un layout que la hagan fácil de entender.
    - Diseño responsivo: La web se debe renderizar correctamente en dispositivos de diferentes tamaños.

2. Experiencia de usuario
    - El tiempo de carga de al generación de contenido inicial no debe ser mayor 1 minuto.
    - Los tiempos de carga de la generación de contenido(conversaciones de práctica o textos para leer) no deberían ser mayor a 10 segundos.
    - En caso ocurra algún error durante la generación de contenido que provoque un reinicio de este, el usuario será notificado.
    - Los tiempos de carga al navegar por la web deben ser casi instantáneos.

3. Interacción y Contenidos
    - Feedback en las lecciones interactivas: Al usuario se le muestra la respuesta correcta luego de cometer un error. Además, al terminar la lección se le indica el ratio de preguntas correctas que tiene, y cuanto le falta para pasar/perfeccionar la lección.
    - Contenido relevante y personalizado para el usuario. El contenido generado toma en cuenta las preferencias y/o necesidades del usuario.