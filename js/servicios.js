// script.js
document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service');

    services.forEach((service, index) => {
        // Aplicar animación de aparición desvanecida
        service.style.opacity = '0';
        service.style.transition = `opacity 0.5s ease ${index * 0.5}s`;

        const description = service.querySelector('p'); 

        service.addEventListener('click', function () {
            this.style.transform = 'scale(1.1)';
            this.style.backgroundColor = '#92C5FC'; 
            description.style.opacity = '1'; 
        });

        service.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#f9f9f9';
            description.style.opacity = '0'; 
        });

       
        window.addEventListener('load', () => {
            setTimeout(() => {
                service.style.opacity = '1';
            }, 300);
        });
    });
});
