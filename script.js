document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el salto instantáneo
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para la navbar fija
            behavior: "smooth" // Efecto de desplazamiento suave
          });
        }
      });
    });
  });
  