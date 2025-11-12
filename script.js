// =========================
// 🚀 Enhanced SkilleR7 Hero Section JavaScript
// =========================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all hero animations and interactions
    initHeroAnimations();
    initScrollIndicator();
    initTrustCounters();
    initFeatureInteractions();
    initParallaxEffects();
    initMouseTracking();
    initShopModal();
    initMobileMenu();
});

// =========================
// 🎬 Hero Animations
// =========================
function initHeroAnimations() {
    // Staggered animation for feature items
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
        const delay = parseInt(item.dataset.delay) || 0;
        
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, delay + 1000);
    });
    
    // Animate floating shapes
    animateFloatingShapes();
    
    // Animate gradient orbs
    animateGradientOrbs();
}

// =========================
// 🎯 Floating Shapes Animation
// =========================
function animateFloatingShapes() {
    // Skip on mobile devices
    if (window.innerWidth < 768) {
        return;
    }
    
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            
            shape.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 500);
    });
}

// =========================
// 🌟 Gradient Orbs Animation
// =========================
function animateGradientOrbs() {
    // Skip on mobile devices
    if (window.innerWidth < 768) {
        return;
    }
    
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        // Add pulsing effect
        setInterval(() => {
            const scale = 1 + Math.random() * 0.3;
            orb.style.transform = `scale(${scale})`;
        }, 2000 + index * 1000);
    });
}

// =========================
// 📊 Trust Counters Animation
// =========================
function initTrustCounters() {
    const trustNumbers = document.querySelectorAll('.trust-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                element.textContent = Math.floor(current / 100) + 'K+';
            } else {
                element.textContent = Math.floor(current) + '%';
            }
        }, 30);
    };
    
    // Intersection Observer for counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                if (text.includes('10K')) {
                    animateCounter(element, 10000);
                } else if (text.includes('50')) {
                    animateCounter(element, 50);
                } else if (text.includes('99')) {
                    animateCounter(element, 99);
                }
                
                observer.unobserve(element);
            }
        });
    });
    
    trustNumbers.forEach(number => {
        observer.observe(number);
    });
}

// =========================
// 🎮 Feature Interactions
// =========================
function initFeatureInteractions() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        // Add click interaction
        item.addEventListener('click', function() {
            // Add ripple effect
            createRippleEffect(this, event);
            
            // Add glow effect
            this.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 1000);
        });
        
        // Add hover sound effect (optional)
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// =========================
// 🌊 Ripple Effect
// =========================
function createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255, 107, 107, 0.3), transparent);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// =========================
// 🎭 Parallax Effects
// =========================
function initParallaxEffects() {
    // Skip parallax effects on mobile devices
    if (window.innerWidth < 768) {
        return;
    }
    
    const heroSection = document.querySelector('#home');
    const shapes = document.querySelectorAll('.shape');
    const orbs = document.querySelectorAll('.orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = 0.3 + (index * 0.1);
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
        
        orbs.forEach((orb, index) => {
            const speed = 0.2 + (index * 0.05);
            orb.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// =========================
// 🖱️ Mouse Tracking
// =========================
function initMouseTracking() {
    // Skip mouse tracking on mobile devices
    if (window.innerWidth < 768) {
        return;
    }
    
    const heroSection = document.querySelector('#home');
    const cursor = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255, 107, 107, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Hide cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .feature-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(78, 205, 196, 0.8), transparent)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(255, 107, 107, 0.8), transparent)';
        });
    });
}

// =========================
// 📜 Scroll Indicator
// =========================
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Hide scroll indicator when scrolled
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
    }
}

// =========================
// 🎨 Dynamic Background
// =========================
function initDynamicBackground() {
    const heroSection = document.querySelector('#home');
    
    // Create dynamic particles
    for (let i = 0; i < 20; i++) {
        createParticle(heroSection);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 10 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        animation: floatParticle ${duration}s linear infinite;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
        createParticle(container); // Create new particle
    }, duration * 1000);
}

// =========================
// 🎵 Audio Feedback (Optional)
// =========================
function initAudioFeedback() {
    // Create audio context for subtle sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playTone(frequency, duration) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    // Add sound to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            playTone(440 + (index * 100), 0.1);
        });
    });
}

// =========================
// 📱 Mobile Optimizations
// =========================
function initMobileOptimizations() {
    // Disable heavy effects on mobile for performance
    if (window.innerWidth < 768) {
        // Remove all particles
        const particles = document.querySelectorAll('.dynamic-particle, .particle');
        particles.forEach(particle => particle.remove());
        
        // Disable floating shapes animations
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            shape.style.animation = 'none';
            shape.style.display = 'none';
        });
        
        // Disable gradient orbs animations
        const orbs = document.querySelectorAll('.orb, .glow-orb');
        orbs.forEach(orb => {
            orb.style.animation = 'none';
            orb.style.display = 'none';
        });
        
        // Disable custom cursor on mobile
        const customCursor = document.querySelector('.custom-cursor');
        if (customCursor) {
            customCursor.remove();
        }
        
        // Disable parallax effects
        window.removeEventListener('scroll', initParallaxEffects);
        
        // Reduce feature item animations
        const featureItems = document.querySelectorAll('.feature-item');
        featureItems.forEach(item => {
            item.style.animation = 'none';
            item.style.transition = 'none';
        });
        
        // Disable ripple effects
        const rippleElements = document.querySelectorAll('.btn-ripple, .feature-glow');
        rippleElements.forEach(element => element.remove());
    }
}

