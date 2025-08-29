## Proceso de desarrollo

Este proyecto fue desarrollado utilizando Vue.js como framework principal para la construcción de interfaces de usuario reactivas. Se siguió una metodología ágil, comenzando con la definición de los requisitos, diseño de la estructura base y la implementación de las funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar). Durante el desarrollo se emplearon buenas prácticas como el uso de componentes reutilizables, manejo de estado local y validación de formularios.


## Estructura del proyecto
- **public/**: Archivos estáticos y plantilla HTML principal.
- **src/assets/**: Recursos estáticos como imágenes y estilos.
- **src/components/**: Componentes Vue reutilizables.
- **src/pages/**: Paginas principales de la aplicación.
- **App.vue**: Componente raíz.
- **main.js**: Punto de entrada de la aplicación.


## Instrucciones para ejecutar la aplicación

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias ejecutando `npm install`.
3. Instala las librerias vuetify, vue-router, vuex@next y uuid.
4. Para desarrollo, ejecuta `npm run serve` y accede a la URL proporcionada en la terminal.
5. Para producción, ejecuta `npm run build` para compilar los archivos optimizados.
6. Para analizar y corregir problemas de estilo, ejecuta `npm run lint`.


## 🛠️ Proceso de desarrollo
Este proyecto fue construido siguiendo buenas prácticas de arquitectura frontend:

1. **Diseño modular**: cada vista (lista, registro, edición) está separada en su propio componente.
2. **Gestión de estado global**: Vuex se utiliza para almacenar la lista de usuarios y facilitar operaciones CRUD.
3. **Navegación entre páginas**: Vue Router permite transiciones limpias entre vistas.
4. **Validación de formularios**: se implementaron reglas con Vuetify para asegurar que los datos ingresados sean correctos.
5. **Documentación y comentarios**: el código está comentado para facilitar su comprensión y mantenimiento.


## ✅ Funcionalidades
- Visualización de usuarios en un grid responsivo
- Registro de nuevos usuarios con validación de campos
- Edición de usuarios existentes
- Eliminación directa desde la lista
- Navegación entre vistas sin recarga
- Estado centralizado con Vuex


## 👨‍💻 Autor
Marco Uriel Gómez Romero
Desarrollador full-stack con enfoque ético, autodidacta y comprometido con la mejora continua.
📍 Ario de Rosales, México


## 📄 Licencia
Este proyecto está licenciado bajo la GNU General Public License v3.0.
Puedes copiarlo, modificarlo y distribuirlo bajo los términos de esta licencia.
Consulta el texto completo en https://www.gnu.org/licenses/gpl-3.0.html
