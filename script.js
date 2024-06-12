// script.js

// Datos de mármoles (puedes reemplazar esto con datos dinámicos si es necesario)
const marmoles = [
     { nombre: "Blanco Carrara", color: "Blanco", localidad: "Varias Regiones", imagen: "ruta/a/imagen1.jpg", enlace: "https://Marbify.com/blanco-carrara" },
    { nombre: "Blanco Almería", color: "Blanco", localidad: "Almería", imagen: "ruta/a/imagen2.jpg", enlace: "https://Marbify.com/blanco-almeria" },
    { nombre: "Blanco Macael", color: "Blanco", localidad: "Almería", imagen: "ruta/a/imagen3.jpg", enlace: "https://Marbify.com/blanco-macael" },
    { nombre: "Blanco Ibiza", color: "Blanco", localidad: "Ibiza", imagen: "ruta/a/imagen4.jpg", enlace: "https://Marbify.com/blanco-ibiza" },
    { nombre: "Blanco Tranco", color: "Blanco", localidad: "Almería", imagen: "ruta/a/imagen5.jpg", enlace: "https://Marbify.com/blanco-tranco" },
    { nombre: "Crema Valencia", color: "Crema", localidad: "Valencia", imagen: "ruta/a/imagen6.jpg", enlace: "https://Marbify.com/crema-valencia" },
    { nombre: "Crema Nacarado", color: "Crema", localidad: "Alicante", imagen: "ruta/a/imagen7.jpg", enlace: "https://Marbify.com/crema-nacarado" },
    { nombre: "Crema Marfil", color: "Crema", localidad: "Alicante", imagen: "ruta/a/imagen8.jpg", enlace: "https://Marbify.com/crema-marfil" },
    { nombre: "Crema Coto", color: "Crema", localidad: "Alicante", imagen: "ruta/a/imagen9.jpg", enlace: "https://Marbify.com/crema-coto" },
    { nombre: "Crema Levante", color: "Crema", localidad: "Alicante", imagen: "ruta/a/imagen10.jpg", enlace: "https://Marbify.com/crema-levante" },
    { nombre: "Beige Perlato", color: "Beige", localidad: "Almería", imagen: "ruta/a/imagen11.jpg", enlace: "https://Marbify.com/beige-perlato" },
    { nombre: "Beige Alhambra", color: "Beige", localidad: "Granada", imagen: "ruta/a/imagen12.jpg", enlace: "https://Marbify.com/beige-alhambra" },
    { nombre: "Beige Levante", color: "Beige", localidad: "Alicante", imagen: "ruta/a/imagen13.jpg", enlace: "https://Marbify.com/beige-levante" },
    { nombre: "Beige Sierra Elvira", color: "Beige", localidad: "Granada", imagen: "ruta/a/imagen14.jpg", enlace: "https://Marbify.com/beige-sierra-elvira" },
    { nombre: "Rojo Levante", color: "Rojo", localidad: "Alicante", imagen: "ruta/a/imagen15.jpg", enlace: "https://Marbify.com/rojo-levante" },
    { nombre: "Rojo Alhambra", color: "Rojo", localidad: "Granada", imagen: "ruta/a/imagen16.jpg", enlace: "https://Marbify.com/rojo-alhambra" },
    { nombre: "Rojo Coralito", color: "Rojo", localidad: "Murcia", imagen: "ruta/a/imagen17.jpg", enlace: "https://Marbify.com/rojo-coralito" },
    { nombre: "Rojo Cehegin", color: "Rojo", localidad: "Murcia", imagen: "ruta/a/imagen18.jpg", enlace: "https://Marbify.com/rojo-cehegin" },
    { nombre: "Negro Canfranc", color: "Negro", localidad: "Huesca", imagen: "ruta/a/imagen19.jpg", enlace: "https://Marbify.com/negro-canfranc" },
    { nombre: "Negro Bilbao", color: "Negro", localidad: "Vizcaya", imagen: "ruta/a/imagen20.jpg", enlace: "https://Marbify.com/negro-bilbao" },
    { nombre: "Negro Marquina", color: "Negro", localidad: "Vizcaya", imagen: "ruta/a/imagen21.jpg", enlace: "https://Marbify.com/negro-marquina" },
    { nombre: "Negro Calatorao", color: "Negro", localidad: "Zaragoza", imagen: "ruta/a/imagen22.jpg", enlace: "https://Marbify.com/negro-calatorao" },
    { nombre: "Verde Almería", color: "Verde", localidad: "Almería", imagen: "ruta/a/imagen23.jpg", enlace: "https://Marbify.com/verde-almeria" },
    { nombre: "Verde Levante", color: "Verde", localidad: "Alicante", imagen: "ruta/a/imagen24.jpg", enlace: "https://Marbify.com/verde-levante" },
    { nombre: "Verde Indalo", color: "Verde", localidad: "Almería", imagen: "ruta/a/imagen25.jpg", enlace: "https://Marbify.com/verde-indalo" },
    { nombre: "Verde Macael", color: "Verde", localidad: "Almería", imagen: "ruta/a/imagen26.jpg", enlace: "https://Marbify.com/verde-macael" },
    { nombre: "Gris Cadalso", color: "Gris", localidad: "Madrid", imagen: "ruta/a/imagen27.jpg", enlace: "https://Marbify.com/gris-cadalso" },
    { nombre: "Gris Zarci", color: "Gris", localidad: "Jaén", imagen: "ruta/a/imagen28.jpg", enlace: "https://Marbify.com/gris-zarci" },
    { nombre: "Gris Macael", color: "Gris", localidad: "Almería", imagen: "ruta/a/imagen29.jpg", enlace: "https://Marbify.com/gris-macael" },
    { nombre: "Gris Pulpis", color: "Gris", localidad: "Castellón", imagen: "ruta/a/imagen30.jpg", enlace: "https://Marbify.com/gris-pulpis" },
    { nombre: "Amarillo Macael", color: "Amarillo", localidad: "Almería", imagen: "ruta/a/imagen31.jpg", enlace: "https://Marbify.com/amarillo-macael" },
    { nombre: "Amarillo Triana", color: "Amarillo", localidad: "Sevilla", imagen: "ruta/a/imagen32.jpg", enlace: "https://Marbify.com/amarillo-triana" },
    { nombre: "Rosa Levante", color: "Rosa", localidad: "Alicante", imagen: "ruta/a/imagen33.jpg", enlace: "https://Marbify.com/rosa-levante" },
    { nombre: "Rosa Portugués", color: "Rosa", localidad: "Badajoz", imagen: "ruta/a/imagen34.jpg", enlace: "https://Marbify.com/rosa-portugues" },
    { nombre: "Rosa Zarci", color: "Rosa", localidad: "Jaén", imagen: "ruta/a/imagen35.jpg", enlace: "https://Marbify.com/rosa-zarci" },
    { nombre: "Rosa Valencia", color: "Rosa", localidad: "Valencia", imagen: "ruta/a/imagen36.jpg", enlace: "https://Marbify.com/rosa-valencia" },
    { nombre: "Azul Levante", color: "Azul", localidad: "Alicante", imagen: "ruta/a/imagen37.jpg", enlace: "https://Marbify.com/azul-levante" },
    { nombre: "Azul Macael", color: "Azul", localidad: "Almería", imagen: "ruta/a/imagen38.jpg", enlace: "https://Marbify.com/azul-macael" },
    { nombre: "Marrón Emperador", color: "Marrón", localidad: "Murcia", imagen: "ruta/a/imagen39.jpg", enlace: "https://Marbify.com/marron-emperador" },
    { nombre: "Marrón Imperial", color: "Marrón", localidad: "Murcia", imagen: "ruta/a/imagen40.jpg", enlace: "https://Marbify.com/marron-imperial" },
    { nombre: "Marrón Levante", color: "Marrón", localidad: "Alicante", imagen: "ruta/a/imagen41.jpg", enlace: "https://Marbify.com/marron-levante" },
    { nombre: "Dorado Macael", color: "Dorado", localidad: "Almería", imagen: "ruta/a/imagen42.jpg", enlace: "https://Marbify.com/dorado-macael" },
    { nombre: "Dorado Levante", color: "Dorado", localidad: "Alicante", imagen: "ruta/a/imagen43.jpg", enlace: "https://Marbify.com/dorado-levante" },
    { nombre: "Multicolor Macael", color: "Multicolor", localidad: "Almería", imagen: "ruta/a/imagen44.jpg", enlace: "https://Marbify.com/multicolor-macael" },
    { nombre: "Multicolor Levante", color: "Multicolor", localidad: "Alicante", imagen: "ruta/a/imagen45.jpg", enlace: "https://Marbify.com/multicolor-levante" }
];

