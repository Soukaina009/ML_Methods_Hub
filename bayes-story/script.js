const toggleStory = document.getElementById('toggleStory');
const themeToggle = document.getElementById('themeToggle');
const duelButtons = Array.from(document.querySelectorAll('.toggle'));
const modeTitle = document.getElementById('modeTitle');
const modeShape = document.getElementById('modeShape');
const modePoints = document.getElementById('modePoints');
const modeSummary = document.getElementById('modeSummary');
const modeFormulas = document.getElementById('modeFormulas');
const storyTrack = document.getElementById('storyTrack');
const slidePrev = document.getElementById('slidePrev');
const slideNext = document.getElementById('slideNext');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const slideCurrent = document.getElementById('slideCurrent');
const slideTotal = document.getElementById('slideTotal');
const navPills = Array.from(document.querySelectorAll('.nav-pill'));
const storyShell = document.getElementById('storyShell');

const slides = ['bayes', 'gauss', 'boundary', 'compare', 'others'];
let currentSlideIndex = 0;

const modes = {
    lda: {
        title: 'LDA: même forme pour toutes les classes',
        shapeClass: 'linear',
        summary: 'LDA suppose une covariance partagée. Le discriminant perd ses termes au carré, donc la frontière devient une ligne ou un hyperplan.',
        points: [
            'On suppose que toutes les classes partagent la même covariance Σ.',
            'Les termes quadratiques s’annulent dans le discriminant.',
            'La frontière devient linéaire: droite, hyperplan, séparation simple.',
            'Avantage: robuste, stable, efficace quand les données sont limitées.'
        ],
        formulas: [
            '<span class="equation-label">LDA</span><span class="equation">g<sub>k</sub>(x) = x<sup>T</sup> Σ<sup>−1</sup> μ<sub>k</sub> − 1/2 μ<sub>k</sub><sup>T</sup> Σ<sup>−1</sup> μ<sub>k</sub> + log π<sub>k</sub></span>',
            'Même covariance Σ pour toutes les classes. Les termes quadratiques disparaissent, donc la frontière reste linéaire.'
        ]
    },
    qda: {
        title: 'QDA: chaque classe garde sa propre géométrie',
        shapeClass: 'quadratic',
        summary: 'QDA autorise une covariance différente par classe. On garde alors les termes au carré, ce qui donne des frontières courbes.',
        points: [
            'Chaque classe possède sa propre covariance Σ_k.',
            'Les termes quadratiques restent présents dans le discriminant.',
            'La frontière devient quadratique: courbes, ellipses, paraboles.',
            'Avantage: plus flexible, mais il faut plus de données pour bien l’estimer.'
        ],
        formulas: [
            '<span class="equation-label">QDA</span><span class="equation">g<sub>k</sub>(x) = −1/2 log |Σ<sub>k</sub>| − 1/2 (x − μ<sub>k</sub>)<sup>T</sup> Σ<sub>k</sub><sup>−1</sup> (x − μ<sub>k</sub>) + log π<sub>k</sub></span>',
            'Chaque classe possède sa propre covariance Σ<sub>k</sub>. Les termes quadratiques restent, donc la frontière devient courbe.'
        ]
    }
};

function setMode(mode) {
    const config = modes[mode];
    if (!config) {
        return;
    }

    duelButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.mode === mode);
    });

    modeTitle.textContent = config.title;
    modeShape.className = `shape ${config.shapeClass}`;
    modePoints.innerHTML = config.points.map((point) => `<li>${point}</li>`).join('');
    modeSummary.textContent = config.summary;
    modeFormulas.innerHTML = config.formulas.map((line, index) => {
        const className = index === 1 ? 'formula-line subtle' : 'formula-line';
        return `<div class="${className}">${line}</div>`;
    }).join('');
}

function renderSlide() {
    if (!storyTrack) {
        return;
    }

    storyTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    if (slideCurrent) {
        slideCurrent.textContent = String(currentSlideIndex + 1);
    }
    if (slideTotal) {
        slideTotal.textContent = String(slides.length);
    }

    navPills.forEach((pill) => {
        pill.classList.toggle('active', Number(pill.dataset.slide) === currentSlideIndex);
    });

    if (storyShell) {
        storyShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function goToSlide(index) {
    currentSlideIndex = Math.max(0, Math.min(slides.length - 1, index));
    renderSlide();
}

function nextPanel() {
    goToSlide(currentSlideIndex + 1);
}

function previousPanel() {
    goToSlide(currentSlideIndex - 1);
}

function initNavigation() {
    navPills.forEach((pill) => {
        pill.addEventListener('click', () => {
            goToSlide(Number(pill.dataset.slide));
        });
    });

    [slidePrev, prevSlide].forEach((button) => {
        if (button) {
            button.addEventListener('click', previousPanel);
        }
    });

    [slideNext, nextSlide].forEach((button) => {
        if (button) {
            button.addEventListener('click', nextPanel);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            nextPanel();
        }
        if (event.key === 'ArrowLeft') {
            previousPanel();
        }
    });
}

function initRevealMotion() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.14
    });

    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(18px)';
        card.style.transition = 'opacity 520ms ease, transform 520ms ease';
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initRevealMotion();
    setMode('lda');
    renderSlide();

    // Initialize theme (light/dark) with preference saved in localStorage
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('bayesTheme', theme);
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
            themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    }

    (function initTheme() {
        // Restore original light default to match initial presentation
        // Overwrite any previous preference so the page appears as at the start
        setTheme('light');
        localStorage.setItem('bayesTheme', 'light');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    })();

    duelButtons.forEach((button) => {
        button.addEventListener('click', () => {
            setMode(button.dataset.mode);
        });
    });

    if (toggleStory) {
        toggleStory.addEventListener('click', () => {
            goToSlide(3);
            setMode('qda');
        });
    }
});