// === Implementación orientada a objetos del sistema de mapa ===

class Lugar {
  constructor(data) {
    this.nombre = data.nombre;
    this.componente = data.componente;
    this.latitud = data.latitud;
    this.longitud = data.longitud;
    this.direccion = data.direccion;
    this.foto = data.foto;
    this.marcador = null;
  }

  mostrarEnMapa(map, icono, callbackClick) {
    this.marcador = L.marker([this.latitud, this.longitud], { icon: icono })
      .addTo(map)
      .on('click', () => callbackClick(this));
  }

  eliminarDelMapa(map) {
    if (this.marcador) {
      map.removeLayer(this.marcador);
      this.marcador = null;
    }
  }
}

class GestorLugares {
  constructor(map) {
    this.map = map;
    this.lugares = [];
    this.marcadoresPorComponente = {};
    this.equivalencias = { Cultural: "Vivienda" };
  }

  async cargarDesdeJSON(ruta) {
    try {
      const res = await fetch(ruta);
      const data = await res.json();
      this.lugares = data.map(d => {
        if (this.equivalencias[d.componente]) {
          d.componente = this.equivalencias[d.componente];
        }
        return new Lugar(d);
      });
      console.log("Lugares cargados:", this.lugares);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  filtrarPorComponente(componente) {
    return this.lugares.filter(l => l.componente === componente);
  }

  mostrarMarcadores(componente, callbackClick) {
    const icono = L.icon({
      iconUrl: `fotos/pagina/${componente.toLowerCase()}.png`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }); 

    const filtrados = this.filtrarPorComponente(componente);
    this.marcadoresPorComponente[componente] = filtrados;

    filtrados.forEach(lugar => lugar.mostrarEnMapa(this.map, icono, callbackClick));
  }

  ocultarMarcadores(componente) {
    if (this.marcadoresPorComponente[componente]) {
      this.marcadoresPorComponente[componente].forEach(lugar => lugar.eliminarDelMapa(this.map));
      delete this.marcadoresPorComponente[componente];
    }
  }
}

class PanelUI {
  constructor() {
    this.panelOpciones = document.getElementById('panel-opciones');
    this.panelLugar = document.getElementById('panel-lugar');
    this.contenidoLugar = document.getElementById('contenido-lugar');
  }

  togglePanelOpciones() {
    this.panelOpciones.classList.toggle('mostrar');
  }

  ocultarPanelOpciones() {
    this.panelOpciones.classList.remove('mostrar');
  }

  mostrarPanelLugar(lugar) {
    this.contenidoLugar.innerHTML = `
      <h2>${lugar.nombre}</h2>
      <p><strong>Dirección:</strong> ${lugar.direccion}</p>
      <p><strong>Componente:</strong> ${lugar.componente}</p>
      <p><strong>Coordenadas:</strong><br>
      Latitud: ${lugar.latitud.toFixed(6)}<br>
      Longitud: ${lugar.longitud.toFixed(6)}</p>
      <img src="${lugar.foto}" alt="${lugar.nombre}" width="100%">
    `;
    this.panelLugar.classList.add('mostrar');
  }

  ocultarPanelLugar() {
    this.panelLugar.classList.remove('mostrar');
  }
}

class AppMapa {
  constructor() {
    this.map = L.map('map').setView([10.423141, -75.545602], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.panelUI = new PanelUI();
    this.gestor = new GestorLugares(this.map);

    this.configurarEventos();
  }

  async iniciar() {
    await this.gestor.cargarDesdeJSON('datos.json');
  }

  configurarEventos() {
    document.querySelectorAll('.filtro').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const componente = checkbox.dataset.componente;
        if (checkbox.checked) {
          this.gestor.mostrarMarcadores(componente, (lugar) => this.panelUI.mostrarPanelLugar(lugar));
        } else {
          this.gestor.ocultarMarcadores(componente);
        }
      });
    });

    const boton = document.querySelector('.boton-personalizado');
    boton.addEventListener('click', () => this.panelUI.togglePanelOpciones());

    document.addEventListener('click', (event) => {
      const esPanelOpciones = this.panelUI.panelOpciones.contains(event.target);
      const esBoton = boton.contains(event.target);
      const esPanelLugar = this.panelUI.panelLugar.contains(event.target);
      const esMarcador = event.target.closest('.leaflet-marker-icon');

      if (!esPanelOpciones && !esBoton) {
        this.panelUI.ocultarPanelOpciones();
      }

      if (!esPanelLugar && !esMarcador) {
        this.panelUI.ocultarPanelLugar();
      }
    });

    document.getElementById('cerrar-panel-lugar')
      .addEventListener('click', () => this.panelUI.ocultarPanelLugar());
  }
}

const app = new AppMapa();
app.iniciar();
