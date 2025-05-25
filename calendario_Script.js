const calendar = document.getElementById("calendar");
const eventList = document.getElementById("event-list");
const tituloMes = document.getElementById("titulo-mes");

const eventos = {
  "2025-05-14": ["Exposición de Arte Moderno - Museo - Louvre"],
  "2025-05-20": ["Fotografía Urbana", "Taller de Escultura - Museo Louvre"],
  "2025-05-27": ["Pintura Impresionista - Museo Louvre"],
};

const hoy = new Date();
const year = hoy.getFullYear();
const month = hoy.getMonth(); // 0 = enero, 4 = mayo

const nombresMeses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];


tituloMes.textContent = `${nombresMeses[month]} ${year}`;

const primerDia = new Date(year, month, 1).getDay();
const diasEnMes = new Date(year, month + 1, 0).getDate();


const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
diasSemana.forEach(d => {
  const div = document.createElement("div");
  div.textContent = d;
  div.style.fontWeight = "bold";
  calendar.appendChild(div);
});


for (let i = 0; i < primerDia; i++) {
  const blank = document.createElement("div");
  calendar.appendChild(blank);
}


for (let dia = 1; dia <= diasEnMes; dia++) {
  const fechaStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
  const div = document.createElement("div");
  div.className = "day";
  div.textContent = dia;

  if (eventos[fechaStr]) {
    div.classList.add("has-event");
    div.addEventListener("click", () => mostrarEventos(fechaStr));
  }

  calendar.appendChild(div);
}

function mostrarEventos(fecha) {
  const eventosDelDia = eventos[fecha];
  eventList.innerHTML = `
    <h2>Eventos para el ${fecha}</h2>
    <ul>${eventosDelDia.map(ev => `<li>${ev}</li>`).join("")}</ul>
  `;
  eventList.style.display = "block";
}
