document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Create an intersection observer
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    // Get the ID of the section that is currently intersecting
                    const id = entry.target.id;

                    // Remove active class from all nav links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add the active class to the link that matches the ID
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    activeLink.classList.add('active');
                }
            });
        },
        {
            threshold: 0.6 // Trigger when 60% of the section is in view
        }
    );

 // Observe each section
 sections.forEach(section => {
    observer.observe(section);
});
});