// =========================
// 🎯 Performance Optimizations
// =========================
function initPerformanceOptimizations() {
    // Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Scroll-based animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Preload critical images
    const criticalImages = [
        './images/About1.jpeg',
        './images/About2.jpeg',
        './images/About3.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// =========================
// 🚀 Initialize Everything
// =========================
window.addEventListener('load', () => {
    // Check if mobile device
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile) {
        initDynamicBackground();
    }
    
    initMobileOptimizations();
    initPerformanceOptimizations();
    
    // Optional: Enable audio feedback (only on desktop)
    // if (!isMobile) {
    //     initAudioFeedback();
    // }
});

// =========================
// 🎨 CSS Animations (Added via JavaScript)
// =========================
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .custom-cursor {
        transition: transform 0.1s ease;
    }
    
    .dynamic-particle {
        will-change: transform, opacity;
    }
`;
document.head.appendChild(style);

// =========================
// 🏪 Shop Modal Functionality
// =========================
// Global variable to store selected plan
let selectedPlanData = {
    plan: '',
    price: ''
};

// Function to select plan from pricing table
function selectPlan(plan, price) {
    selectedPlanData.plan = plan;
    selectedPlanData.price = price;
    
    // Store in hidden field
    const hiddenField = document.getElementById('selectedPlan');
    if (hiddenField) {
        hiddenField.value = plan;
    }
    
    // Open the modal
    const modal = document.getElementById('addShopModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        const hamburger = document.getElementById('hamburger-menu');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
}

function initShopModal() {
    const modal = document.getElementById('addShopModal');
    const btn = document.getElementById('addShopBtn');
    const btnNav = document.getElementById('addShopBtnNav');
    const btnNavMobile = document.getElementById('addShopBtnNavMobile');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('shopForm');
    
    // Function to open modal
    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        const hamburger = document.getElementById('hamburger-menu');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
    
    // Open modal when button is clicked (promotions section)
    if (btn) {
        btn.addEventListener('click', function() {
            openModal();
        });
    }
    
    // Open modal when navbar button is clicked (desktop)
    if (btnNav) {
        btnNav.addEventListener('click', function() {
            openModal();
        });
    }
    
    // Open modal when mobile navbar button is clicked
    if (btnNavMobile) {
        btnNavMobile.addEventListener('click', function() {
            openModal();
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            const hamburger = document.getElementById('hamburger-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
            form.reset(); // Reset form
        });
    }
    
    // Close modal when clicking outside the modal content
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                form.reset();
            }
        });
    }
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const shopCategory = document.getElementById('shopCategory').value;
            const shopName = document.getElementById('shopName').value;
            const ownerName = document.getElementById('ownerName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const selectedPlan = document.getElementById('selectedPlan').value || selectedPlanData.plan || 'Not Selected';
            const planPrice = selectedPlanData.price || '';
            
            // Validate form
            if (!shopCategory || !shopName || !ownerName || !phoneNumber) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Format message for WhatsApp
            const whatsappNumber = '918985615264';
            let message = `Hello! I would like to add my shop to SkilleR7.\n\n` +
                          `Shop Category: ${shopCategory}\n` +
                          `Shop Name: ${shopName}\n` +
                          `Owner Name: ${ownerName}\n` +
                          `Phone Number: ${phoneNumber}`;
            
            // Add selected plan if available
            if (selectedPlan && selectedPlan !== 'Not Selected') {
                message += `\n\nSelected Subscription Plan: ${selectedPlan}`;
                if (planPrice) {
                    message += ` (₹${planPrice})`;
                }
            }
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
            
            // Close modal and reset form
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            form.reset();
            selectedPlanData = { plan: '', price: '' }; // Reset selected plan
            
            // Show success message
            alert('Opening WhatsApp... Please send the message to complete your shop registration.');
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            form.reset();
        }
    });
}

// =========================
// 📱 Mobile Menu Functionality
// =========================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close menu when clicking on nav items (mobile)
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Only close if it's a link (not the Add Shop button)
            if (item.tagName === 'A') {
                if (window.innerWidth <= 768) {
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                    if (hamburger) {
                        hamburger.classList.remove('active');
                    }
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = navMenu && navMenu.contains(event.target);
            const isClickOnHamburger = hamburger && hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    // Close menu on window resize (if resizing to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            document.body.style.overflow = 'auto';
        }
    });
}