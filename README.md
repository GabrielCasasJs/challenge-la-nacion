# Challenge La Nacion
![foto de cabecera](https://www.noticiasgratis.com/wp-content/uploads/2019/11/Diario-La-Naci%C3%B3n-Noticias-Gratis.jpg)
## Pasos para levantar el proyecto

> 1) git clone : https://github.com/GabrielCasasJs/challenge-la-nacion.git
> 2) npm install / npm i
> 3) npm start

## Tecnologías del Proyecto
1. React JS
2. react-icons
3. axios
4. eslintrc

## Estructura de carpetas del proyecto
1. Componentes
  * Screen
  > Este componente es el principal del sitio web, acepta 3 props, **Header**, **Children** y **Footer**
  * Box
  > Este componente se encarga de todos los boxes de color celeste que están en el proyecto, con propiedades como width,height y otras más, para modificarlos a su manera correspondiente al uso que necesiten.
  * Button
  > Este componente se encarga de todos los botones de la web, con diversas propiedades como hover, background y más, para poder modificarlo a su manera.
  * CardArticle
  > Este componente se utiliza para mostrar todos los card en pantalla, sus propiedades son ( image, title y displayDate ), esta última propiedad la importamos de la carpeta **utils**, y sirve para modificar la fecha en el formato de la web.
  * Link
  > Este componente se encarga de todos los links de la web.
  * Logo
  > Este componente se encarga de mostrar los logos de **La Nacion**.
  * Header
  > Este es el componente para el Header, adentro del componente utilizo los componentes (Logo, Link, Button, Search), El último componente que nombre en la lista llamado **Search** es un componente hijo del componente Header.
   **COMPONENTE-SEARCH** : Utilizo este componente para realizar la animación del buscador que se encuentra en el header.
   >> También a su vez el componente Header tiene un componente hijo llamado **HeaderMobile**, que se encarga de mostrar el header de la parte inferior cuando estamos en mobile.
  * Footer
  > Este es el componente Footer, adentro del componente uso el componente **Link** para los enlaces y el componente **Logo** para las imágenes, También utilizo la librería de **React Icons**.
  * Loading
  > Este es un componente de carga, lo decidí agregar adicionalmente para mostrar un loading cuando carga la web.

2. Screen
  * Home
  > La screen Home es la encargada de mostrar los links más destacados del sitio web, adentro de ella utilizo los componentes (Screen, Header, Footer, Box, Link, ViewCard).
  > El último componente mencionado llamado **ViewCard** es un componente hijo de la screen de **Home**, es el encargado de renderizar las card del sitio.

3. Utils
  > Adentro de **utils** está la lógica para mostrar la fecha en el formato que lo pide el sitio web.

4. Context
  > En la carpeta **Context** manejo el estado global del sitio, en esta carpeta hago la petición a la **URL**, hago los filtros de los links más repetidos y el state para mostrar los **artículos** en la web.