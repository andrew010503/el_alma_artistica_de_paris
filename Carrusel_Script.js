document.addEventListener("DOMContentLoaded", function () {
  const calendario = document.getElementById("calendario");
  const mesActual = new Date().getMonth();
  const anioActual = new Date().getFullYear();

  const eventos = [
    { fecha: "2025-05-14", museo: "Museo del Louvre", exposicion: "Impresionismo Francés" },
    { fecha: "2025-05-18", museo: "Museo de Orsay", exposicion: "Escultura Moderna" },
    { fecha: "2025-05-21", museo: "Centro Pompidou", exposicion: "Arte Contemporáneo" },
  ];

  function generarCalendario(mes, anio) {
    const primerDia = new Date(anio, mes, 1);
    const ultimoDia = new Date(anio, mes + 1, 0);
    const diasEnMes = ultimoDia.getDate();

    let tabla = "<table><thead><tr>";
    const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    for (const dia of diasSemana) {
      tabla += `<th>${dia}</th>`;
    }
    tabla += "</tr></thead><tbody><tr>";


    for (let i = 0; i < primerDia.getDay(); i++) {
      tabla += "<td></td>";
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
      const fechaStr = `${anio}-${(mes + 1).toString().padStart(2, "0")}-${dia
        .toString()
        .padStart(2, "0")}`;

      const evento = eventos.find((e) => e.fecha === fechaStr);

      if (evento) {
        tabla += `<td class="evento" title="${evento.museo}: ${evento.exposicion}">${dia}</td>`;
      } else {
        tabla += `<td>${dia}</td>`;
      }

      if ((primerDia.getDay() + dia) % 7 === 0) {
        tabla += "</tr><tr>";
      }
    }

    tabla += "</tr></tbody></table>";
    calendario.innerHTML = tabla;
  }

  generarCalendario(mesActual, anioActual);
});
