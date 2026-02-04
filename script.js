    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 1.0 });

    document.querySelectorAll('.fade').forEach(el => observer.observe(el));