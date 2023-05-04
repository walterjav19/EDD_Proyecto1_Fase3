
# Manual Tecnico
La Facultad de Ingeniería de la Universidad de San Carlos de Guatemala necesita una solución para almacenar archivos importantes y está considerando crear su propio sistema. Este sistema debe ser compatible con cualquier sistema operativo y se plantea la posibilidad de usar Github Pages para crear un sitio web. La funcionalidad del sistema debe ser similar a Google Drive, con la característica de que la Universidad de San Carlos sea la propietaria. Además, el sistema debe incluir características específicas de la aplicación. Como estudiante de ingeniería en sistemas, se me ha solicitado desarrollar una aplicación llamada EDD GoDrive para la gestión de archivos. Este sistema debe permitir el control de usuarios, con espacios de almacenamiento para cada uno de los cursos de la carrera de ingeniería en sistemas, donde los usuarios puedan subir, crear y eliminar carpetas y archivos, así como modificar los nombres de las carpetas y archivos existentes. La aplicación debe ser responsiva y fácil de usar para los usuarios.





## Conocimientos

 - Desarrollo web
 - Estructuras de datos
 - JavaScript
 - JSON(JavaScript Object Notation)
 - Local Storage
 - Blockchain
## Requisitos
Para realizar un correcto uso de este software es necesario el uso de un navegador ya sea 




