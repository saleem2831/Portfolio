
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
    
    });
 