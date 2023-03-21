<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Car DealerShip

Este es un ejemplo practico de un CRUD de marcas y autos en Nestjs
```
localhost:3000/brands
localhost:3000/cars
```

# Instalación
Este proyecto se desarrollo utilizando la versión de Node v18.15.0.
* Instalar [Nodejs v18.15.0](https://nodejs.org/download/release/v18.15.0/) para su Sistema Operativo
* Descargar el proyecto
* Instalar Yarn globalmente  ``npm install -g yarn``
* Instalar dependencias ``yarn install``
* Levantar servidor en desarrollo ``yarn start:dev``

Populate DB
```
http://localhost:3000/seed
```


## **brands**

**GET**: Obtener todas las marcas
```
http://localhost:3000/brands
```

**GET**: Obtener una marca por el uuid 
```
http://localhost:3000/brands/{uuid}
```

**POST**: crear una nueva marca
```
http://localhost:3000/brands
```
body:
```javascript
{
  name: "Honda",
}
```

**PATCH**: actualizar marca
```
http://localhost:3000/brands/{uuid}
```
body:
```javascript
{
  name: "Honda2",
}
```

**DELETE**: Delete brand
```
http://localhost:3000/{uuid}
```

## **cars**

**GET**: Obtener todos los autos
```
http://localhost:3000/cars
```

**GET**: Obtener un auto por uuid
```
http://localhost:3000/cars/{uuid}
```

**POST**: crear un nuevo auto
```
http://localhost:3000/cars
```
body:
```javascript
{
  brand: "Honda"
  model: "Civic",
}
```

**PATCH**: Actualizar un auto
```
http://localhost:3000/cars/{uuid}
```
body:
```javascript
{
  brand: "Honda2",
  model: "Civic2"
}
```

**DELETE**: Borrar un auto por uuid
```
http://localhost:3000/cars/{uuid}
```