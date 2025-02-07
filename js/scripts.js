
    // Hero Animation
    gsap.to('.hero-content', { 
      opacity: 1, 
      y: 0, 
      duration: 1.5, 
      delay: 0.5,
      ease: 'power3.out'
    });

    // Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade-In Animation for Sections
    gsap.utils.toArray('.fade-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Gradient Section Text Reveal Animation
    gsap.utils.toArray('.gradient-section h2').forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
        },
      });
    });

    gsap.utils.toArray('.gradient-section p').forEach((paragraph) => {
      gsap.from(paragraph, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 80%',
        },
      });
    });


    // Parallax Effect for Product Cards
    gsap.utils.toArray('.product-card').forEach((card) => {
      gsap.to(card, {
        scale: 1.05,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      });
    });

    // Testimonial Card Flip Animation
    gsap.utils.toArray('.testimonial-card').forEach((card) => {
      gsap.from(card, {
        rotateY: 90,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });

    // Contact Form Input Focus Animation
    const inputs = document.querySelectorAll('.contact-form input');
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        gsap.to(input, { borderColor: '#f39c12', duration: 0.3 });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, { borderColor: '#ddd', duration: 0.3 });
      });
    });

    // Button Hover Morph Animation
    const buttons = document.querySelectorAll('.btn, .btn-hero');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.3 });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });
    });

    function initMap() {
        // Define the location (latitude, longitude)
        const location = { lat: 40.7128, lng: -74.006 }; // Example: New York City
        // Create the map
        const map = new google.maps.Map(document.getElementById('google-map'), {
          center: location,
          zoom: 12,
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#2c3e50' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#f39c12' }] },
          ],
        });
        // Add a marker
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Simple Store Location',
        });
      }