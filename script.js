// script.js

// Datos de mármoles (puedes reemplazar esto con datos dinámicos si es necesario)
const marmoles = [
    { nombre: "Blanco Carrara", color: "Blanco", localidad: "Varias Regiones", imagen: "ruta/a/imagen1.jpg" },
    { nombre: "Blanco Almería", color: "Blanco", localidad: "Almería", imagen: "ruta/a/imagen2.jpg" },
    { nombre: "Blanco Macael", color: "Blanco", localidad: "Macael", imagen: "ruta/a/imagen3.jpg" },
    { nombre: "Blanco Ibiza", color: "Blanco", localidad: "Varias Regiones", imagen: "ruta/a/imagen4.jpg" },
    { nombre: "Blanco Tranco", color: "Blanco", localidad: "Varias Regiones", imagen: "ruta/a/imagen5.jpg" },
    { nombre: "Crema Valencia", color: "Crema", localidad: "Varias Regiones", imagen: "ruta/a/imagen6.jpg" },
    { nombre: "Crema Nacarado", color: "Crema", localidad: "Varias Regiones", imagen: "ruta/a/imagen7.jpg" },
    { nombre: "Crema Marfil", color: "Crema", localidad: "Varias Regiones", imagen: "ruta/a/imagen8.jpg" },
    { nombre: "Crema Coto", color: "Crema", localidad: "Varias Regiones", imagen: "ruta/a/imagen9.jpg" },
    { nombre: "Crema Levante", color: "Crema", localidad: "Varias Regiones", imagen: "ruta/a/imagen10.jpg" },
    { nombre: "Beige Perlato", color: "Beige", localidad: "Varias Regiones", imagen: "ruta/a/imagen11.jpg" },
    { nombre: "Beige Alhambra", color: "Beige", localidad: "Varias Regiones", imagen: "ruta/a/imagen12.jpg" },
    { nombre: "Beige Levante", color: "Beige", localidad: "Varias Regiones", imagen: "ruta/a/imagen13.jpg" },
    { nombre: "Beige Sierra Elvira", color: "Beige", localidad: "Varias Regiones", imagen: "ruta/a/imagen14.jpg" },
    { nombre: "Rojo Levante", color: "Rojo", localidad: "Varias Regiones", imagen: "ruta/a/imagen15.jpg" },
    { nombre: "Rojo Alhambra", color: "Rojo", localidad: "Varias Regiones", imagen: "ruta/a/imagen16.jpg" },
    { nombre: "Rojo Alicante", color: "Rojo", localidad: "Varias Regiones", imagen: "ruta/a/imagen17.jpg" },
    { nombre: "Rojo Coralito", color: "Rojo", localidad: "Varias Regiones", imagen: "ruta/a/imagen18.jpg" }
];

// Función para mostrar los mármoles
function displayMarmoles(marmoles) {
    const container = document.getElementById('marmolContainer');
    container.innerHTML = ''; // Limpiar el contenedor

    marmoles.forEach(marmol => {
        const marmolDiv = document.createElement('div');
        marmolDiv.classList.add('col-md-4', 'marmol');
        marmolDiv.innerHTML = `
            <img src="${marmol.imagen}" alt="${marmol.nombre}">
            <h2>${marmol.nombre}</h2>
            <p>Localidad: ${marmol.localidad}</p>
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

    const filteredMarmoles = marmoles.filter(marmol => {
        const matchesSearch = marmol.nombre.toLowerCase().includes(searchValue);
        const matchesColor = colorFilter === '' || marmol.color === colorFilter;
        const matchesLocalidad = localidadFilter === '' || marmol.localidad === localidadFilter;

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
displayMarmoles(marmoles);
