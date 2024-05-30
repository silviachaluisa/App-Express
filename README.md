# App Express


Nosotros el grupo #2 y vamos a crear un web server en Express creando rutas en las cuales se mostrarán la información básica de cada uno de los integrantes del grupo.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/88cb778b-877d-4854-b5ea-7d4e23195ee0)
![image](https://github.com/franciscocaero/App_Express/assets/150805792/c525cf32-7785-4aca-bc70-77985d41c16d)

Una vez ejecutado el comando “npm install express”, se esta instruyendo a npm (Node Package Manager) que installe el paquete Express en el proyecto, se crean dependencias si la instalación se realizó correctamente:

Instalación de dependencias: Express tiene varias dependencias que también se descargan e instalan automáticamente. Estas dependencias son otros paquetes de Node.js necesarios para que Express funcione correctamente.
Actualización del archivo package.json: Si en en el proyecto ya existe un archivo package.json, npm agrega la entrada de Express en la sección dependencies de este archivo. Esto permite que cualquier otra persona que clone el proyecto pueda ejecutar npm install para instalar todas las dependencias necesarias, incluyendo Express.
Creación del directorio node_modules: Los archivos de Express y sus dependencias se colocan en el directorio node_modules dentro del proyecto. Este directorio contiene todos los paquetes instalados por npm.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/e29e000f-85c7-44a8-85f2-8d8d4e03a9fa)

Una vez se tiene el servidor express creado se arranca y para ello dentro de package,json existen unos scripts en los cuales se puede colocar o conectar lo que se tenga en server.js o en el proyecto de express, se puede crear un script personalizado, en este caso la instrucción dada es server.js.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/1d13ae96-b2f6-4245-b1d3-39acf4d27eec)

Con un pequeño ejemplo para comprobar si la creación del servidor se realizó con éxito, se accede al proyecto en node colocando localhost: 3000 o el puerto asignado y se visualiza que el arranque del servidor se ejecutó con éxito.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/51f48542-8df4-481b-854e-b45633a946f2)

En el archivo server.js se empieza a implementar el código, creando las rutas solicitadas dentro las cuales de mostrará la información de cada uno de los integrantes del grupo al momento de acceder al localhost con el puerto asignado.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/f4bed8ac-b8d8-42bc-94b6-b5471a93daca)

La ruta creada para mostrar la información de los integrantes en formato Json se refleja correctamente.
![image](https://github.com/franciscocaero/App_Express/assets/150805792/3020f637-d179-4ea9-b52d-f5eda987ee2f)
![image](https://github.com/franciscocaero/App_Express/assets/150805792/bc1a4b50-9c96-4742-bdea-f726428da4c2)

Para visualizar los productos se creó un directorio llamado public dentro del cual se creó un archivo style.css para el estilo del html y una carpeta denominada imágenes para guardar las gráficas representativas de los productos.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/87f70145-920a-4a18-b5c1-c0154e311665)

Para esta ruta se crea un array llamado “productos”, donde cada elemento del array es un objeto que contiene el nombre y la ruta de un producto. Se genera el código HTML para las opciones del menú desplegable utilizando el método “map()” del array “productos”. Se crea un String con elementos “option” para cada producto usando su nombre como valor y texti visible en la opción, “join” (¨¨) une todos los elementos en un único string

![image](https://github.com/franciscocaero/App_Express/assets/150805792/e90aa09e-4c84-4f53-8a50-5d05f574cf30)

Aquí se define una ruta al servidor Express que responde a las solicitudes GET en “products”. Cuando se accede a estar ruta, se genera un HTML que incluye un formulario con un menú desplegable de productos y un botón para enviar el formulario.

![image](https://github.com/franciscocaero/App_Express/assets/150805792/f2cc813f-0fc9-40af-99aa-dd1589fb75fb)