// Función para mostrar los mármoles
function displayMarmoles(marmoles) {
    const container = document.getElementById('marmolContainer');
    container.innerHTML = ''; // Limpiar el contenedor

    marmoles.forEach(({ imagen, nombre, localidad }) => {
        const marmolDiv = document.createElement('div');
        marmolDiv.classList.add('col-md-4', 'marmol');
        marmolDiv.innerHTML = `
            <img src="${imagen}" alt="${nombre}">
            <h2>${nombre}</h2>
            <p>Localidad: ${localidad}</p>
            <p class="en-stock">En stock</p>
        `;
        container.appendChild(marmolDiv);
    });
}

// Función para filtrar y buscar mármoles
function filterMarmoles() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const colorFilter = document.getElementById('colorFilter').value;
    const localidadFilter = document.getElementById('localidadFilter').value;

    const filteredMarmoles = marmoles.filter(({ nombre, color, localidad }) => {
        const matchesSearch = nombre.toLowerCase().includes(searchValue);
        const matchesColor = !colorFilter || color === colorFilter;
        const matchesLocalidad = !localidadFilter || localidad === localidadFilter;
        return matchesSearch && matchesColor && matchesLocalidad;
    });

    displayMarmoles(filteredMarmoles);
}

// Event listeners
document.getElementById('searchButton').addEventListener('click', filterMarmoles);
document.getElementById('search').addEventListener('input', filterMarmoles);
document.getElementById('colorFilter').addEventListener('change', filterMarmoles);
document.getElementById('localidadFilter').addEventListener('change', filterMarmoles);

// Mostrar todos los mármoles al cargar la página
document.addEventListener('DOMContentLoaded', () => displayMarmoles(marmoles));
