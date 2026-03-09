/* ========================================
   LED SETUP PRO - JAVASCRIPT
   ======================================== */

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close mobile menu after click
        navLinks.classList.remove('active');
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const details = contactForm.querySelector('textarea').value;

    // Show success message
    alert(`🚀 Thanks ${name}! Your message has been sent.\n\nWe'll contact you at ${email} soon!`);
    
    // Reset form
    contactForm.reset();

    // Note: Backend integration ke liye ye data server pe bhejna hoga
    // Abhi ke liye sirf alert dikha rahe hain
    console.log('Form Submitted:', { name, email, phone, details });
});

// Animated Counter for Stats
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const suffix = element.textContent.replace(/[0-9]/g, '');
    let current = 0;
    const increment = target / 50;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            element.textContent = Math.ceil(current) + suffix;
            setTimeout(updateCounter, 30);
        } else {
            element.textContent = target + suffix;
        }
    };
    
    updateCounter();
};

// Intersection Observer for Stats Animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            animateCounter(statNumber);
            observer.unobserve(statNumber);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    observer.observe(stat);
});

// LED Grid Animation Enhancement
const ledGrid = document.querySelector('.led-grid');

if (ledGrid) {
    // Add random LED flicker effect
    setInterval(() => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        const flicker = document.createElement('div');
        flicker.style.position = 'absolute';
        flicker.style.left = randomX + '%';
        flicker.style.top = randomY + '%';
        flicker.style.width = '2px';
        flicker.style.height = '2px';
        flicker.style.background = Math.random() > 0.5 ? '#00f0ff' : '#ff00ff';
        flicker.style.boxShadow = '0 0 10px currentColor';
        flicker.style.opacity = '0.8';
        flicker.style.pointerEvents = 'none';
        
        ledGrid.appendChild(flicker);
        
        setTimeout(() => {
            flicker.remove();
        }, 500);
    }, 200);
}

// Portfolio Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Service Cards Hover Sound Effect (Optional)
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Optional: Add subtle sound effect here
        console.log('Service card hovered');
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console Welcome Message
console.log(`
╔════════════════════════════════════════╗
║     🚀 LED SETUP PRO - LOADED         ║
║     Professional LED Installation      ║
║     Ready to make events brilliant!   ║
╚════════════════════════════════════════╝
`);
