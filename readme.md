# Proyecto de Personajes de Anime

Este repositorio contiene la parte front-end de un proyecto de personajes de anime desarrollado con React y Redux. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre los personajes de anime. Las responsabilidades del repositorio están divididas en dos partes principales:

## Estado (Redux Slice y Thunks)
En esta parte del proyecto, gestionamos el estado de la aplicación utilizando Redux. Hemos dividido las responsabilidades de estado en un slice de Redux y thunks para interactuar con el servidor.

### slices: 
Aquí se encuentra el slice de Redux que define el estado de la aplicación, así como las acciones y los reductores asociados.

### thunks:
En esta carpeta, encontrarás los thunks que manejan las operaciones asíncronas, como la obtención de datos del servidor, la creación, 
actualización y eliminación de personajes de anime.

## Funcionalidad (Hook)
La funcionalidad de la aplicación se encuentra en la carpeta src/hook Aquí implementamos los componentes funcionales y los hooks de React para interactuar con el estado de Redux y mostrar la información en la interfaz de usuario.

## Estructura de Carpetas

src/components:  Aquí encontrarás los componentes de React que representan las diferentes vistas de la aplicación, como la lista de personajes y los formularios de edición/creación.

src/hook: En esta carpeta, implementamos hooks personalizados para acceder al estado de Redux y realizar acciones como la obtención de datos y la gestión de formularios.

src/model: Esta carpeta contiene los archivos de tipos, en este caso con la entidad correspondiente a los personajes de anime.

src/redux: Esta carpeta contiene todos los archivos relacionados con Redux.

src/services: Aquí encontraremos dos archivos, un interfaz repositorio y el repositorio que implementa dicho interfaz, esta capa se encargará de realizar las peticiones al Back y recibir las respuestas del repositorio de dicho Back.

src/store: Contiene el estado global de la aplicación y proporciona una forma de acceder y modificar ese estado.
