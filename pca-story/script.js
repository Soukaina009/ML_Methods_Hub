const totalSlides = 10;
let currentSlide = 1;

function normalizeSlidesToStackLayout() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide) => {
        if (slide.classList.contains('slide-1')) return;

        let stack = slide.querySelector(':scope > .slide-stack');
        if (!stack) {
            stack = document.createElement('div');
            stack.className = 'slide-stack';

            while (slide.firstChild) {
                stack.appendChild(slide.firstChild);
            }
            slide.appendChild(stack);
        }
    });
}

function updateUI() {
    const current = document.getElementById('currentSlide');
    const total = document.getElementById('totalSlides');
    const progress = document.getElementById('progressBar');

    if (current) current.textContent = String(currentSlide);
    if (total) total.textContent = String(totalSlides);
    if (progress) progress.style.width = `${(currentSlide / totalSlides) * 100}%`;
}

function showSlide(target) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = Math.min(Math.max(target, 1), totalSlides);

    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide - 1) {
            slide.classList.add('active');
        } else if (index < currentSlide - 1) {
            slide.classList.add('prev');
        }
    });

    const active = document.querySelector('.slide.active');
    if (active) {
        // force reset scroll and ensure content starts at top of stack
        active.scrollTop = 0;
        const stack = active.querySelector('.slide-stack');
        if (stack) {
            stack.scrollTop = 0;
            // ensure the stack aligns its children centrally when requested (closing slide)
            if (active.classList.contains('slide-11')) {
                stack.style.display = 'grid';
                stack.style.justifyItems = 'center';
            } else {
                stack.style.display = '';
                stack.style.justifyItems = '';
            }
        }
    }

    updateUI();
    animateActiveSlide();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function animateActiveSlide() {
    const active = document.querySelector('.slide.active');
    if (!active) return;

    active.querySelectorAll('.info-card, .formula-card, .diagram-card, .code-card, .takeaway, .benefit-item, .pipeline-step, .closing-card, .panel, .wide-note').forEach((el, index) => {
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = `riseIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) ${(index * 0.045)}s both`;
    });
}

function initKeyboard() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
            event.preventDefault();
            nextSlide();
        }
        if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
            event.preventDefault();
            previousSlide();
        }
    });
}

function initClickNavigation() {
    document.querySelectorAll('.slide').forEach((slide) => {
        slide.addEventListener('dblclick', () => nextSlide());
    });
}

function init() {
    normalizeSlidesToStackLayout();
    const first = document.querySelector('.slide-1');
    if (first) first.classList.add('active');
    document.querySelectorAll('.slide').forEach((slide) => {
        slide.scrollTop = 0;
    });
    updateUI();
    initKeyboard();
    initClickNavigation();
    animateActiveSlide();
}

document.addEventListener('DOMContentLoaded', init);

const style = document.createElement('style');
style.textContent = `
@keyframes riseIn {
    from {
        opacity: 0;
        transform: translateY(22px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
`;
document.head.appendChild(style);
