/* =========================================================
   BLOG PAGE SCRIPT
   ========================================================= */

// ── Header (already solid on blog page) ───────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('solid', window.scrollY > 10);
}, { passive: true });

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
}

// ── Category filter ────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const postCards  = document.querySelectorAll('.post-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        postCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ── Newsletter form ────────────────────────────────────
const nlForm = document.getElementById('nlForm');
if (nlForm) {
    nlForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = nlForm.querySelector('button');
        btn.textContent = 'Subscribed ✓';
        btn.style.background = 'rgba(255,255,255,0.3)';
        btn.style.color = '#fff';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = 'Subscribe';
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
            nlForm.reset();
        }, 4000);
    });
}

// ── Scroll reveal ──────────────────────────────────────
document.querySelectorAll('.post-card, .blog-featured, .newsletter-block').forEach(el => {
    el.classList.add('reveal');
});

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
