const CONFIG = {
    nombreOptica: "Óptica Visión Clara",
    telefonoWhatsApp: "5219621234567",
    telefonoLlamada: "962 123 4567",
    enlaceGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Optica+Centro+Tapachula",
    direccionTexto: "Zona Centro, 30700 Tapachula de Córdova y Ordóñez, Chis."
};

const catalogoProductos = [
    {
        id: 1,
        nombre: "Paquete Completo: Armazón + Micas Filtro Azul",
        precio: 950,
        categoria: "paquetes",
        etiqueta: "Más pedido ⭐",
        imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
        detalles: ["Incluye Examen de la Vista gratis", "Armazón a elegir de línea seleccionada", "Micas graduadas con protección Blue Block", "Incluye estuche rígido y microfibra"],
        descripcion: "Nuestro paquete estrella ideal para estudiantes y trabajo en computadora. Protege tus ojos de las pantallas con tu graduación exacta."
    },
    {
        id: 2,
        nombre: "Paquete Fotocromático (Se oscurecen con el sol)",
        precio: 1250,
        categoria: "paquetes",
        etiqueta: "Ideal para Tapachula ☀️",
        imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        detalles: ["Incluye Examen de la Vista", "Micas que se oscurecen al sol (UV400)", "Tratamiento Antirreflejante incluido", "Estuche y líquido limpiador"],
        descripcion: "Olvídate de cambiar de lentes al salir a la calle. Claros adentro y oscuros bajo el sol intenso de Tapachula."
    },
    {
        id: 3,
        nombre: "Paquete Básico: Armazón + Micas Antirreflejantes",
        precio: 690,
        categoria: "paquetes",
        etiqueta: "Económico",
        imagen: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80",
        detalles: ["Incluye Examen de la Vista", "Micas monofocales con Antirreflejante", "Armazón ligero y resistente", "Entrega rápida"],
        descripcion: "Excelente opción económica y completa para renovar tus lentes con visión nítida y sin reflejos."
    },
    {
        id: 4,
        nombre: "Paquete Progresivo Invisible (Vista Lejana y Cercana)",
        precio: 1890,
        categoria: "paquetes",
        etiqueta: "Adultos",
        imagen: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80",
        detalles: ["Micas progresivas sin línea visible", "Visión de lejos, intermedia y lectura", "Antirreflejante incluido", "Garantía de adaptación"],
        descripcion: "Diseñado para ver con total claridad a cualquier distancia sin tener que quitarte o cambiar de lentes."
    },
    {
        id: 5,
        nombre: "Promoción 2x1 en Lentes Graduados",
        precio: 1450,
        categoria: "paquetes",
        etiqueta: "Promoción 2x1",
        imagen: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80",
        detalles: ["2 Armazones + 2 pares de micas graduadas", "Puedes compartirlo con un familiar", "Incluye examen visual para ambos", "Estuches incluidos"],
        descripcion: "Llévate dos lentes completos graduados (puedes elegir uno transparente y otro solar graduado, o compartir la promoción)."
    },
    {
        id: 6,
        nombre: "Armazón Cat-Eye Dorado Rosé",
        precio: 780,
        categoria: "dama",
        etiqueta: "Tendencia",
        imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
        detalles: ["Acero inoxidable ultraligero", "Plaquetas nasales suaves ajustables", "Apto para cualquier graduación", "Diseño femenino elegante"],
        descripcion: "Silueta estilo Cat-Eye en tono oro rosa que estiliza las facciones del rostro con gran ligereza."
    },
    {
        id: 7,
        nombre: "Armazón Acetato Cristal Transparente",
        precio: 680,
        categoria: "dama",
        etiqueta: "Muy ligero",
        imagen: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80",
        detalles: ["Acetato transparente de alta resistencia", "Bisagras metálicas reforzadas", "Combina con cualquier outfit", "Listo para graduar"],
        descripcion: "Uno de los modelos más buscados por su estética minimalista que ilumina el rostro."
    },
    {
        id: 8,
        nombre: "Armazón Carey Vintage Redondo",
        precio: 720,
        categoria: "dama",
        etiqueta: "Clásico",
        imagen: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80",
        detalles: ["Acabado carey artesanal", "Varillas con alma de metal", "Muy cómodo en puente nasal", "Apto para micas gruesas o delgadas"],
        descripcion: "Diseño intelectual y moderno en tonos ámbar y café que nunca pasa de moda."
    },
    {
        id: 9,
        nombre: "Armazón Hexagonal Geométrico Fino",
        precio: 820,
        categoria: "dama",
        etiqueta: "Nuevo",
        imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        detalles: ["Metal delgado en tono dorado", "Terminales recubiertas en acetato", "Peso pluma (no deja marcas)", "Incluye estuche"],
        descripcion: "Diseño geométrico juvenil de alta tendencia, súper cómodo para usar todo el día."
    },
    {
        id: 10,
        nombre: "Armazón Ejecutivo Bicolor Borgoña",
        precio: 750,
        categoria: "dama",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80",
        detalles: ["Frente en tono vino y varillas doradas", "Ideal para micas monofocales o progresivas", "Gran durabilidad", "Disponible en sucursal"],
        descripcion: "Elegancia formal con un toque de color sutil, ideal para oficina y lectura."
    },
    {
        id: 11,
        nombre: "Armazón Rectangular Negro Mate",
        precio: 740,
        categoria: "caballero",
        etiqueta: "Favorito",
        imagen: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=600&q=80",
        detalles: ["Material TR90 flexible e indeformable", "Acabado negro mate antideslizante", "Varillas con resorte flex", "Apto para toda graduación"],
        descripcion: "Diseño sobrio, masculino y sumamente resistente al uso diario."
    },
    {
        id: 12,
        nombre: "Armazón Titanio Medio Aire Ejecutivo",
        precio: 920,
        categoria: "caballero",
        etiqueta: "Titanio",
        imagen: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
        detalles: ["Aleación de titanio inoxidable", "Diseño medio marco (semi-al aire)", "Hipoalergénico y ultraligero", "Ideal para progresivos o visión sencilla"],
        descripcion: "Comodidad superior casi imperceptible en el rostro, con acabado formal de alta gama."
    },
    {
        id: 13,
        nombre: "Armazón Aviador Oftálmico Metálico",
        precio: 790,
        categoria: "caballero",
        etiqueta: "Estilo Aviador",
        imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        detalles: ["Doble puente metálico clásico", "Disponible en plata, negro y dorado", "Campo visual amplio", "Excelente con micas fotocromáticas"],
        descripcion: "El icónico diseño aviador adaptado para lentes graduados de uso diario."
    },
    {
        id: 14,
        nombre: "Armazón Deportivo Ligero con Agarre",
        precio: 690,
        categoria: "caballero",
        etiqueta: "Resistente",
        imagen: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=600&q=80",
        detalles: ["Terminales engomadas que no resbalan con el sudor", "Marco envolvente", "Alta resistencia a impactos", "Ideal con micas de policarbonato"],
        descripcion: "Perfecto para quienes trabajan en movimiento, manejan motocicleta o practican deporte en Tapachula."
    },
    {
        id: 15,
        nombre: "Armazón con 5 Sobrepuestos Magnéticos (Clip-On)",
        precio: 1150,
        categoria: "sol",
        etiqueta: "5 en 1 Magnético",
        imagen: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
        detalles: ["1 Armazón para graduar", "Incluye mica polarizada negra, espejo, ámbar nocturna y café", "Imán invisible de sujeción firme", "Estuche organizador incluido"],
        descripcion: "Convierte tus lentes graduados en lentes de sol polarizados en un segundo gracias a sus clips magnéticos."
    },
    {
        id: 16,
        nombre: "Lentes de Sol Polarizados UV400 (Con o sin graduación)",
        precio: 650,
        categoria: "sol",
        etiqueta: "Polarizado UV",
        imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        detalles: ["Filtro 100% UV400", "Elimina el deslumbramiento en carretera", "Se pueden pedir con tu graduación solar", "Varios diseños disponibles"],
        descripcion: "Protección total contra la radiación solar con máxima nitidez al conducir bajo el sol."
    },
    {
        id: 17,
        nombre: "Micas Graduadas con Tinte Solar o Espejeado",
        precio: 850,
        categoria: "sol",
        etiqueta: "Graduados de Sol",
        imagen: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80",
        detalles: ["Tu graduación exacta en lente oscuro", "Tonos gris, verde G15, café o degradado", "Protección UV completa", "Adaptable a cualquier armazón"],
        descripcion: "No sacrifiques tu vista al usar lentes de sol: graduamos tus micas oscuras con el color que más te guste."
    },
    {
        id: 18,
        nombre: "Armazón Infantil Irrompible y Flexible (Silicona)",
        precio: 620,
        categoria: "ninos",
        etiqueta: "Niños Irrompible",
        imagen: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80",
        detalles: ["Material hipoalergénico que se dobla sin romperse", "Sin piezas metálicas ni tornillos", "Incluye banda sujetadora ajustable", "Varios colores divertidos"],
        descripcion: "Especial para niños en edad escolar: cómodos, seguros e imposibles de quebrar jugando."
    },
    {
        id: 19,
        nombre: "Caja de Lentes de Contacto Graduados (Miopía / Astigmatismo)",
        precio: 580,
        categoria: "ninos",
        etiqueta: "Lentes de Contacto",
        imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
        detalles: ["Alta oxigenación e hidratación", "Disponibles esféricos y tóricos (astigmatismo)", "Asesoría de colocación sin costo", "Solución limpiadora disponible"],
        descripcion: "Libertad visual total con lentes de contacto suaves de reemplazo mensual."
    },
    {
        id: 20,
        nombre: "Cambio de Micas a tu Propio Armazón",
        precio: 450,
        categoria: "ninos",
        etiqueta: "Conserva tu armazón",
        imagen: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80",
        detalles: ["Aprovecha el armazón que ya tienes", "Desde $450 según graduación y tratamiento", "Incluye ajuste y limpieza ultrasónica", "Examen de la vista incluido"],
        descripcion: "¿Tu armazón sigue en buen estado pero ya cambió tu graduación o se rayaron tus micas? Nosotros le colocamos micas nuevas."
    }
];

