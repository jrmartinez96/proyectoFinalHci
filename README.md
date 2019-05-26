## Requisitos
Tener instalado node y react

## Tutoriales
Curso para principiantes: https://www.youtube.com/watch?v=6Ied4aZxUzc


## Librerias principales que utiliza el proyecto

- React Router Dom: https://reacttraining.com/react-router/web/guides/quick-start
- Reactstrap: https://reactstrap.github.io/ 

## Pasos para correr el programa

- Instalar node y react
- Bajar el repositorio
- En la carpeta del repositorio escribir en la console `npm install` . Esto instalará todas las librerias que utliza el proyecto (incluyendo react-router-dom y reactstrap). Lo recomendable es que se corra este comando cada vez que se hace un pull ya que es probable que otro contribuidor haya instalado otra libreria en el proyecto.
- Después se corre `yarn start` para correr el programa. Este comando inicializará un servidor local en donde se encontrará la Web App. Cualquier cambio que realicen en los archivos hará que la web app se actualice automaticamente.


## Para instalar una nueva libreria
- Para empezar cualquier libreria de node se puede instalar en el proyecto, solo lo tienen que buscar en google. `yarn add (nombre de libreria)` es el equivalente a `npm install (nombre de la libreria)`. Es recomendable utilizar `yarn`


## Notas
- ¿Diferencia entre `npm install` y `npm install (nombre de la libreria)`? `npm install` instala todas las librerias que se utilizan en el proyecto, mientras `npm install (nombre de la libreria)` instala una libreria nueva en el proyecto


## PARA EL PROYECTO
- Para trabajar en el Ordenamiento de Palabras creé una carpeta en donde pueden trabajar, se encuentra en `src/views/pages/OrdenamientoDePalabras`. Ya esta creado el componente, solo es de escribir en el render el "html", tambien hay un archivo css que pueden utilizar para los estilos. Si quieren ver como se ve solo inicien el servidor local con `yarn start` y cuando termine de cargar en el url ingresen `localhost:3000/#/ordenamiento`
- Para trabajar en el Lectura de Palabras creé una carpeta en donde pueden trabajar, se encuentra en `src/views/pages/Lectura`. Ya esta creado el componente, solo es de escribir en el render el "html", tambien hay un archivo css que pueden utilizar para los estilos. Si quieren ver como se ve solo inicien el servidor local con `yarn start` y cuando termine de cargar en el url ingresen `localhost:3000/#/lectura`