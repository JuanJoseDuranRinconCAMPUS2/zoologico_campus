# **🌇🦓zoologico_campus🦓🌇**

![](https://github.com/JuanJoseDuranRinconCAMPUS2/zoologico_campus/blob/main/Documentation/img/Intro.png)

## 🛑🦓Descripción del proyecto🦓🛑

En este proyecto, se creara una base de datos utilizando MongoDB para respaldar el funcionamiento integral de un zoológico. La base de datos almacenara la información crucial sobre los animales, las exhibiciones, los visitantes y otros aspectos relevantes del zoológico. Esta base de datos es será accedida y gestionada a través de una API construida con Node.js, que proporciona un punto de acceso para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la información del zoológico.

![](https://i0.wp.com/www.nuestramerida.com/wp-content/uploads/2023/04/zoologico-centernario.jpg?fit=1280%2C853&ssl=1)

## **🐾🐨Como Funciona Un zoologico🐨🐾**

### **[🛑Informacion ¡Aqui!🛑](https://github.com/JuanJoseDuranRinconCAMPUS2/zoologico_campus/blob/main/Documentation/INVESTIGACION.md)**

## 🐾🪷**Progreso del Proyecto**🪷🐾

### **🦝🧭Fase de Planificación🧭🦝:**

1. 🐮🔎investigación e indagación🔎🐮:

   - [X] Realizar la investigación exhaustiva  acerca del funcionamiento de un zoológico

   - [X] Identificar los tipos de información a almacenar (animales, exhibiciones, cuidadores, visitantes, etc.).

   - [X] Determinar los campos y atributos necesarios para cada tipo de información.

     

2. 🎯🦒Diseñar la estructura de la base de datos🦒🎯:

   - [X] Definir las colecciones necesarias (Animales, Exhibiciones, Cuidadores, Visitantes).
   - [X] Identificar las relaciones entre las colecciones (animales asignados a exhibiciones, cuidadores responsables de animales, etc.).
   
   ### 
   
   [👾 CLICK HERE](https://github.com/JuanJoseDuranRinconCAMPUS2/zoologico_campus/blob/main/Documentation/img/db.png)

   

3. 🚧🐲Planificar la arquitectura de la API🐲🚧:

   - [x] Decidir las rutas y los endpoints necesarios para realizar operaciones CRUD en la base de datos.
   - [x] Diseñar cómo se manejarán las consultas de datos específicas (por especie, hábitat, cuidador, etc.).



🐾🪓**Fase de Desarrollo🪓🐾:**

1. 🧭🚧Configuración del entorno🚧🧭:

   - [x] Instalar y configurar MongoDB en el proyecto.
   - [x] Configurar las dependencias a utilizar en el proyecto.

2. 👻🪙Creación de la base de datos y las colecciones🪙👻:

   - [ ] Escribir scripts para crear las colecciones en la base de datos MongoDB.

3. 🛑🎞️Desarrollo de la API🎞️🛑:

   - [x] Implementar las rutas y los controladores para cada operación CRUD.
   - [x] Desarrollar lógica para manejar consultas específicas.

4. 🕵️🐨Validación y sanitización de datos🐨🕵️:

   - [x] Implementar validaciones para garantizar que los datos ingresados sean consistentes y válidos.
   - [x] Realizar la sanitización adecuada para evitar posibles ataques de inyección.

5. 🧭🎈Pruebas unitarias y de integración🎈🧭:

   - [x] Escribir pruebas para verificar la funcionalidad de las rutas y los controladores.
   - [x] Probar la interacción entre las diferentes partes de la API y la base de datos.

   

🎆🎨**Fase de Implementación🎨🎆:**

1. 🎯🎞️Documentación🎞️🎯:
   - [x] Crear documentación clara y concisa sobre cómo usar la API, incluyendo ejemplos de solicitudes y respuestas.
   - [x] Documentar la estructura de la base de datos y la relación entre las colecciones.
2. 🪙🚧Pruebas finales y ajustes🚧🪙:
   - [ ] Realizar pruebas exhaustivas en el entorno de producción para asegurarse de que la API funcione sin problemas.
   - [ ] Realizar ajustes según los resultados de las pruebas.



## 🧑‍💻🆙Estructura de la Base de Datos🆙🧑‍💻

------

### 🏪Colección "alimento"🏪

Esta colección almacena información sobre el alimento de los animales

<details>
    <summary><h3>Valores de la Colección alimento</h3></summary>
    <strong>- _id (Number):</strong> Identificador único de la sucursal. <br>
        - Debe ser un número positivo.<br>
        - Debe seguir el patrón: "^[1-9][0-9]*$"<br>
    <strong>- nombre (String):</strong> Nombre de la sucursal.<br>
        - Puede contener letras y números, pero no caracteres especiales.<br>
        - Longitud máxima: 50 caracteres.<br>
        - Patrón permitido: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$"<br>
    <strong>- descripcion (String):</strong> Descripción de la sucursal.<br>
        - Puede contener letras, números y algunos caracteres especiales (, . \s).<br>
        - Longitud máxima: 250 caracteres.<br>
        - Patrón permitido: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$"<br>
    <strong>- caducidad (Date):</strong> Fecha de caducidad.<br>
        - Debe ser una fecha válida.<br>
    <strong>- lugar_conservacion (String):</strong> Lugar de conservación.<br>
        - Puede contener letras, números y algunos caracteres especiales (, . \s).<br>
        - Longitud máxima: 30 caracteres.<br>
        - Patrón permitido: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$"<br>
    <strong>- tipo_de_alimento (String):</strong> Tipo de alimento.<br>
        - Puede contener letras, números y algunos caracteres especiales (, . \s).<br>
        - Longitud máxima: 50 caracteres.<br>
        - Patrón permitido: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$"<br>
    <strong>- precio_kg (Number):</strong> Precio por kilogramo.<br>
        - Debe ser un número positivo.<br>
        - Debe seguir el patrón: "^[1-9][0-9]*$"<br>
</details>


### 🚗Colección "animales"🚗

Esta colección almacena información sobre los animales en el zoologico


### 🚛Colección "cliente"🚛

Esta colección almacena a los clientes del zoologico

### 👨‍🎤Colección "emp_pago"👨‍🎤

Esta colección almacena información sobre los pagos realizados a los empleados

### 🪙Colección "emp_Seguro"🪙

Esta colección registra los seguros vigentes de los empleados

### 🔗Colección "empleado"🔗

Esta colección registra los empleados del zoo

### 👨‍🏭Colección "habitat"👨‍🏭

Esta colección almacena información sobre los habitats de los animales

### 🛂Colección "his_Alimento"🛂

Esta colección registra los alimentos suministrados a los animales

### 🛃Colección "his_Atencion"🛃

Esta colección registra los tratamientos medicos realizados a los animales

### 🛩️Colección "his_Exhibicion"🛩️

Esta colección almacena información sobre las exhibiciones de los animales

### 🧧Colección "his_Med_Negativo"🧧

Esta colección almacena información sobre los mediamentos perjudicionales de los animales

### 💊Colección "his_Medicamento"💊

Esta colección almacena información sobre los medicamentos de los animales

### Colección Colección "inventario"📟

Esta colección almacena información sobre el inventario de productos del zoo

### 🛩️Colección "medicamento"🛩️

Esta colección almacena información sobre los medicamentos en el zoo

### ⛩️Colección "producto"⛩️

Esta colección almacena información sobre los productos que se venden en el zoo

### 🎫Colección "tickets"🎫

Esta colección almacena información sobre los tickets disponibles en el zoo

### 🎫Colección "ventas"🎫

Esta colección almacena información sobre las ventas de tickets realizadas en el zoo

### ⚛️Colección "roles_Api"⚛️

Esta colección almacena información sobre los roles y sus accesos en la API.

### 🧳Colección "tokens_Api"🧳

Esta colección almacena información sobre las tokens generadas en la API. 


------

## 🚨⚙️Requisitos⚙️🚨

Antes de ejecutar el código, asegúrate: 

- tener instalada la base de datos MongoDB en tu sistema.
- Tener instalado La extensión de MongoDB de VScode o la terminal de MongoDB

------

1. ## 💥⚙️**Pasos para usar la extensión de MongoDB en Visual Studio Code⚙️**💥

   (presiona la flecha para desplegar la información)

     <details>
       <summary> <h3> Paso 1: ⚓Instalación de la extensión⚓ </h3></summary> 
      <h4>  1. Abre Visual Studio Code <br>
       2. Haz clic en el ícono de "Extensiones" en la barra lateral izquierda (o presiona `Ctrl+Shift+X` en Windows/Linux o `Cmd+Shift+X` en macOS). <br>
       3. En el campo de búsqueda, escribe "MongoDB" y selecciona la extensión "MongoDB for VSCode" creada por Microsoft. <br>
       4. Haz clic en "Instalar" para instalar la extensión. <br></h4>
    </details>

     <details>
       <summary> <h3> Paso 2: 🛫Conexión a la base de datos MongoDB🛫 </h3></summary> 
      <h4> 
          1. Abre un proyecto en Visual Studio Code o crea uno nuevo. <br>
          2. En la barra lateral izquierda, selecciona la sección "MONGODB". <br>
          3. Haz clic en el ícono "Add Connection" (Agregar conexión) en la parte superior de la sección. <br>
          4. Selecciona o ingresa la cadena de conexión de tu base de datos MongoDB. Puedes usar una conexión local (`mongodb://localhost:27017/nombre_base_datos`) o una conexión remota proporcionada por un proveedor de servicios de MongoDB. <br>
          5. Si es necesario, proporciona un nombre descriptivo para la conexión. <br>
          6. Haz click en "Connect" (Conectar). <br></h4>
    </details>

    <details>
       <summary> <h3> Paso 3: 🛰️Explorando y administrando la base de datos🛰️ </h3></summary> 
      <h4> 
          1. Una vez conectado, verás la estructura de la base de datos en la sección "MONGODB" de Visual Studio 
          Code.<br>
          2. Expande la conexión para ver las bases de datos disponibles.<br>
          3. Expande una base de datos para ver sus colecciones.<br>
          4. Expande una colección para ver los documentos almacenados en ella.<br>
          5. Puedes hacer clic derecho en una base de datos o colección para realizar acciones como crear, 
          eliminar y modificar documentos.<br>
          6. Utiliza las diferentes opciones disponibles en el menú contextual para administrar tu base de datos 
          MongoDB de manera eficiente.<br></h4>
    </details>

------

## **🍁🎉Instalación🎉**🍁

1. Clona este repositorio en tu máquina: `git clone https://github.com/JuanJoseDuranRinconCAMPUS2/zoologico_campus`

2. Accede al directorio del proyecto: `cd zoologico_campus`

3. Accede a la carpeta backend: cd backend

4. Instala las dependencias: (ejecute el comando `npm i` para instalar las dependencias del proyecto)

     <details>
       <summary> <h3> 🏗️ Dependencias Usadas🏗️ </h3></summary> 
         - "class-transformer": "0.5.1" <br>
         - "class-validator": "0.14.0" <br>
         - "dotenv": "16.3.1" <br>
         - "express": "4.18.2" <br>
         - "express-rate-limit": "6.9.0" <br>
         - "jose": "4.14.4" <br>
         - "mongodb": "5.7.0" <br>
         - "nodemon": "3.0.1" <br>
         - "reflect-metadata": "0.1.13" <br>
         - "typescript": "5.1.6" <br>
     </details>

5. Accede al archivo de "[workTable.mongodb](https://github.com/JuanJoseDuranRinconCAMPUS2/zoologico_campus/blob/main/backend/Database/workTable.mongodb)" ubicada en la carpeta **db **dentro de backend: `db_campus_alquiler.mongodb`

6. inicia el archivo y monta la base de datos en tu servidor (ejecuta cada una de los comandos de mongo de manera Descendente).

7. Para facilitar las consultas ejecuta de manera Descendente el archivo del mismo archivo: `dataWork.mongodb` en ella encontraras data para alimentar la base de datos (!Importante: En este archivo esta la data con los roles y usuarios por defecto, **si no los ejecutas no podrás usar la api**!)

8. Recuerda para ejecutar ambos archivos debes tener la extensión de mongo en tu Visual Studio y además haberte conectado

9. Recuerda para ejecutar ambos archivos debes tener la extensión de mongo en tu Visual Studio y además haberte conectado

------

## **🏁🎆Configuración**🎆🏁

1. Cambia el nombre del archivo `.envexample` por  `.env`

2. Dentro del archivo `.env`, define las siguientes variables de entorno:

   - MY_CONFIG={"hostname": "127.19.8.7", "port": 5010}
   
     Atlas_User="EquipoCenter"
   
     Atlas_Password="AXJwc95agwAJQGFQ"

     Atlas_DB="zoologico_Campus_JJ"
   - Jwt_Primate_Key="Nywx e tiqimr erxi e hiwtq gere hkviigx hiwx erh fiexmrkmrk hievm ehirxmsrk wmxiw xlmrk"
   
   Reemplaza `Atlas_User`, `Atlas_Password`, y con los datos de tu base de datos de Mongo.

------

## **🪙⚜️Uso⚜️🪙**

1. Inicia el servidor:
2. `npm run dev`
3. Accede a `http://127.19.8.7:5010` para interactuar con la API.

------

## **🎫🔩Puerto de la Api**🔩🎫

## `http://127.19.8.7:5010`

------

1. ## **‼️Importante‼️**

   Antes de entrar a la api a los métodos de la api, debes crear un usuario.

   ## ✨End Points de Manejo de  usuarios✨

   ## 🧑‍💻/CrearUsuario

   **`POST /CrearUsuario`**: El EndPoint `/CrearUsuario` Se encarga de la creación de usuarios, en el cual podras crear usuarios que usaran la API en cuestion.

   versiones disponibles

   ```
   1.0.0(incluye los metodos crud y validacion con express)
   
   1.0.1(incluye la limitacion de data y de peticiones con limit y mejor respuesta en el post)
   
   1.1.0 (JWT y validacion de usuarios)
   ```

   **Aclaraciones y Validaciones**

     <details>
       <summary> <h3> Tipo De data </h3></summary>
       nombre_Usuario: Cadena de caracteres (string) <br>
       correo_Usuario: Cadena de caracteres (string) <br>
       contraseña_Usuario: Cadena de caracteres (string)
       versiones_Api: array
       codeRol_Usuario: Cadena de caracteres expecificos (CsWscIpEhqmr1987|CsWscYrYwyvemws22501) <br>
   </details>
   
   
   -  El valor de "codigo_Rol": Debe ser CsWscIpEhqmr1987 o CsWscYrYwyvemws22501. Ya que estos son los codigos para asignar roles. "CsWscIpEhqmr1987 " es el codigo para el rol: "Admin" y "CsWscYrYwyvemws22501" es el codigo para el rol: "usuario"
   
   **Ruta Especifica**
   
   ```html
   http://127.19.8.7:5010/CrearUsuario
   ```
   
     <details>
       <summary> <h3> Data de entrada </h3></summary> 
       {<br>
         "nombre_Usuario": "pedro3", <br>
         "correo_Usuario": "pedro3@gmail.com",<br>
         "contraseña_Usuario": "123",<br>
         "versiones_Api": ["1.0.1"],<br>
         "codeRol_Usuario": "CsWscIpEhqmr1987"<br>
       }
    </details>
   
   
     <details>
       <summary> <h3> Data de Salida </h3></summary> 
           {<br>
             "status": 200,<br>
             "message": "El usuario: 'pedro3', con el rol de: 'Admin', se ha creado correctamente"<br>
           }
    </details>


   Al ejecutar este endpoint se creara un usuario en la base de datos, recuerda tener presente tu usuario y contraseña para el manejo posterior de la api

   ## 🧑‍💻/IngresarUsuario

   **`GET /IngresarUsuario`**: El EndPoint `/IngresarUsuario` Se encarga de suministrar la key especifica que solicita el usuario para un endpoint especifico. Es importante tener en cuenta que este endpoint solo funciona si ya hay usuarios creados con anterioridad.

   **Aclaraciones y Validaciones**

   <details>
   <summary> <h3> Tipo De data </h3></summary>
 nombre_Usuario" : Cadena de caracteres (string)<br>
 contraseña_Usuario" : Cadena de caracteres (string)"<br>
 endPoint_Solicitado : Cadena de caracteres (string) (Debe ser un endpoint en la API)<br></details>

   -  El valor de "endPoint_Solicitado": Debe ser el nombre de los endpoints de esta api:

   **🧾Lista de Endpoint🧾**

   ```
   [
       "alimento", 
       "animales",
       "cliente",
       "emp_pago",
       "emp_seguro",
       "empleado",
       "especialidad",
       "habitad",
       "his_alimento",
       "his_atencion",
       "his_exibicion",
       "his_med_negativo",
       "his_medicamento",
       "inventario",
       "medicamento",
       "producto",
       "tickets",
       "ventas",
   ]
   ```

   **🧾👩‍💻Usuario Admin de prueba👩‍💻**

   ```
   	{
         "nombre_Usuario" : "FredCreations",
         "contraseña_Usuario" : "Monochrome1dcg3",
         "endPoint_Solicitado" : "TransladoProductos"
       }
   ```

   **👩‍💼Usuario Admin de prueba👩‍💼**

   ```
   	{
         "nombre_Usuario" : "Silver",
         "contraseña_Usuario" : "1234",
         "endPoint_Solicitado" : "TransladoProductos"
       }
   ```

   **Este sistema API proporciona acceso a diversos endpoints que permiten interactuar con los recursos del sistema. Para acceder a estos endpoints y garantizar la seguridad de la información, se utiliza un sistema de autenticación basado en tokens.**

   ## 🎯Autenticación y Acceso🎯

   Al ejecutar el endpoint de autenticación, recibirás una clave de acceso (token) que te permitirá acceder a los diferentes endpoints del sistema. Es importante tener en cuenta lo siguiente:

   - La clave de acceso es única para cada usuario y sesión.
   - Cada token está asociado a un endpoint específico seleccionado por el usuario.
   - Los métodos POST en los endpoints solo están disponibles para los usuarios con el rol de administrador.
   - Cada token tiene una duración de media hora.

   ## 🎫Uso del Token🎫

   Para acceder a los endpoints protegidos, debes incluir el token de acceso en la cabecera (header) de tus solicitudes HTTP. Utiliza el parámetro "Authorization" y agrega el token.

   El token te proporcionará acceso autorizado al endpoint que seleccionaste, permitiéndote realizar operaciones y obtener información relevante. Asegúrate de mantener tu token confidencial y no compartirlo con terceros.

   **Ruta Especifica**

   ```html
   http://127.19.8.7:5010/IngresarUsuario
   ```

 <details>
   <summary> <h3> Data de entrada </h3></summary> 
   {<br>
     "nombre_Usuario" : "FredCreations",<br>
     "contraseña_Usuario" : "Monochrome1dcg3",<br>
     "endPoint_Solicitado" : "TransladoProductos"<br>
   }
</details>
 <details>
   <summary> <h3> Data de Salida </h3></summary> 
      {  <br>
     "status": 201,<br>
      "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJGcmVkQ3JlYXRpb25zIiwicGFzc3dvcmQiOiJNb25vY2hyb21lMWRjZzMiLCJlbmRQb2ludCI6IlRyYW5zbGFkb1Byb2R1Y3RvcyIsInJvbCI6IkFkbWluIiwiaWF0IjoxNjkyNjMzMDk4LCJleHAiOjE2OTI2MzQ4OTh9.mAHmqnZRnxy8mfo1uV2CHstvjjUo_cM5ohTyg5EGBl0",<br>
         "instructions": "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor"<br>
       	}
    </details>

------

------

# 🎫/**Endpoints**🎫

**Todos los endpoints manejan el nombre de la coleccion y sus respectivos metodos. asi que vamos a simplificar todo en un sola instruccion**

**Recuerda cada ruta en version 1.1.0 necesita obligatoriamente su Token de validacion.**

### **colecciones disponibles para los endpoints**

```
[
    "alimento", 
    "animales",
    "cliente",
    "emp_pago",
    "emp_seguro",
    "empleado",
    "especialidad",
    "habitad",
    "his_alimento",
    "his_atencion",
    "his_exibicion",
    "his_med_negativo",
    "his_medicamento",
    "inventario",
    "medicamento",
    "producto",
    "tickets",
    "ventas",
]
```



------

## 🐰Metodo GET

**`GET /`**: Este endpoint se encarga de llamar la data de la coleccion en cuestion.

tiene disponible las versiones:

-  1.0.0 (metodo get)
- 1.0.1 (lmit)
- 1.1.0 (JWT)

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint en la version 1.1.0

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/<nombreColeccion>/
```
para acceder a las versiones  1.0.1 y 1.1.0 al final de la ruta pon "v1.0.1" o "v1.1.0" respectivamente

**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
   	Este endpoint te devolvera una lista ordenada de datos que esten en la base de datos de la coleccion selecionada
</details>

la respuesta puede variar segun la version de la api
------

## 🚨Metodo Post

**`POST /`**:  Este endpoint se encarga de insertar una data a una coleccion en cuestion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Importante </h3></summary>
   <strong>Usa el archivo thunder para verificar la data de entrada de cada uno de los endpoints</strong>
</details>

tiene disponible las versiones:

-  1.0.0 (metodo post)
- 1.0.1 (lmit)
- 1.1.0 (JWT)

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint en la version 1.1.0

**Ruta Especifica**

```html
http://127.19.8.7:5010/<nombreColeccion>/
```
para acceder a las versiones  1.0.1 y 1.1.0 al final de la ruta pon "v1.0.1" o "v1.1.0" respectivamente

**🧧Metodo HTTP🧧**

```html
POST
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Data enviada Correctamente"<br>
    }
   </details>
la respuesta puede variar segun la version de la api
------

## 🛃Metodo Put

**`PUT /`**:Este endpoint se encarga de actualizar la data a una coleccion en cuestion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Importante </h3></summary>
   <strong>Usa el archivo thunder para verificar la data de entrada de cada uno de los endpoints</strong>
</details>

tiene disponible las versiones:

-  1.0.0 (metodo post)
- 1.0.1 (lmit)
- 1.1.0 (JWT)

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint en la version 1.1.0


**Ruta Especifica**

```html
http://127.19.8.7:5010/<nombreColeccion>?id=<id>
    
    Reemplaza <id> por el id de la data que quieras actualizar
```
**🧧Metodo HTTP🧧**

```html
PUT 
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Documento actualizado correctamente"<br>
    }
   </details>
   la respuesta puede variar segun la version de la api
------

## 💢Metodo Delete

**`DELETE /`**: Este endpoint se encarga de borrar un documento en una colección en cuestion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string or number)
</details>

tiene disponible las versiones:

-  1.0.0 (metodo post)
- 1.0.1 (lmit)
- 1.1.0 (JWT)

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint en la version 1.1.0

**Ruta Especifica**

```html
http://127.19.8.7:5010/<nombreColeccion>/
```
**🧧Metodo HTTP🧧**

```html
DELETE 
```
(recuerda solo debes poner el nombre de la coleccion que quieras manipular, si tienes dudas puedes apoyarte en el archivo thunder)
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
        "id": "10"<br>
}
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Documento ha sido eliminado correctamente"<br>
    }
   </details>
la respuesta puede variar segun la version de la api
------

## **🪄⚗️Archivo thunder⚗️🪄**

Aqui encontraras el archivo con las colecciones de thunder usadas para ejecutar los endpoints de manera mas facil de este proyecto

[Preciona Aqui Para Ir Directamente Al Archivo](https://github.com/JuanJoseDuranRinconCAMPUS2/zoologico_campus/blob/main/backend/Thunder/thunder-collection_ZoologicoCampus.json)

## **🚀🎇 Importacion Archivo thunder🎇🚀**

- Descarga el archivo thunder-collection_ZoologicoCampus.json en el link de arriba
- Abre Thunder, ve a Collections y abre el menu

- Haz Click donde dice "Import"

- Selecciona el archivo thunder-collection_ZoologicoCampus.json

- Y listo!!. Ya tendras todas las carpetas que contituyen los endPoints del proyecto.
------

## **🌌Contribución🌌**

Si deseas contribuir a este proyecto, siéntete libre de abrir una solicitud de extracción (pull request) o informar cualquier problema que encuentres.

------

## **😶‍🌫️Licencias😶‍🌫️**

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/JuanJoseDuranRinconCAMPUS2/bodegasNodeExpress/blob/main/LICENSE).

------

¡Gracias por visitar mi proyecto!
