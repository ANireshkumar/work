document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === '' || email === '') {
            e.preventDefault();
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        } else {
            // Show success message
            alert('Thank you for your inquiry! We will get back to you soon.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Modal functionality for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    const modal = document.getElementById('feature-modal');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalDescription.textContent = info;
            modal.style.display = 'block';
        });
    });

    // Close the modal when the user clicks on <span> (x)
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑ Top';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Dynamic Content Loading for Testimonials
    const loadMoreTestimonialsBtn = document.getElementById('load-more-testimonials');
    loadMoreTestimonialsBtn.addEventListener('click', function() {
        const newTestimonials = [
            { text: "Amazing service! Highly recommend.", author: "Client A" },
            { text: "A game changer for my business.", author: "Client B" },
            { text: "Professional and efficient!", author: "Client C" }
        ];

        const testimonialsContainer = document.getElementById('testimonials');
        newTestimonials.forEach(testimonial => {
            const blockquote = document.createElement('blockquote');
            blockquote.innerHTML = `"${testimonial.text}" - <strong>${testimonial.author}</strong>`;
            testimonialsContainer.appendChild(blockquote);
        });

        // Hide the button after loading more testimonials
        loadMoreTestimonialsBtn.style.display = 'none';
    });
});