const gridCatalogo = document.getElementById("catalogo-grid");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const inputBuscador = document.getElementById("input-buscador");
const modal = document.getElementById("modal-lente");
const btnCerrarModal = document.getElementById("cerrar-modal");

let categoriaActual = "todos";

const nombresCategorias = {
    paquetes: "Paquetes Completos con Micas",
    dama: "Colección Dama",
    caballero: "Colección Caballero",
    sol: "Solares y Clip-On Magnéticos",
    ninos: "Infantil, Contacto y Servicios"
};

function mostrarProductos(lista) {
    gridCatalogo.innerHTML = "";

    if (lista.length === 0) {
        gridCatalogo.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px; font-weight:600;">No encontramos ese modelo en la lista, ¡pero escríbenos por WhatsApp para mostrarte más opciones en vitrina! 👓</p>`;
        return;
    }

    lista.forEach((item) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-lente";

        const etiquetaHTML = item.etiqueta 
            ? `<span class="etiqueta-card">${item.etiqueta}</span>` 
            : "";

        tarjeta.innerHTML = `
            <div class="img-lente-caja">
                ${etiquetaHTML}
                <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
            </div>
            <div class="cuerpo-lente">
                <div>
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                </div>
                <div class="pie-lente">
                    <span class="precio-lente">$${item.precio} MXN</span>
                    <button class="btn-detalles-lente">Ver detalles 👓</button>
                </div>
            </div>
        `;

        tarjeta.addEventListener("click", () => abrirModal(item));
        gridCatalogo.appendChild(tarjeta);
    });
}

