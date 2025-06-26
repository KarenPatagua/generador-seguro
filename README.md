# 🔐 Generador de Contraseñas Seguras

Este proyecto es una aplicación web moderna y responsive que genera contraseñas seguras al azar y evalúa su nivel de seguridad en tiempo real.  
Está contenerizada usando Docker con la imagen oficial de NGINX en su versión `stable-alpine`.

> Proyecto desarrollado como parte del práctico de **Git + Docker**.

---

## Vista previa

![Generador de Contraseñas Seguras](https://dummyimage.com/900x400/3b82f6/ffffff&text=Generador+de+Contraseñas+Seguras)

---

##  Tecnologías utilizadas

-  HTML5 + CSS3
-  JavaScript Vanilla (sin frameworks)
-  Docker
-  Imagen oficial de `nginx:stable-alpine` desde Docker Hub

---

##  Estructura del Proyecto

```
generador-seguro/
├── index.html
├── style.css
├── script.js
├── Dockerfile
└── README.md
```

---

## 🛠️ ¿Cómo correrlo localmente con Docker?

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/KarenPatagua/generador-seguro
cd generador-seguro
```

---

### 2️⃣ Construir la imagen Docker

```bash
docker build -t generador-seguro .
```

---

### 3️⃣ Ejecutar el contenedor

```bash
docker run -p 8080:80 generador-seguro
```

---

### 4️⃣ Ver la app en tu navegador

Abre:  [http://localhost:8080](http://localhost:8080)

---

##  Funcionalidades

- Botón para generar contraseñas aleatorias
- Indicador de seguridad (débil, media, fuerte)
- Diseño moderno y adaptable
- 100 % funcional sin conexión a internet

---

## Alumna

**Karen Patagua**  
---
