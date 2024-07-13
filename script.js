document.addEventListener('DOMContentLoaded', () => {
    VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xf0e6f6,
        color1: 0xff4e50,
        color2: 0xfc913a,
        colorMode: "lerpGradient",
        birdSize: 1.50,
        wingSpan: 20.00,
        speedLimit: 4.00,
        separation: 50.00,
        alignment: 50.00,
        cohesion: 50.00
    });

    // Modal functionality
    const modalButtons = document.querySelectorAll('.modal-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});
