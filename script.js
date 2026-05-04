 const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX - 8 + 'px';
      cursor.style.top  = e.clientY - 8 + 'px';
    });
     document.querySelectorAll('a, button, .product-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
    });

     const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .lifestyle-inner, .section-header').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });


    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.textContent = '✓';
        btn.style.background = 'var(--accent)';
        btn.style.color = 'white';
        setTimeout(() => {
          btn.textContent = '+';
          btn.style.background = '';
          btn.style.color = '';
        }, 1500);
      });
    });