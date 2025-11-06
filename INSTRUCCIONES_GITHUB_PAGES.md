# 🚀 Guía para Publicar en GitHub Pages

## ✅ Ventajas de GitHub Pro para GitHub Pages:

- 🔒 **Repositorios privados**: Puedes tener un sitio público desde un repo privado
- 🌐 **Dominio personalizado**: Configuración avanzada de dominios
- 📊 **GitHub Insights**: Análisis de tráfico y visitantes
- 🚀 **Deploy más rápido**: Prioridad en los builds

---

## 📝 Pasos para Publicar tu Mapa en GitHub Pages

### 1️⃣ Crear el Repositorio en GitHub

✅ **¡YA COMPLETADO!** Tu repositorio fue creado exitosamente.

### 2️⃣ Conectar tu Proyecto Local con GitHub

✅ **¡YA COMPLETADO!** Tu repositorio está en:
`https://github.com/BorreCaro/mapa-getsemani-cartagena.git`

Los comandos ejecutados fueron:

```powershell
# Inicializar el repositorio
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primer commit: Mapa interactivo de Getsemani, Cartagena"

# Renombrar la rama a main
git branch -M main

# Agregar el remote de GitHub
git remote add origin https://github.com/BorreCaro/mapa-getsemani-cartagena.git

# Subir el código a GitHub
git push -u origin main
```

### 3️⃣ Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **"Settings"** (⚙️ Configuración)
3. En el menú izquierdo, busca **"Pages"**
4. En **"Source"** (Fuente):
   - Selecciona **"Deploy from a branch"**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click en **"Save"**

### 4️⃣ Esperar el Deploy

- ⏱️ Tarda entre 1-5 minutos
- Verás un mensaje verde cuando esté listo:
  ```
  Your site is live at https://TU-USUARIO.github.io/mapa-getsemani-cartagena/
  ```

---

## 🌐 Tu Página Estará Disponible en:

```
https://BorreCaro.github.io/mapa-getsemani-cartagena/
```

**📍 Pasos finales para activar GitHub Pages:**

1. Ve a: https://github.com/BorreCaro/mapa-getsemani-cartagena
2. Click en **"Settings"** (⚙️ Configuración)
3. En el menú izquierdo, busca **"Pages"**
4. En **"Source"** (Fuente):
   - Selecciona **"Deploy from a branch"**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click en **"Save"**
6. ⏱️ Espera 1-5 minutos y tu página estará lista en el enlace de arriba

---

## 🔄 Para Actualizar tu Página (después de cambios)

Cada vez que hagas cambios en tu código:

```powershell
# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios realizados"

# Subir a GitHub
git push
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

---

## 🎨 Personalizaciones Opcionales

### Configurar Dominio Personalizado

1. En Settings → Pages
2. En "Custom domain", ingresa tu dominio
3. Configura los DNS según las instrucciones

### Agregar un Favicon

Agrega este código en `index.html` dentro de `<head>`:
```html
<link rel="icon" type="image/png" href="fotos/pagina/comercio.png">
```

### Mejorar SEO

Agrega meta tags en `index.html`:
```html
<meta name="description" content="Mapa interactivo de Getsemaní, Cartagena - Puntos de interés clasificados por comercio, vivienda, ambiente y patrimonio">
<meta name="keywords" content="Getsemaní, Cartagena, mapa, turismo, Colombia">
<meta name="author" content="Pedro Eli Diaz Olarte, Jairo Daniel Jimenez Arzuza">
```

---

## 📱 Compartir tu Proyecto

Una vez publicado, puedes compartir el link:
- En LinkedIn
- En tu CV
- Con profesores
- En redes sociales

---

## 🛠️ Solución de Problemas

### ❌ Error 404 al abrir la página
- Verifica que el archivo se llame `index.html`
- Revisa que GitHub Pages esté activado
- Espera 5 minutos para el primer deploy

### ❌ Las imágenes no cargan
- Verifica que las rutas sean relativas: `fotos/imagen.jpg` (no `D:\...`)
- Las rutas son case-sensitive en GitHub Pages

### ❌ No aparecen los marcadores
- Abre la consola del navegador (F12)
- Revisa que `datos.json` se cargue correctamente
- Verifica las rutas de los iconos en `script.js`

---

## 📞 Ayuda

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Ve a Actions en GitHub para ver errores de deploy
3. Consulta la documentación: https://docs.github.com/pages

---

**¡Tu proyecto está listo para el mundo! 🌍✨**