- Chrome
![App Screenshot](https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg)
- Firefox
![App Screenshot](https://upload.wikimedia.org/wikipedia/commons/2/28/Firefox_logo%2C_2017.svg)
- Edge
![App Screenshot](https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg)

es necesario que esten actualizados a las ultimas versiones ya que se utilizan recursos web propios de versiones actuales


## Estructuras
Las estructuras de datos son fundamentales en el desarrollo de páginas web, ya que permiten organizar y gestionar la información de manera eficiente y efectiva. En el contexto de una página web, las estructuras de datos son utilizadas para representar y almacenar datos como texto, imágenes, videos, formularios y más. Por ejemplo, los elementos HTML, CSS y JavaScript utilizados en una página web son esencialmente estructuras de datos que definen la estructura, presentación y comportamiento de una página. Además, las estructuras de datos son esenciales en la manipulación de datos en el lado del servidor, como bases de datos y APIs, para almacenar y recuperar información de manera eficiente. El uso adecuado de estructuras de datos en el desarrollo de páginas web permite una navegación más rápida, una mejor organización de la información y una experiencia del usuario más amigable y satisfactoria.

- Lista Doblemente enlazada: Una lista doblemente enlazada es una estructura de datos lineal en la que cada elemento o nodo de la lista contiene un puntero tanto al elemento siguiente como al elemento anterior en la lista. Esto significa que los elementos de la lista pueden ser recorridos en ambas direcciones, hacia adelante y hacia atrás, lo que permite una gran flexibilidad en la manipulación de la lista. 
![App Screenshot](https://conclase.net/imagen/c/edd/dobleenlace.gif)
- Matriz Dispersa: estructura de datos utilizada para representar matrices que contienen principalmente elementos nulos o vacíos. En lugar de almacenar todos los elementos de la matriz en una estructura bidimensional, solo se almacenan los elementos no nulos junto con sus posiciones en la matriz. Esto permite ahorrar espacio en memoria y mejorar la eficiencia en la manipulación de matrices grandes con muchos elementos nulos.
![App Screenshot](https://raw.githubusercontent.com/walterjav19/Proyecto1_20211171_IPC2/master/graphviz.png)
- Grafo Dirigido: es un tipo de grafo en el que cada uno de los arcos o aristas tiene una dirección asociada, es decir, se indica la dirección en la que se puede recorrer el arco. Esto significa que, para cada arco (u,v) que conecta el vértice u con el vértice v, se especifica que u es el vértice de origen y v es el vértice de destino. En un grafo dirigido, también conocido como digrafo, los vértices se representan como nodos y los arcos se representan como flechas unidireccionales que conectan los nodos. Cada nodo tiene una lista de arcos de salida, que son aquellos que comienzan en ese nodo, y una lista de arcos de entrada, que son aquellos que terminan en ese nodo.
![App Screenshot](https://upload.wikimedia.org/wikipedia/commons/a/a2/Directed.svg)
## Seguridad y Mensajeria
- Blockchain: es una tecnología de registro distribuido que se utiliza para almacenar y transmitir información de manera segura e inmutable. Básicamente, es una base de datos descentralizada que mantiene un registro continuo y cronológico de transacciones o eventos.La información en un blockchain se almacena en bloques que están vinculados entre sí de forma cronológica, lo que crea una cadena de bloques. 

![App Screenshot](https://www.bloomberglinea.com/resizer/lufpcqG6wQYoN7hBRn6ACqP7xS0=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/SRFETKX2AZHI7AJMBSJ3OM3XRI.jpg)

- Encriptacion Base64: es una técnica de codificación que se utiliza para convertir datos binarios en un formato de texto legible y fácilmente intercambiable. El proceso de codificación convierte los datos binarios en una cadena de texto ASCII utilizando un conjunto de 64 caracteres.

![App Screenshot](https://www.redhat.com/sysadmin/sites/default/files/styles/embed_large/public/2022-08/30_printable_base64.png?itok=3CDo39M5)


- Encriptacion SHA-256: es una función criptográfica hash que se utiliza para convertir cualquier tipo de datos en una cadena de caracteres hexadecimal de 64 caracteres.El algoritmo SHA-256 toma los datos de entrada, ya sea un archivo o una cadena de texto, y los procesa mediante un conjunto de operaciones matemáticas complejas para generar un valor hash de 256 bits.Es importante destacar que SHA-256 es una función hash unidireccional, lo que significa que es fácil de calcular un valor hash a partir de los datos de entrada, pero prácticamente imposible de recuperar los datos de entrada a partir del valor hash.

![App Screenshot](https://programacionconphp.com/wp-content/uploads/2020/04/hash.png)

- Encriptacion AES: AES (Advanced Encryption Standard) es un algoritmo de cifrado simétrico que se utiliza para proteger la privacidad y seguridad de los datos. La encriptación AES utiliza una clave simétrica para cifrar y descifrar los datos, lo que significa que la misma clave se utiliza tanto para cifrar como para descifrar la información. 

![App Screenshot](https://www.harasdadinco.cl/wp-content/uploads/2023/04/que-tipo-de-cifrado-es-aes.png)

## Github Pages
GitHub Pages es un servicio de alojamiento gratuito proporcionado por GitHub, que permite a los usuarios crear y publicar sitios web estáticos directamente desde sus repositorios de GitHub. Es una forma sencilla y conveniente de alojar páginas web para proyectos de código abierto, documentación de proyectos, blogs personales y otros fines.

![App Screenshot](https://blogs.sap.com/wp-content/uploads/2014/10/github_pages_572846.jpg)

## Diagrama de Clases

![App Screenshot](/imgs/diagrama.jpg)

# Manual de Usuario



## Login

nos logeamos con las credenciaales de administrador user:admin password:admin 

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/login.PNG?token=GHSAT0AAAAAAB7VAOF6WJRAUUJBBLXKJI2KZCTA5SA)

## admin dashboard

en este apartado tenemos Carga Masiva, el reporte del arbol y la muestra de los usuarios inorden,posorden, preorden y tabla hash en una tabla ademas de las opciones de ver permisos y ver mensajes que permite visualizar la comunicacion entre usuarios

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/admindash.PNG?token=GHSAT0AAAAAAB7VAOF6JR55TUTSVUSEQCMIZCTBB7Q)

### Carga Masiva
Tenemos que elegir un archivo json que servira como entrada de nuestra pagina web

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/subida.PNG?token=GHSAT0AAAAAAB7VAOF7ECJRHJQHBM6JD3TEZCTA6IA)


### Mostrar

se despliega una tabla que muestra el carnet y el nombre de todos los estudiantes subidos al sistema por medio de la tablas hash cabe mencionar que la contraseña esta encriptada en base 64 por lo que el administrador en ningun momento tiene acceso a las contraseñas de los usuarios


![App Screenshot](/imgs/mostrar_hash.JPG)


### Mostrar mensajes

Este apartado permite al administrador tener informacion sobre el sistema de mensajeria en el cual debemos elejir los 2 carnets de los cuales queremos visualizar informacion como la hora y fecha de envio cabe mencionar que esta informacion esta protegida y encriptada en sha256 y AES 
![App Screenshot](/imgs/mostrar_msg.JPG)

## user dashboard

tenemos el panel de usuario que cuenta con diversas funcionalidades entre ellas crear carpetas y archivos asi como su eliminacion ademas de poder dar permisos a los demas usuarios de nuestros archivos nosotros contamos con una pestaña de compartidos y de mesnajes que fueron 2 opcionalidades nuevas añadidas

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/userda.PNG?token=GHSAT0AAAAAAB7VAOF6ZSA7NHJHKGOOXSQMZCTBOCQ)


## crear carpeta
debemos ingresar la ruta donde queramos crear la carpeta 

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/carpeta.PNG?token=GHSAT0AAAAAAB7VAOF7NCFOTKZ7TTGUTHA6ZCTBOUQ)

## subir archivo
permite subir 3 tipos de archivos pdf,txt e imagenes
todos los archivos son guardados en base 64


![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/subir.PNG?token=GHSAT0AAAAAAB7VAOF6IGYRWDXN5ZWWTHY2ZCTBPFA)

## eliminar carpeta
eliminamos la ruta actual en la que estamos borra tanto carpetas como archivos por lo que se muestra un aviso 

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/eleiminar.PNG?token=GHSAT0AAAAAAB7VAOF7BI6TNEGH4CW4HUXSZCTBP5Q)

## buscar

muestra todos los archivos y carpetas de la ruta actual las imagenes una pequeña pre-visualizacion y los demas archivos como iconos

![App Screenshot](https://raw.githubusercontent.com/walterjav19/EDD_Proyecto1_Fase2/master/buscar.PNG?token=GHSAT0AAAAAAB7VAOF674UXKGJYIZUQRBW6ZCTBQPQ)

## Permisos

permite otorgar permisos a los archivos que tenmemos cargados en nuestra cuenta y los podremos visualizar en la pestaña de compartidos

![App Screenshot](/imgs/permisos.JPG)


## Reporte Permisos

nos da la posibiladad de ver los permisos que se le otorgo a la carpeta donde nos encontramoa

![App Screenshot](/imgs/permisos_repo.JPG)

## Compartidos

Podremos ver los archivos que otros usuarios han compartido con nosotros

![App Screenshot](/imgs/compartidos.JPG)


## mensajeria

como ayuda a los usuarios podemos mantener comunicacion con las cuentas en el sistema inclusive podemos enviar mensajes a nuestra propia cuenta como una especie de borrador

![App Screenshot](/imgs/chat.JPG)
## Autor

- [@walterjav19](https://www.github.com/walterjav19)

