
    document.addEventListener('DOMContentLoaded', (event) => {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Fade-in animation on scroll
        const fadeInElements = document.querySelectorAll('.fade-in-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        fadeInElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(element);
        });

        // Skills hover effect
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.addEventListener('mouseover', () => {
                const skillName = skill.getAttribute('data-skill');
                skill.textContent = `${skillName}: Expert`;
            });
            skill.addEventListener('mouseout', () => {
                const skillName = skill.getAttribute('data-skill');
                skill.textContent = skillName;
            });
        });

        // Theme switcher
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
                themeBtn.textContent = 'Light Mode';
            } else {
                themeBtn.textContent = 'Dark Mode';
            }
        });

        // Typing effect for hero section
        // const heroText = "Full Stack Developer";
        const heroP = document.querySelector('.hero p');
        let i = 0;
        function typeWriter() {
            if (i < heroText.length) {
                heroP.innerHTML += heroText.charAt(i);
                i++;
                setTimeout(typeWriter, 1000);
            }
        }
        typeWriter();

        // Form submission
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            alert(formData);
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Message sent successfully!');
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        });
    });
 