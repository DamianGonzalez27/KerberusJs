# Guia de arranque
Hola compañero, en esta guia te voy a explicar que es lo que necesitas para pdoer comenzar a desarrollar tus sistemas con este template, te daré una breve guia de que es lo que necesitas instalar y cuales son los posibles casos de uso del proyecto y como lo puedes implementar de acuerdo a tus necesidades.

## Tecnologías necesarias
---
Primero que nada, debes tener instalado un editor de código, personalmente recomiento [VsCode](https://code.visualstudio.com/) y de hecho comparto la configuración que uso para estandarizar el lintern. Adicionalmente a esto solo necesitaras tener instalado [Node.js](https://nodejs.org/es) a partir de la version 14. Lejos de eso no necesitarás nada más para comenzar a desarrollar en tu entorno local. Ojo si deseas desplegar en un entorno de producción te recomiendo ampliamente revisar [Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/es/) y [Serverless Framework](https://www.serverless.com/).

## Arquitectura
---
El código fuente del proyecto se centra en la carpeta ```src```, en donde vas a encontrar todos los archivos necesarios para ejecutar el proeycto y en donde podrás desarrollar tu código para tu proyecto. Hay 3 carpetas principales y 2 carpetas de configuración e implementación:

## Carpetas principales

### Aplication
---
En esta se organizan todas las clases, funciones e interfaces necesarias para la definición de la lógica de negocios de la aplicación, aquí se encuentran: 

- Casos de uso
- Exepciones
- Modelos
- Puertos
- Servicios

Procura que tu lógica tenga un muy bajo acoplamiento, te puedes ayudar del pequeño sistema de inyección de dependencias.

### Domain
---
En esta carpeta se organizan todas las interfaces entre la capa de aplicación y la capa de infraestructura, son básicamente abstracciones de la lógica de implementación de la infraestructura para ser aplicada a los servicios y casos de uso, aquí se encuentran:

- Entities
- Repositories

### Infrastructure
---
En esta carpeta se encuentran todas las abstracciones de la infraestructura en donde se va a desplegar el software y con las que va a interactuar, las clases son adaptadoras, aqui puedes organizar:

- Adaptadores de bases de datos
- Adaptadores de consumers y publishers de servicios de streams de datos
- Adaptadores con SDK's de servicios de terceros

## Carpetas de configuración
### Core
---
En esta carpeta se encuentran las implementaciones necesarias para hacer funcionar el proyecto, aqui se encuentran: 

- El inyector de dependencias
- La aplicacion http
- El servidor http

### Configs
---

En esta carpeta se encuentran todas las configuraciones generales del proyecto, tambien se encuentran los registros de las clases para el sistema de inyección de dependencias