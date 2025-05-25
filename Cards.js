document.addEventListener("DOMContentLoaded", function () {
    const tarjetas = document.querySelectorAll(".tarjeta");
    
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function () {
          
            tarjetas.forEach(t => {
                if (t !== tarjeta) {
                    t.classList.remove("expandida");
                }
            });
      
            tarjeta.classList.toggle("expandida");
        });
    });
});
