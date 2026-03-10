function toggleMenu(){document.querySelector(".menu").classList.toggle("active");}

window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight-100){
            el.classList.add("active");
        }
    });
});

// tsParticles optimized
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: { color: "#0f1c2c" },
  particles: {
    number: { value: 80, density: { enable: true, area: 900 } },
    color: { value: ["#00f2fe","#ff00cc","#ffeb3b","#00ff99"] },
    shape: { type: ["circle","polygon","star"], options: { sides:6 } },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 4 } },
    links: { enable: true, distance: 120, color: "#00f2fe", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1.2, random: true, straight: false, bounce: true }
  },
  interactivity: { events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }, modes: { repulse: { distance: 100 }, push: { quantity: 4 } } },
  detectRetina: true
});

// Lazy-loaded Lottie
document.addEventListener('DOMContentLoaded', ()=>{
    const lottieContainer = document.getElementById('lottie-hero');
    const path = lottieContainer.dataset.lottiePath;
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    });
});

// Mouse parallax for skills circles
const circles = document.querySelectorAll('.circle');
document.addEventListener('mousemove', e => {
  circles.forEach(c=>{
    const speed = 0.03;
    const x = (window.innerWidth/2 - e.clientX) * speed;
    const y = (window.innerHeight/2 - e.clientY) * speed;
    c.style.transform = `translate(${x}px,${y}px)`;
  });
});