function filtrarYBuscar() {
    const texto = inputBuscador.value.toLowerCase().trim();

    const filtrados = catalogoProductos.filter((item) => {
        const coincideCategoria = categoriaActual === "todos" || item.categoria === categoriaActual;
        const coincideTexto = item.nombre.toLowerCase().includes(texto) || 
                              item.descripcion.toLowerCase().includes(texto) ||
                              item.detalles.some(d => d.toLowerCase().includes(texto));
        return coincideCategoria && coincideTexto;
    });

    mostrarProductos(filtrados);
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");
        categoriaActual = boton.getAttribute("data-categoria");
        filtrarYBuscar();
    });
});

inputBuscador.addEventListener("input", filtrarYBuscar);

function abrirModal(item) {
    document.getElementById("modal-img").src = item.imagen;
    document.getElementById("modal-titulo").textContent = item.nombre;
    document.getElementById("modal-precio").textContent = `$${item.precio} MXN`;
    document.getElementById("modal-descripcion").textContent = item.descripcion;
    document.getElementById("modal-categoria").textContent = nombresCategorias[item.categoria] || CONFIG.nombreOptica;

    const etiquetaModal = document.getElementById("modal-etiqueta");
    if (item.etiqueta) {
        etiquetaModal.textContent = item.etiqueta;
        etiquetaModal.style.display = "inline-block";
    } else {
        etiquetaModal.style.display = "none";
    }

    const listaDetalles = document.getElementById("modal-detalles");
    listaDetalles.innerHTML = "";
    item.detalles.forEach((detalle) => {
        const li = document.createElement("li");
        li.textContent = `✔️ ${detalle}`;
        listaDetalles.appendChild(li);
    });

    const mensaje = `Hola ${CONFIG.nombreOptica}, vi en su catálogo web el *${item.nombre}* ($${item.precio} MXN) y me gustaría consultar disponibilidad o cotizarlo con mi graduación.`;
    document.getElementById("modal-btn-whatsapp").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    modal.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    modal.classList.remove("activo");
    document.body.style.overflow = "auto";
}

btnCerrarModal.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });

document.getElementById("btn-enviar-cita").addEventListener("click", () => {
    const motivo = document.getElementById("cita-motivo").value;
    const dia = document.getElementById("cita-dia").value;
    const turno = document.getElementById("cita-turno").value;

    const mensajeCita = `Hola ${CONFIG.nombreOptica}, me gustaría agendar una cita desde su página web:\n• *Servicio:* ${motivo}\n• *Día:* ${dia}\n• *Horario:* ${turno}\n¿Tienen espacio disponible?`;
    const urlCita = `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(mensajeCita)}`;
    window.open(urlCita, "_blank");
});

function inicializarEnlacesContacto() {
    const msgGeneral = `Hola ${CONFIG.nombreOptica}, vi su página web y me gustaría pedir informes sobre lentes o examen de la vista.`;
    document.getElementById("btn-whatsapp-flotante").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgGeneral)}`;

    document.getElementById("btn-google-maps").href = CONFIG.enlaceGoogleMaps;
    document.getElementById("texto-direccion").textContent = CONFIG.direccionTexto;

    const numeroLimpio = CONFIG.telefonoLlamada.replace(/\s+/g, "");
    document.getElementById("btn-llamar").href = `tel:+52${numeroLimpio}`;
    document.getElementById("numero-visible").textContent = CONFIG.telefonoLlamada;
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarEnlacesContacto();
    mostrarProductos(catalogoProductos);
});