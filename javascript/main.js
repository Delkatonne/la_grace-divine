// ============================================
// LA GRÂCE DIVINE - main.js
// Menu hamburger + formulaire + animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  console.log('✅ La Grâce Divine - JavaScript chargé');

  // ==========================================
  // 1. MENU HAMBURGER
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    console.log('✅ Menu hamburger initialisé');

    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = navMenu.classList.toggle('show-menu');
      hamburger.classList.toggle('active', isOpen);

      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Fermer le menu après clic sur un lien
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer en cliquant à l'extérieur
    document.addEventListener('click', function (e) {
      if (
        navMenu.classList.contains('show-menu') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navMenu.classList.remove('show-menu');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Fermer avec Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navMenu.classList.remove('show-menu');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    console.warn('⚠️ Hamburger ou navMenu introuvable');
  }

  // ==========================================
  // 2. FORMULAIRE DE CONTACT
  // ==========================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name || !email || !message) return;

      if (
        !name.value.trim() ||
        !email.value.trim() ||
        !message.value.trim()
      ) {
        alert('❌ Veuillez remplir tous les champs obligatoires.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email.value.trim())) {
        alert('❌ Veuillez entrer une adresse email valide.');
        return;
      }

      alert('✅ Merci ' + name.value.trim() + ' ! Votre message a été envoyé.');
      contactForm.reset();
    });
  }

  // ==========================================
  // 3. ANIMATION DES CARTES
  // ==========================================
  const cards = document.querySelectorAll('.prestation-card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      const icon = this.querySelector('.icon i');

      if (icon) {
        icon.style.transition = 'transform 0.15s ease';
        icon.style.transform = 'scale(1.3)';

        setTimeout(function () {
          icon.style.transform = 'scale(1)';
        }, 200);
      }
    });
  });

  console.log('✅ Site initialisé avec succès !');
});
