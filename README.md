# 🎓 Centro de Investigación HUMANIC

[![Deploy Status](https://github.com/wistermarquez90-oss/humanic-research/actions/workflows/deploy.yml/badge.svg)](https://github.com/wistermarquez90-oss/humanic-research/actions)
[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

Sitio web oficial del **Centro de Investigación Humanic** de la Universidad de Los Andes, sede de la revista científica **FERMENTUM**.

## 🌐 Demo en Vivo

🔗 **[https://wistermarquez90-oss.github.io/humanic-research](https://wistermarquez90-oss.github.io/humanic-research)**

---

## 🎨 Identidad Visual

| Color | Código HEX | Uso |
|-------|-----------|-----|
| **Azul Marino** | `#1e3a5f` | Primario - Headers, textos principales |
| **Verde Natural** | `#2d5a3f` | Secundario - Botones, iconos |
| **Verde Lima Neón** | `#a4e637` | Acento - Highlights, degradados |
| **Bronce** | `#c9a66b` | Soporte - Detalles decorativos |

---

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/      # Layouts de página
│   ├── pages/        # Rutas de la web
│   ├── data/         # Datos estáticos
│   ├── styles/       # Estilos globales
│   └── utils/        # Utilidades
├── public/           # Archivos estáticos
└── .github/          # GitHub Actions
```

---

## 🚀 Cómo Usar Este Repositorio

### 1. Crear tu propio repositorio en GitHub

```bash
# En GitHub: New Repository > "humanic-research" > Public > Create
```

### 2. Clonar y configurar localmente

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/humanic-research.git
cd humanic-research

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 3. Configurar GitHub Pages

1. Ve a **Settings > Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow ya está configurado en `.github/workflows/deploy.yml`

### 4. Hacer deploy

```bash
# Hacer cambios, commit y push
git add .
git commit -m "Initial commit"
git push origin main
```

El sitio se desplegará automáticamente en `https://TU_USUARIO.github.io/humanic-research`

---

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construir para producción |
| `npm run preview` | Previsualizar build local |

---

## 📚 Secciones del Sitio

- **Inicio**: Hero, volumen más reciente de FERMENTUM, artículos destacados, estadísticas
- **Revista FERMENTUM**: Repositorio de ediciones con filtros por año, volumen y etiquetas
- **Directorio de Autores**: Perfiles de investigadores con enlaces a sus publicaciones
- **Quiénes Somos**: Misión, visión, líneas de estudio, equipo editorial
- **Normas de Publicación**: Instrucciones para autores, formato, revisión por pares
- **Contacto**: Formulario, correos institucionales, redes sociales, ubicación

---

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [AOS](https://michalsnik.github.io/aos/) - Animaciones on scroll
- [Lucide](https://lucide.dev/) - Iconos
- [GitHub Pages](https://pages.github.com/) - Hosting

---

## 📄 Licencia

MIT © Centro de Investigación Humanic
