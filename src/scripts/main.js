/**
 * Aakash Das — Client-Side Script
 * Lightweight, accessible, zero-dependency progressive enhancement (<3KB)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Testimonials show more/less ---
  const reviewsBtn = document.querySelector('.js-toggle-testimonials');
  const reviewsGrid = document.getElementById('testimonials-grid');
  if (reviewsBtn && reviewsGrid) {
    const extraCount = reviewsGrid.querySelectorAll('.is-extra').length;
    reviewsBtn.addEventListener('click', () => {
      const collapsed = reviewsGrid.classList.toggle('is-collapsed');
      reviewsBtn.setAttribute('aria-expanded', String(!collapsed));
      reviewsBtn.textContent = collapsed ? `Show ${extraCount} more reviews` : 'Show fewer reviews';
    });
  }

  // --- Theme Toggle ---
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Contact Modal Management ---
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtns = document.querySelectorAll('.modal-close, .js-modal-close');
  const openModalBtns = document.querySelectorAll('.js-open-contact-modal');

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('is-active');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const firstInput = modalBackdrop.querySelector('input:not([type="hidden"]), textarea');
      if (firstInput) firstInput.focus();
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('is-active');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // --- Keyboard Shortcuts (ESC to close modals) ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
    }
  });

  // --- Contact Form AJAX Handler (Formspree) ---
  const contactForms = document.querySelectorAll('.js-contact-form');
  contactForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const feedback = form.querySelector('.form-feedback') || document.createElement('div');
      
      if (!form.contains(feedback)) {
        feedback.className = 'form-feedback';
        form.appendChild(feedback);
      }

      const originalBtnText = submitBtn ? submitBtn.innerText : 'Send Message';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
      }

      feedback.className = 'form-feedback';
      feedback.style.display = 'none';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          form.reset();
          feedback.className = 'form-feedback is-success';
          feedback.innerHTML = '<strong>Message received!</strong> Thank you for reaching out. Aakash will get back to you shortly.';
          feedback.style.display = 'block';
          if (submitBtn) {
            submitBtn.innerText = 'Sent Successfully';
          }
        } else {
          const data = await response.json().catch(() => ({}));
          feedback.className = 'form-feedback is-error';
          feedback.innerHTML = data.error || 'Something went wrong. Please email directly at <a href="mailto:aakashjsr@gmail.com">aakashjsr@gmail.com</a>.';
          feedback.style.display = 'block';
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
          }
        }
      } catch (err) {
        feedback.className = 'form-feedback is-error';
        feedback.innerHTML = 'Network error. Please email directly at <a href="mailto:aakashjsr@gmail.com">aakashjsr@gmail.com</a>.';
        feedback.style.display = 'block';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalBtnText;
        }
      }
    });
  });

  // --- Image Lightbox for Case Study Galleries ---
  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close image">&times;</button>
      <img class="lightbox-img" src="" alt="Enlarged screenshot" />
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function openLightbox(src, alt) {
    const img = lightbox.querySelector('.lightbox-img');
    img.src = src;
    img.alt = alt || 'Case study screenshot';
    lightbox.classList.add('is-active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.gallery-img').forEach((img) => {
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });
});
