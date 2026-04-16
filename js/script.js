/* =========================================================
   OUTDOORS WITH KARAN — script.js
   ========================================================= */

// ── Transparent → solid nav on scroll ────────────────
const header = document.getElementById('header');

function updateHeader() {
    header.classList.toggle('solid', window.scrollY > 60);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ── Hero parallax ─────────────────────────────────────
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight * 1.2) {
            heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        }
    }, { passive: true });
}

// ── Hamburger ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', e => {
        e.stopPropagation();
        const open = navLinks.classList.toggle('active');
        hamburger.classList.toggle('open', open);
    });

    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });
}

// ── Smooth scroll with offset ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ── Stats counter ──────────────────────────────────────
let countersRun = false;

function runCounters() {
    if (countersRun) return;
    countersRun = true;

    document.querySelectorAll('.stat-n').forEach(el => {
        const target = +el.dataset.target;
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(tick);
    });
}

// ── Scroll reveal + stats trigger ─────────────────────
const revealEls = document.querySelectorAll([
    '.chapter',
    '.service-card',
    '.exp-feature',
    '.exp-small',
    '.gm-item',
    '.blog-card',
    '.cert-group',
    '.edu-card',
    '.exp-footnote',
    '.about-photo-col',
    '.about-text-col',
].join(','));

revealEls.forEach((el) => {
    el.classList.add('reveal');
    // stagger within parent
    const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx < 4) el.style.transitionDelay = `${idx * 0.1}s`;
});

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => io.observe(el));

// Stats strip observer
const statsStrip = document.querySelector('.stats-strip');
if (statsStrip) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) runCounters();
    }, { threshold: 0.4 }).observe(statsStrip);
}

// ── Active nav link ────────────────────────────────────
const sections   = Array.from(document.querySelectorAll('section[id]'));
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    let current = '';
    sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
}, { passive: true });

// ── Contact form ───────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name    = form.querySelector('[name="name"]').value.trim();
        const email   = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        const btn = form.querySelector('.f-submit');
        btn.textContent = 'Message Sent ✓';
        btn.classList.add('sent');
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.classList.remove('sent');
            btn.disabled = false;
            form.reset();
        }, 4500);
    });
}

// ── Gallery lightbox ───────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbClose  = document.getElementById('lbClose');

document.querySelectorAll('.gm-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (!img) return;
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 350);
}

if (lbClose)  lbClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});
