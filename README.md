# My-Spotify-Clone
## Ferretify


La pagina es un clon del reproductor de musica conocida como [Spotify](https://www.spotify.com/) a la que me gusta llamarle Ferretify. 
En este reproductor usted, accediendo a su cuenta de spotify, escuchar y ver de todo acerca de sus canciones, sus top artistas,
sus playlists y mucho mas.
En este proyecto trabajamos con la [Api de spotify](https://developer.spotify.com/) mediante 
la utilizacion de un client wrapper, o mejor dicho, libreria de la api de [jmperez](https://github.com/jmperez/spotify-web-api-js).


## Install and deploy

Para poder ver el sitio corriendo y poder probar de Ferretify debe abrir una terminal en su editor de codigo, abrir una terminal, 
clonar el proyecto en su directorio e instalar las devDependencies de la siguiente manera:

```sh
git clone https://github.com/facuferreria/my-spotify-clone-app
npm install
```
Despues de instalar las dependencias, debes ir a la documentacion de spotify y obtener tu "CLIENT ID". 
Si no sabes como hacerlo por favor visita este [link](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/).

Luego debe ir al archivo spotify.js donde va a reemplazar el string en la variable "clientId" por su id de cliente.

```sh
const clientId = 'YOUR CLIENT ID';
```

Finalmente debera volver a su terminal y ejecutar el servidor:

```sh
npm start
```
ACLARACION: Cabe aclarar que por motivos de autenticacion de spotify, el token de acceso que se le otorga a cada usuario una vez accedido a utilizar su cuenta de spotify, solo consta de una hora de duracion y luego de esa hora no esta permitido acceder a la informacion de la api de spotify. 
Para volver a utilizar este reproductor debera refrescar la pagina y volver a acceder a su cuenta para obtener un nuevo token de acceso. En un futuro actualizaremos el proyecto para que pueda navegar por Ferretify sin necesidad de refrescar la pagina.
 
 
## Dev dependencies

Las dependencias y librerias utilizadas en este proyecto son las siguientes:

| Dependecias | Version | Uso |
| ------ | ------ | ------ |
| reactjs | 18.1.0 | Front-End del proyecto |
| react-router-dom | 6.4.3 | Enrutado del proyecto |
| react-spotify-web-playback | 0.10.0 | Reproductor de musica de spotify |
| fontawesome | 6.1.1 | Iconos del proyecto |
| spotify-web-api-js | 1.5.2 | Wrapper de la api de spotify |
| sass | 1.56.1 | Estilos del proyecto |
