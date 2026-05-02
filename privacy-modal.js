/* =============================================
   privacy-modal.js — Olich Constructions
   Injects the privacy policy modal into any
   page that loads this script. Link it just
   before </body> on every HTML page.
   ============================================= */

(function () {
  /* ── Modal HTML ── */
  const modalHTML = `
  <div class="privacy-overlay" id="privacyOverlay" role="dialog" aria-modal="true" aria-labelledby="privacyTitle">
    <div class="privacy-modal">
      <div class="privacy-modal-header">
        <h2 id="privacyTitle">Privacy Policy</h2>
        <button class="privacy-modal-close" id="privacyClose" aria-label="Close privacy policy">&times;</button>
      </div>
      <div class="privacy-modal-body">

        <p>At <strong>Olich Constructions</strong>, we respect your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.</p>

        <h3>1. Information We Collect</h3>
        <p>We only collect information you voluntarily provide through our contact form:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number (optional)</li>
          <li>Your company or organisation name (optional)</li>
          <li>Your message</li>
        </ul>
        <p>We do not collect any information automatically beyond basic cookie usage described below.</p>

        <h3>2. How We Use Your Information</h3>
        <p>Information submitted through the contact form is used solely to:</p>
        <ul>
          <li>Respond to your enquiry or project request</li>
          <li>Follow up on services you have expressed interest in</li>
        </ul>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h3>3. Contact Form & Third-Party Services</h3>
        <p>Our contact form is powered by <strong>EmailJS</strong>, a third-party email delivery service. When you submit the form, your message details are transmitted through EmailJS servers to reach us. EmailJS has its own privacy policy available at <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener">emailjs.com</a>.</p>

        <h3>4. Cookies</h3>
        <p>This website uses minimal cookies for basic functionality only:</p>
        <ul>
          <li><strong>Session data</strong> — a temporary session value is stored to prevent spam submissions on our contact form. This is cleared when you close your browser.</li>
        </ul>
        <p>We do not use tracking cookies, advertising cookies, or analytics cookies.</p>

        <h3>5. Third-Party Resources</h3>
        <p>This site loads resources from the following third-party providers, which may set their own cookies or collect usage data:</p>
        <ul>
          <li><strong>Google Fonts</strong> — for typography</li>
          <li><strong>Font Awesome (Cloudflare CDN)</strong> — for icons</li>
        </ul>
        <p>Please refer to their respective privacy policies for details.</p>

        <h3>6. Data Retention</h3>
        <p>We retain enquiry information only for as long as necessary to respond to and fulfil your request. We do not store your data in any database on this website.</p>

        <h3>7. Your Rights</h3>
        <p>You have the right to request access to, correction of, or deletion of any personal information you have submitted to us. To exercise these rights, contact us at <a href="mailto:info@olichconstructions.com">info@olichconstructions.com</a>.</p>

        <h3>8. Contact</h3>
        <p>If you have any questions about this privacy policy, please reach us at:<br>
        <a href="mailto:info@olichconstructions.com">info@olichconstructions.com</a><br>
        Gaborone, Botswana</p>

        <p class="privacy-updated">Last updated: May 2026</p>
      </div>
    </div>
  </div>`;

  /* ── Inject modal into page ── */
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const overlay = document.getElementById('privacyOverlay');
  const closeBtn = document.getElementById('privacyClose');

  /* ── Open: any link with data-privacy or href="#privacy" ── */
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-privacy], a[href="#privacy"]');
    if (trigger) {
      e.preventDefault();
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
  });

  /* ── Close: X button ── */
  closeBtn.addEventListener('click', closeModal);

  /* ── Close: click outside modal ── */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  /* ── Close: Escape key ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
})();
