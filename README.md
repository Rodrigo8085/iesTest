# IesTest

Puntos del ejercicio
1. Crear proyecto en Angular 13.
2. Implementar “angular material”.
3. Implementar Bootstrap 4 mediante los assets NO INSTALANDOLO, es decir
importar solo el archivo de clases básico, esto es para que puedas controlar el
grid de acuerdo con el tamaño de monitor y que también ocupes las clases de
margin, padding, font-weight, row, col, etc.
4. Las rutas serán de la siguiente forma.
5. La arquitectura de las carpetas lo dejo a tu criterio.
6. Crear un pipe. El nombre del pipe será cambioLetras, el cual cambiará de una
cadena de texto lo siguiente:
Las letras “a” por el número 4, la letra “e” por el número 3, la letra “i” por el número 1, la letra “o”
por el número 0 y la letra “u” por el número 9.
Ejemplo: "para un tipo de contraseña" => "p4r4 9n t1p0 d3 c0ntr4s3ñ4"
Este lo ocuparemos en la pantalla de bienvenida.
7. Login.
Mediante ngModel o formularios reactivos realizamos el login donde pedirás el usuario y la contraseña.
No olvides lanzar los mensajes de error del ws
El servicio es el siguiente:
URL: 'https://desa.ies-webcontent.com.mx/login' (post)
Request: { "username": "", password: "" }
carlos.oviedo, $oyAdmin666
8. Si el usuario tiene credenciales, lo redireccionará a una página de inicio.
9. Página de bienvenida.
La distribución deberá ser similar a la siguiente imagen, la imagen de fondo es libre.
Primer texto: Bienvenido a mi portal.
Segundo texto: Nos podrías indicar tu nombre.
El botón dirá "Escribe tu nombre."
Al dar clic se abrirá un modal donde tendrás un input donde se colocara el nombre y al cerrar el modal,
colocaras un tercer texto (aquí ocuparemos el pipe previamente hecho) que diga “El nombre ingresado
es {{nombreIngresado | cambioLetras }}”, el gif adjunto en el correo lo explicara de mejor manera.
10.Para poder navegar de un componente a otro puedes colocar un Sidebar o un
Navbar, lo dejo a tu gusto.
11. Conversiones
Solo contendrá el título del componente
12.Calcular fecha
La idea de este componente es que a partir de una fecha puedas sumarle días/meses/años
dinámicamente. No agregar ninguna librería para fechas, solo javascript.
Tendrás un date picker donde se seleccionará una fecha.
Un select donde seleccionaremos la unidad días/meses/años
Un input donde se colocará la cantidad que se sumará.
Ejemplo:
Eliges 03/03/2022
En el select eliges Año.
En la cantidad pone 3
Tu resultado deberá mostrarse de la siguiente forma (ocupar pipe de fecha de angular): El resultado fue
03 mar 2025.
13.Formulario
En esta realizarás un formulario reactivo con validaciones.
{
nombres: "",
apellidos: "",
fumas: true/false,
actualmentePracticasLectura: true/false,
librosLeidosUltimosTresMeses: [ "Libro 1", "Libro 2", "Libro 3" ]
estadoCivil: 12, 13 o 14
}
Reglas:
a) Todos los campos son obligatorios menos estadoCivil.
b) El nodo actualmentePracticasLectura determinará si se activa y se muestra el nodo
librosLeidosUltimosTresMeses. Recuerda enable y disable de los formularios reactivos.
c) El nodo librosLeidosUltimosTresMeses es de tipo FormArray por lo que tendrás que proponer
como mostrarlo y como el usuario podrá ir agregando libros.
d) Los nodos nombres y apellidos tendrán una validación personalizada que no permitirá tener
espacios al final, es decir si en nombre ingreso "Gabriela " marque que el campo sea invalido y
que notifiques al usuario porque está mal (ocupar mat-error).
e) Estado civil viene de un catálogo
URL:
http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil
(post)
Request: "{}"
f) Tendrás un botón con texto "Enviar", el cuál te lanzará una alerta de error si el formulario es
invalidado y una alerta de éxito si el formulario es válido


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Implementación del tiempo para la realizacion de este proyecto:
-3hrs el 12 de julio de 2024
-3hrs + 3hrs el 13 de julio de 2024
-4hrs + 2hrs + 1.9hrs + 3.8Hrs el 14 de julio de 2024