<p align="center"><a href="https://damiangonzalezdev.blogspot.com/" target="_blank"><img src="https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307350_960_720.png" width="100"></a></p>

# KereberusJs template
Este template está desarrollador para programar microservicios implementando una arquitectura hexagonal, lo uso especialmente para desarrollar pequeñas piezas de software como: 

- API Rest
- Queue consumers
- Queue publishers

Es compatible con cualquier sistema compatible con Javascript, particularmente lo he usado con:

- AWS Cognito
- AWS DynamoDB
- MongoDB
- MariaDB
- PostgreSQL
- AWS SQS
- Apache Kafka
- RabbitMQ

Simplifica mucho la lógica que se tiene que aplicar para cada microservicio y ayuda mucho a escalar las aplicaciones y hacer cambio con servicios de infraestructura, haciendo que nuestros servicios sean bastante portables. Lo he podido desplegar en DigitalOcean y AWS, ya sea haciendo el build del container o desplegandolo como función lambda. El comportamiento es bastante consistente, aunque si deseas implementarlo, te recomiendo tener buenas políticas de despliegue y desacoplar los adaptadores, algo que me funcionó para ayudar con la disminución del peso del proyecto en produccción fué separar la capa de los adaptadores e implementarlos en una libreria separada y usarlo con npm. Esto ayudó a reutilizar el código y tener un layer en el entorno de producción y no repetir código.

## Cualquier aportación es escuchada y revisada con gusto
Si deseas contribuir al proyecto ponte en contacto conmigo mediante mi correo electrónico ing.gonzaleza@outlook.com, coloca en el asunto Aporte KerberusJS y con gusto me daré el tiempo de leerte, si es viable tu aportación con todo gusto levantamos un PR y publicamos la nueva version con la mensión de tu participación.

## Nota: 
Te dejo una guia para que puedas comprender el funcionamiento del template y puedas desarrollar tus porpios micro servicios, estan tendro te la carpeta de tutorials, aunque para una mayor legibilidad he incorporado la herramienta de ```JSDoc``` para documentar el código, para generar la documentación basta con ejecutar el comando: 

```bash
$ npm run docs
```

Eso va a generar una carpeta en la raiz del proyecto llamada docs, está en formato ```HTML```, por lo que la podrás visualizar con tu navegador.

## Contáctame
si tienes algún proyecto en el que te gustaría que participara, alguna duda sobre el template o simplemente te interesó mi trabajo, no dudes en contactarte conmigo, puedes mandarme un corrreo o seguirme en alguna de mis redes sociales. Los links estan en mi perfil de ```Github```.